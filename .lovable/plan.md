
## Fix: Prevent Shopify Checkout Redirect to Custom Domain

**Problem:** When clicking checkout, Shopify receives the cart URL on `kgb1q6-ky.myshopify.com` and automatically redirects to the custom domain `tempopickleball.store`, which serves a Lovable preview page — causing a 404.

**Root Cause:** Shopify's storefront automatically redirects cart URLs to the primary custom domain associated with the store. The `checkout_url=1` parameter tells Shopify to skip this redirect and process checkout directly on the `.myshopify.com` domain.

**Fix:** One-line change in `src/stores/cartStore.ts`.

**Technical Change:**

File: `src/stores/cartStore.ts`, line 146

```
// Before
return `https://kgb1q6-ky.myshopify.com/cart/${lineItems}?channel=online_store`;

// After
return `https://kgb1q6-ky.myshopify.com/cart/${lineItems}?checkout_url=1&channel=online_store`;
```

Adding `checkout_url=1` as the first query parameter instructs Shopify to keep the session on the `.myshopify.com` domain instead of redirecting to `tempopickleball.store`.
