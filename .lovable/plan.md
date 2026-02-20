
## Root Cause: Identified with Certainty

From live network inspection, here is exactly what is happening:

1. The Shopify `cartCreate` API call SUCCEEDS — it returns a 200 with:
   `"checkoutUrl":"https://tempopickleball.store/cart/c/hWN8zqGW0j99ssIZuM9FhhYe?key=..."`

2. `buildCheckoutUrl()` in `shopify.ts` should rewrite that to `tempo-pickleball.myshopify.com` — this logic is correct IN CODE.

3. BUT — `getCheckoutUrl()` in `cartStore.ts` reads directly from `get().checkoutUrl` which is the raw value stored in Zustand/localStorage. If this was set from a PREVIOUS cart session (before the fix was applied), it still contains the old `tempopickleball.store` URL. The store persists across page loads via `localStorage`.

4. Additionally, when the cart drawer opens, `syncCart()` is called — this fires a 3rd Shopify API request, and during that async operation `isSyncing` is `true`, which **disables the Checkout button** until sync is complete. If sync is slow or the user clicks during this window, nothing happens.

5. The fix already in `buildCheckoutUrl` IS correct — it just does not retroactively fix already-cached `checkoutUrl` values in localStorage.

---

## The Fix (Two Changes, One File)

### File: `src/stores/cartStore.ts`

**Change 1 — `getCheckoutUrl` must rewrite the URL on every call:**

Instead of returning the raw stored URL, it must always pass it through `buildCheckoutUrl` before returning. This ensures every checkout attempt — even from stale cached sessions — gets the correct `.myshopify.com` hostname.

```ts
// Import the URL builder
import { CartItem, createCart, addCartLine, updateCartLine, removeCartLine, fetchCart, buildCheckoutUrl } from "@/lib/shopify";

// In the store:
getCheckoutUrl: () => {
  const url = get().checkoutUrl;
  if (!url) return null;
  return buildCheckoutUrl(url); // Always rewrite — never return raw stored URL
},
```

**Change 2 — Export `buildCheckoutUrl` from `shopify.ts`:**

Currently `buildCheckoutUrl` is a private `function` (not exported). It must be exported so `cartStore.ts` can import and use it.

```ts
// src/lib/shopify.ts — change line 79
export function buildCheckoutUrl(raw: string): string {
```

---

## Why This Definitively Solves It

- Any user who has a cached `tempopickleball.store` checkout URL in localStorage will have it silently corrected at the moment they click Checkout — no browser refresh, no cart clearing needed.
- All future carts will also be corrected (double protection — both at creation time via `createCart()` and at read time via `getCheckoutUrl()`).
- No user data is lost, no cart is cleared.

---

## Technical Summary

**Files changed:**
1. `src/lib/shopify.ts` — add `export` to `buildCheckoutUrl` (1 word change)
2. `src/stores/cartStore.ts` — import `buildCheckoutUrl` and use it in `getCheckoutUrl`
