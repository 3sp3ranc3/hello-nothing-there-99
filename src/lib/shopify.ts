import { toast } from "sonner";

// ─── Config ───────────────────────────────────────────────────────────────────
const SHOPIFY_STORE_DOMAIN = "kgb1q6-ky.myshopify.com";
const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STOREFRONT_TOKEN = "1b6f18a5161dfe421119e9d3a09c75c8";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

// Checkout always goes through the permanent .myshopify.com domain
const CHECKOUT_DOMAIN = "tempo-pickleball.myshopify.com";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: { amount: string; currencyCode: string };
    };
    images: {
      edges: Array<{ node: { url: string; altText: string | null } }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          availableForSale: boolean;
          selectedOptions: Array<{ name: string; value: string }>;
        };
      }>;
    };
    options: Array<{ name: string; values: string[] }>;
  };
}

export interface CartItem {
  lineId: string | null;
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

// ─── Core API helper ──────────────────────────────────────────────────────────
export async function storefrontFetch(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (res.status === 402) {
    toast.error("Store requires an active Shopify plan.");
    return null;
  }

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "));
  }

  return json;
}

// ─── URL helper ───────────────────────────────────────────────────────────────
export function buildCheckoutUrl(raw: string): string {
  try {
    const url = new URL(raw);
    url.hostname = CHECKOUT_DOMAIN;
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return raw;
  }
}

// ─── GraphQL documents ────────────────────────────────────────────────────────
export const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id title description handle
      priceRange { minVariantPrice { amount currencyCode } }
      images(first: 5) { edges { node { url altText } } }
      variants(first: 10) {
        edges {
          node {
            id title
            price { amount currencyCode }
            availableForSale
            selectedOptions { name value }
          }
        }
      }
      options { name values }
    }
  }
`;

const CART_CREATE = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges { node { id merchandise { ... on ProductVariant { id } } } }
        }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges { node { id merchandise { ... on ProductVariant { id } } } }
        }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_UPDATE = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { id }
      userErrors { field message }
    }
  }
`;

const CART_LINES_REMOVE = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { id }
      userErrors { field message }
    }
  }
`;

const CART_QUERY = `
  query GetCart($id: ID!) {
    cart(id: $id) { id totalQuantity }
  }
`;

// ─── Error helpers ────────────────────────────────────────────────────────────
type UserError = { field: string[] | null; message: string };

function isCartGone(errors: UserError[]): boolean {
  return errors.some((e) =>
    e.message.toLowerCase().includes("cart not found") ||
    e.message.toLowerCase().includes("does not exist")
  );
}

// ─── Cart operations ──────────────────────────────────────────────────────────
export async function createCart(
  item: CartItem
): Promise<{ cartId: string; checkoutUrl: string; lineId: string } | null> {
  const data = await storefrontFetch(CART_CREATE, {
    lines: [{ quantity: item.quantity, merchandiseId: item.variantId }],
  });

  const result = data?.data?.cartCreate;
  if (!result) return null;
  if (result.userErrors?.length) {
    console.error("cartCreate errors:", result.userErrors);
    return null;
  }

  const cart = result.cart;
  if (!cart?.checkoutUrl) return null;

  const lineId = cart.lines.edges[0]?.node?.id;
  if (!lineId) return null;

  return {
    cartId: cart.id,
    checkoutUrl: buildCheckoutUrl(cart.checkoutUrl),
    lineId,
  };
}

export async function addCartLine(
  cartId: string,
  item: CartItem
): Promise<{ success: boolean; lineId?: string; cartGone?: boolean }> {
  const data = await storefrontFetch(CART_LINES_ADD, {
    cartId,
    lines: [{ quantity: item.quantity, merchandiseId: item.variantId }],
  });

  const result = data?.data?.cartLinesAdd;
  if (!result) return { success: false };

  const errors: UserError[] = result.userErrors ?? [];
  if (isCartGone(errors)) return { success: false, cartGone: true };
  if (errors.length) return { success: false };

  const lines: Array<{ node: { id: string; merchandise: { id: string } } }> =
    result.cart?.lines?.edges ?? [];
  const match = lines.find((l) => l.node.merchandise.id === item.variantId);
  return { success: true, lineId: match?.node?.id };
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<{ success: boolean; cartGone?: boolean }> {
  const data = await storefrontFetch(CART_LINES_UPDATE, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });

  const result = data?.data?.cartLinesUpdate;
  if (!result) return { success: false };

  const errors: UserError[] = result.userErrors ?? [];
  if (isCartGone(errors)) return { success: false, cartGone: true };
  if (errors.length) return { success: false };
  return { success: true };
}

export async function removeCartLine(
  cartId: string,
  lineId: string
): Promise<{ success: boolean; cartGone?: boolean }> {
  const data = await storefrontFetch(CART_LINES_REMOVE, {
    cartId,
    lineIds: [lineId],
  });

  const result = data?.data?.cartLinesRemove;
  if (!result) return { success: false };

  const errors: UserError[] = result.userErrors ?? [];
  if (isCartGone(errors)) return { success: false, cartGone: true };
  if (errors.length) return { success: false };
  return { success: true };
}

export async function fetchCart(cartId: string) {
  return storefrontFetch(CART_QUERY, { id: cartId });
}
