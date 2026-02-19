
## Performance Analysis: Slow Load on The Architect Page

There are three distinct causes of the slow page transition, ranked by impact.

---

### Root Cause 1 — Heavy images loaded all at once (biggest impact)

The page imports 4 large product images plus the topo background PNG directly at the top of the file as static imports. This means the browser must download all of them before the page can render, even though only the first image is visible above the fold.

- `architect-45deg.webp` — hero image (needs to load instantly)
- `architect-detail.webp`, `architect-specs.webp`, `architect-pair.webp` — gallery images below the fold
- `topo-background.png` — only used at the very bottom of the page (dark navy section)

**Fix:** Keep `img1` (the hero) as an eager static import. Convert the remaining 3 gallery images and the `topoBackground` to use the HTML `loading="lazy"` attribute and/or only pass their paths as strings so the browser defers them. The main image in `ProductGallery` should get `loading="eager"` while thumbnails already have `loading="lazy"` — this is correct.

---

### Root Cause 2 — No preloading hint for the critical hero image

The browser has no early signal to start downloading `architect-45deg.webp` — it only discovers it once React renders. This delays the Largest Contentful Paint (LCP).

**Fix:** Add a `<link rel="preload">` tag in `index.html` for the hero image so the browser starts fetching it in parallel with the JS bundle.

---

### Root Cause 3 — `MegaFooter` and `StickyReserveButton` ref warnings (minor, but causes extra render work)

The console warnings confirm both components receive refs but are not wrapped in `React.forwardRef`. While this is a React warning and not a crash, it causes additional reconciliation work on first render.

**Fix:** Wrap both components in `React.forwardRef`.

---

### Implementation Plan

**File 1: `index.html`**
- Add `<link rel="preload" as="image" href="/src/assets/architect-45deg.webp">` in `<head>` so the browser begins fetching the hero immediately.

**File 2: `src/pages/products/TheArchitect.tsx`**
- Change the 3 non-hero gallery images (`img2`, `img3`, `img4`) and `topoBackground` from static imports to string paths using `new URL(..., import.meta.url).href` — this is Vite's recommended pattern for deferred asset loading.
- Pass the hero image `img1` as `loading="eager"` and the rest as `loading="lazy"` via a prop to `ProductGallery`.

**File 3: `src/components/products/ProductGallery.tsx`**
- Accept a `priority?: boolean` field per image object.
- Apply `loading="eager"` to the active/priority image and `loading="lazy"` to thumbnails (already done for thumbnails, needs to apply to the main image slot conditionally).

**File 4: `src/components/layout/MegaFooter.tsx`**
- Wrap in `React.forwardRef` to fix the console warning and eliminate the extra render reconciliation.

**File 5: `src/components/ui/StickyReserveButton.tsx`**
- Wrap in `React.forwardRef` to fix the console warning.

---

### Technical Notes

- The Shopify API call (network request visible in logs) resolves in ~200ms and is non-blocking — it does not cause the visual slowness, just the "Add to Cart" button being initially disabled.
- The `topo-background.png` is a PNG (not WebP) applied as a CSS `background-image` at the bottom of the page. Deferring it is safe since the user has to scroll past the entire hero + description + specs before reaching it.
- The framer-motion animations are scroll-triggered (`whileInView`) so they do not block the initial paint.
