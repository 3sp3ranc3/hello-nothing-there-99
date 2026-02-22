import {
  sendShopifyAnalytics,
  getClientBrowserParameters,
  AnalyticsEventName,
  type ShopifyPageViewPayload,
  type ShopifyAddToCartPayload,
  ShopifySalesChannel,
} from "@shopify/hydrogen-react";

// ─── Config ───────────────────────────────────────────────────────────────────
const SHOPIFY_STORE_DOMAIN = "checkout.tempopickleball.store";
const SHOPIFY_STOREFRONT_ID = "156470";

// We need the shop's GID for analytics. Query it once and cache.
let cachedShopId: string | null = null;

export async function getShopId(): Promise<string> {
  if (cachedShopId) return cachedShopId;

  // Fetch shop ID from Storefront API
  const { storefrontFetch } = await import("@/lib/shopify");
  const data = await storefrontFetch(`{ shop { id } }`);
  cachedShopId = data?.data?.shop?.id ?? "";
  return cachedShopId;
}

// ─── Base payload builder ─────────────────────────────────────────────────────
function buildBasePayload(shopId: string): Omit<ShopifyPageViewPayload, "hasUserConsent"> {
  return {
    ...getClientBrowserParameters(),
    shopId,
    shopifySalesChannel: ShopifySalesChannel.headless,
    storefrontId: SHOPIFY_STOREFRONT_ID,
    currency: "AUD",
  } as Omit<ShopifyPageViewPayload, "hasUserConsent">;
}

// ─── Page View ────────────────────────────────────────────────────────────────
export async function trackPageView(url?: string) {
  try {
    const shopId = await getShopId();
    const payload: ShopifyPageViewPayload = {
      ...buildBasePayload(shopId),
      hasUserConsent: true,
      canonicalUrl: url ?? window.location.href,
    };

    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    }, SHOPIFY_STORE_DOMAIN);
  } catch (err) {
    console.error("[Shopify Analytics] Page view tracking failed:", err);
  }
}

// ─── Product View ─────────────────────────────────────────────────────────────
export async function trackProductView(product: {
  productGid: string;
  variantGid: string;
  name: string;
  variantName: string;
  brand: string;
  price: string;
  category?: string;
}) {
  try {
    const shopId = await getShopId();
    const payload = {
      ...buildBasePayload(shopId),
      hasUserConsent: true,
      canonicalUrl: window.location.href,
      products: [
        {
          productGid: product.productGid,
          variantGid: product.variantGid,
          name: product.name,
          variantName: product.variantName,
          brand: product.brand,
          price: product.price,
          category: product.category ?? "",
        },
      ],
    };

    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    }, SHOPIFY_STORE_DOMAIN);
  } catch (err) {
    console.error("[Shopify Analytics] Product view tracking failed:", err);
  }
}

// ─── Add to Cart ──────────────────────────────────────────────────────────────
export async function trackAddToCart(cartItem: {
  cartId: string;
  productGid: string;
  variantGid: string;
  name: string;
  variantName: string;
  brand: string;
  price: string;
  quantity: number;
  category?: string;
}) {
  try {
    const shopId = await getShopId();
    const payload: ShopifyAddToCartPayload = {
      ...buildBasePayload(shopId),
      hasUserConsent: true,
      cartId: cartItem.cartId,
      totalValue: parseFloat(cartItem.price) * cartItem.quantity,
      products: [
        {
          productGid: cartItem.productGid,
          variantGid: cartItem.variantGid,
          name: cartItem.name,
          variantName: cartItem.variantName,
          brand: cartItem.brand,
          price: cartItem.price,
          quantity: cartItem.quantity,
          category: cartItem.category ?? "",
        },
      ],
    } as ShopifyAddToCartPayload;

    sendShopifyAnalytics({
      eventName: AnalyticsEventName.ADD_TO_CART,
      payload,
    }, SHOPIFY_STORE_DOMAIN);
  } catch (err) {
    console.error("[Shopify Analytics] Add to cart tracking failed:", err);
  }
}
