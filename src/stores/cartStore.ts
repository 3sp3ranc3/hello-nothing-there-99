import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CartItem,
  createCart,
  addCartLine,
  updateCartLine,
  removeCartLine,
  fetchCart,
  buildCheckoutUrl,
} from "@/lib/shopify";

interface CartStore {
  items: CartItem[];
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;
  isSyncing: boolean;
  addItem: (item: Omit<CartItem, "lineId">) => Promise<void>;
  updateQuantity: (variantId: string, quantity: number) => Promise<void>;
  removeItem: (variantId: string) => Promise<void>;
  clearCart: () => void;
  syncCart: () => Promise<void>;
  getCheckoutUrl: () => string | null;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,
      isSyncing: false,

      addItem: async (item) => {
        const { items, cartId, clearCart } = get();
        const existing = items.find((i) => i.variantId === item.variantId);

        set({ isLoading: true });
        try {
          if (!cartId) {
            // No cart yet — create one
            const result = await createCart({ ...item, lineId: null });
            if (result) {
              set({
                cartId: result.cartId,
                checkoutUrl: result.checkoutUrl,
                items: [{ ...item, lineId: result.lineId }],
              });
            }
          } else if (existing) {
            // Item already in cart — bump quantity
            if (!existing.lineId) return;
            const newQty = existing.quantity + item.quantity;
            const result = await updateCartLine(cartId, existing.lineId, newQty);
            if (result.success) {
              set({
                items: get().items.map((i) =>
                  i.variantId === item.variantId ? { ...i, quantity: newQty } : i
                ),
              });
            } else if (result.cartGone) {
              clearCart();
            }
          } else {
            // Add new line to existing cart
            const result = await addCartLine(cartId, { ...item, lineId: null });
            if (result.success) {
              set({ items: [...get().items, { ...item, lineId: result.lineId ?? null }] });
            } else if (result.cartGone) {
              clearCart();
            }
          }
        } catch (err) {
          console.error("addItem failed:", err);
        } finally {
          set({ isLoading: false });
        }
      },

      updateQuantity: async (variantId, quantity) => {
        if (quantity <= 0) {
          await get().removeItem(variantId);
          return;
        }
        const { items, cartId, clearCart } = get();
        const item = items.find((i) => i.variantId === variantId);
        if (!item?.lineId || !cartId) return;

        set({ isLoading: true });
        try {
          const result = await updateCartLine(cartId, item.lineId, quantity);
          if (result.success) {
            set({
              items: get().items.map((i) =>
                i.variantId === variantId ? { ...i, quantity } : i
              ),
            });
          } else if (result.cartGone) {
            clearCart();
          }
        } catch (err) {
          console.error("updateQuantity failed:", err);
        } finally {
          set({ isLoading: false });
        }
      },

      removeItem: async (variantId) => {
        const { items, cartId, clearCart } = get();
        const item = items.find((i) => i.variantId === variantId);
        if (!item?.lineId || !cartId) return;

        set({ isLoading: true });
        try {
          const result = await removeCartLine(cartId, item.lineId);
          if (result.success) {
            const remaining = get().items.filter((i) => i.variantId !== variantId);
            remaining.length === 0 ? clearCart() : set({ items: remaining });
          } else if (result.cartGone) {
            clearCart();
          }
        } catch (err) {
          console.error("removeItem failed:", err);
        } finally {
          set({ isLoading: false });
        }
      },

      clearCart: () => set({ items: [], cartId: null, checkoutUrl: null }),

      getCheckoutUrl: () => {
        const { items } = get();
        if (items.length === 0) return null;

        // Build standard Shopify cart permalink from items
        // GraphQL IDs are like "gid://shopify/ProductVariant/12345" — extract the numeric part
        const lineItems = items
          .map((item) => {
            const numericId = item.variantId.split("/").pop();
            return `${numericId}:${item.quantity}`;
          })
          .join(",");

        return `https://kgb1q6-ky.myshopify.com/cart/${lineItems}?checkout_url=1&channel=online_store`;
      },

      syncCart: async () => {
        const { cartId, isSyncing, clearCart } = get();
        if (!cartId || isSyncing) return;

        set({ isSyncing: true });
        try {
          const data = await fetchCart(cartId);
          // If API fails entirely, preserve local cart — don't clear
          if (!data) return;
          const cart = data?.data?.cart;
          // Only clear if Shopify says the cart truly doesn't exist
          if (cart === null) clearCart();
        } catch (err) {
          // Preserve cart on network/auth errors
          console.error("syncCart failed:", err);
        } finally {
          set({ isSyncing: false });
        }
      },
    }),
    {
      name: "shopify-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        cartId: state.cartId,
        checkoutUrl: state.checkoutUrl,
      }),
    }
  )
);
