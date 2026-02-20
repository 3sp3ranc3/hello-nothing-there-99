
## Fix: Force Checkout URL to Use .myshopify.com Domain

### Problem

The Shopify `cartCreate` mutation returns a `checkoutUrl` using the store's custom domain (`tempopickleball.store`). This causes a 404 because the custom domain may not have checkout properly configured or may have a password/redirect in place.

The permanent `.myshopify.com` domain (`tempo-pickleball.myshopify.com`) always works for checkout regardless of custom domain setup.

### Solution

Update the `formatCheckoutUrl` function in `src/lib/shopify.ts` to replace the hostname of whatever URL Shopify returns with `tempo-pickleball.myshopify.com`, while preserving the path, query parameters (including `channel=online_store`), and everything else.

### Change (Single File)

**`src/lib/shopify.ts`** — update `formatCheckoutUrl`:

```ts
// Before
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

// After
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.hostname = "tempo-pickleball.myshopify.com";
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}
```

This adds a single line (`url.hostname = "tempo-pickleball.myshopify.com"`) that rewrites the domain before appending the `channel` parameter — so the final URL will always look like:

```
https://tempo-pickleball.myshopify.com/cart/c/[cart-id]?key=[key]&channel=online_store
```

### Technical Notes

- No other files need to change — `formatCheckoutUrl` is the single point where the checkout URL is finalized before being stored in Zustand state.
- The path (`/cart/c/[id]`), key parameter, and all other query strings are preserved — only the hostname is replaced.
- This change takes effect for all new cart sessions. Any existing cart URLs already stored in `localStorage` will still use the old domain until the user's cart is cleared (e.g., after checkout or clearing browser data).
