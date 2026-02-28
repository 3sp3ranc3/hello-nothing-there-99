import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ExternalLink, Loader2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import cartBagIcon from "@/assets/icon-cart-bag.webp";

// Simple event bus to open the cart drawer from anywhere
const CART_OPEN_EVENT = "tempo:open-cart";
export const openCartDrawer = () => window.dispatchEvent(new Event(CART_OPEN_EVENT));

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + parseFloat(item.price.amount) * item.quantity, 0);

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  // Listen for programmatic open events (e.g. from preorder button)
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener(CART_OPEN_EVENT, handler);
    return () => window.removeEventListener(CART_OPEN_EVENT, handler);
  }, []);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 text-sm lg:text-base uppercase tracking-[0.12em] font-medium text-current transition-colors relative">
          <img src={cartBagIcon} alt="Cart" className="w-5 h-5" />
          Cart ({totalItems})
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-tempo-bone border-l border-tempo-vapor">
        <SheetHeader className="flex-shrink-0 border-b border-tempo-vapor pb-4">
          <SheetTitle className="text-xs uppercase tracking-[0.15em] font-semibold text-tempo-carbon">
            Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-10 w-10 text-tempo-carbon/20 mx-auto mb-4" />
                <p className="text-sm text-tempo-carbon/50 uppercase tracking-widest">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-6">
                {items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 pb-6 border-b border-tempo-vapor">
                    <div className="w-20 h-20 bg-tempo-carbon/5 rounded flex-shrink-0 overflow-hidden">
                      {item.product.node.images?.edges?.[0]?.node && (
                        <img
                          src={item.product.node.images.edges[0].node.url}
                          alt={item.product.node.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-tempo-carbon truncate">{item.product.node.title}</h4>
                      {item.selectedOptions.filter((o) => o.value !== "Default Title").length > 0 && (
                        <p className="text-xs text-tempo-carbon/50 mt-1">
                          {item.selectedOptions.filter((o) => o.value !== "Default Title").map((o) => o.value).join(" · ")}
                        </p>
                      )}
                      <p className="text-sm font-bold text-tempo-navy mt-2">
                        ${parseFloat(item.price.amount).toFixed(2)}
                      </p>

                      {/* Quantity controls — inviting, prominent */}
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-tempo-carbon/20 flex items-center justify-center hover:border-tempo-carbon hover:bg-tempo-carbon hover:text-tempo-bone transition-all duration-200"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-base font-black text-tempo-carbon w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-tempo-carbon/20 flex items-center justify-center hover:border-tempo-carbon hover:bg-tempo-carbon hover:text-tempo-bone transition-all duration-200"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="ml-auto text-tempo-carbon/30 hover:text-tempo-crimson transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Subtle upsell nudge */}
                      {item.quantity === 1 && (
                        <button
                          onClick={() => updateQuantity(item.variantId, 2)}
                          className="mt-2 text-[11px] text-tempo-navy/70 hover:text-tempo-navy underline underline-offset-2 transition-colors"
                        >
                          + Add a second paddle
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 space-y-4 pt-6 border-t border-tempo-vapor">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-tempo-carbon/60">Total</span>
                  <span className="text-lg font-black text-tempo-carbon">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isLoading || isSyncing}
                  className="w-full py-4 px-8 bg-tempo-carbon text-tempo-bone rounded-full text-xs uppercase tracking-widest font-medium hover:bg-tempo-navy transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      Checkout
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
