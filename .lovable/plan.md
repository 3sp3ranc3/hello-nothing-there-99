

## Update Checkout URL to `checkout.tempopickleball.store`

Since Shopify has confirmed the subdomain is active, we can now update the checkout redirect.

**What changes:**
- The checkout link will use your branded `checkout.tempopickleball.store` domain instead of the technical `kgb1q6-ky.myshopify.com` domain
- The `checkout_url=1` workaround parameter is no longer needed since this subdomain points directly to Shopify (not Lovable)

**Technical detail:**

File: `src/stores/cartStore.ts`, line 146

```
// Before
return `https://kgb1q6-ky.myshopify.com/cart/${lineItems}?checkout_url=1&channel=online_store`;

// After
return `https://checkout.tempopickleball.store/cart/${lineItems}?channel=online_store`;
```

One-line change. No other files affected.

