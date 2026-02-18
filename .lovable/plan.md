
# Shopify Integration for Tempo

## Overview
Wire up the existing Tempo site with real Shopify cart and checkout functionality. The "Add to Cart" and "Reserve Now" buttons on The Architect product page will create real Shopify carts via the Storefront API, with a cart drawer accessible from the navbar.

---

## What Gets Built

1. **Storefront API client** - A shared utility to talk to Shopify's GraphQL API
2. **Zustand cart store** - Persistent cart state synced with Shopify in real-time
3. **Cart sync hook** - Automatically clears the cart after checkout completes
4. **Cart drawer** - Slide-out panel styled to match the Tempo design system, triggered from the navbar
5. **Button wiring** - All "Add to Cart", "Reserve Now", and sticky CTA buttons on The Architect page will add the real Shopify product to the cart

---

## New Files

| File | Purpose |
|------|---------|
| `src/lib/shopify.ts` | Storefront API constants, `storefrontApiRequest` helper, cart mutations (create, add, update, remove), and `ShopifyProduct` types |
| `src/stores/cartStore.ts` | Zustand store with `persist` middleware for cart items, cartId, checkoutUrl, and all cart operations |
| `src/hooks/useCartSync.ts` | Hook that syncs cart on page load and when user returns from checkout tab |
| `src/components/ui/CartDrawer.tsx` | Sheet-based cart drawer styled with Tempo colors (bone/carbon/navy), pill buttons, uppercase tracking |

---

## Modified Files

| File | Change |
|------|--------|
| `src/App.tsx` | Add `useCartSync` hook call inside a wrapper component |
| `src/components/layout/BatchNavbar.tsx` | Add cart icon + item count badge to the right side (replacing the empty spacer div), open CartDrawer on click |
| `src/pages/products/TheArchitect.tsx` | Wire "Add to Cart" button, "Reserve Now" bottom CTA, and StickyReserveButton to call `addItem` from the cart store with the real Shopify variant |
| `src/components/ui/StickyReserveButton.tsx` | Wire the mobile sticky button to add the product to cart |

---

## Technical Details

### Shopify API Config
- Store domain: `tempopickleball-97521.myshopify.com`
- Storefront token: `57b7175e5cc2d576df3f1a0f7f01047d`
- API version: `2025-07`
- Product: "The Architect - Batch 002" (ID: `10118554779924`, Variant ID: `gid://shopify/ProductVariant/51966639833364`)

### Dependencies
- Install `zustand` for cart state management

### Cart Drawer Design (Tempo-styled)
- Background: `bg-tempo-bone`
- Text: `text-tempo-carbon`
- Checkout button: `bg-tempo-carbon text-tempo-bone rounded-full uppercase tracking-widest`
- Quantity controls: pill-shaped, matching existing button styles
- Checkout opens in a new tab via `window.open(checkoutUrl, '_blank')`
- Checkout URL always includes `channel=online_store` parameter

### Navbar Cart Icon
- Replaces the empty spacer `<div>` on the right side of BatchNavbar
- Shows item count badge when cart has items
- Styled minimally: just the cart icon text "CART (0)" or similar, matching Tempo's uppercase tracking style

### Product Page Wiring
- The product page will fetch "The Architect" from the Storefront API on mount to get the real GraphQL variant ID
- All CTA buttons call `cartStore.addItem()` with the fetched product data
- Loading state shown on buttons during cart operations
- Toast notification (top-center, not bottom-right) confirms item added

### Purchase Flow
```text
User clicks "Add to Cart" or "Reserve Now"
  --> Storefront API: cartCreate (first item) or cartLinesAdd (subsequent)
  --> Cart state updates with lineId from Shopify
  --> Toast confirms addition
  --> User opens cart drawer from navbar
  --> Clicks "Checkout"
  --> window.open(checkoutUrl, '_blank') to Shopify checkout
  --> On return, useCartSync clears completed cart
```

---

## Implementation Order

1. Install `zustand`
2. Create `src/lib/shopify.ts` (API client + types + cart mutations)
3. Create `src/stores/cartStore.ts` (Zustand persistent store)
4. Create `src/hooks/useCartSync.ts`
5. Create `src/components/ui/CartDrawer.tsx` (Tempo-styled)
6. Update `src/components/layout/BatchNavbar.tsx` (add cart trigger)
7. Update `src/pages/products/TheArchitect.tsx` (wire all buttons)
8. Update `src/components/ui/StickyReserveButton.tsx` (wire mobile CTA)
9. Update `src/App.tsx` (add useCartSync)
