

# Topographic Wave Divider into Dark Navy Specs Section

## What We're Building
A CRBN-inspired animated topographic contour line pattern that serves as a visual transition from the light Tempo Bone background into a dark navy (`#0f1b2d`) lower half of the page. The specs section, testimonials, FAQ, and bottom CTA will all sit on this dark navy background.

## No Files Needed
Everything will be built with **inline SVG paths** and CSS. The topographic lines will be multiple wavy `path` elements at varying opacities, creating a layered contour-map effect. A subtle CSS animation will give them a slow horizontal drift.

## Implementation

### 1. Create `TopoWaveDivider` Component
**New file:** `src/components/ui/TopoWaveDivider.tsx`

- Contains 5-7 wavy SVG path lines with decreasing opacity (from bone color to navy)
- Each line has a slightly different wave shape to simulate topographic contours
- A subtle CSS `@keyframes` animation shifts the paths slowly left-to-right for a living, breathing feel
- The SVG is full-width, roughly 150-200px tall, with `preserveAspectRatio="none"` so it stretches across all screen sizes
- Bottom of the SVG fills with the navy color to seamlessly blend into the section below

### 2. Update `TheArchitect.tsx` Page Layout
- Wrap the specs section, testimonials, FAQ, and bottom CTA in a dark navy container (`bg-tempo-navy`)
- Place the `TopoWaveDivider` component between the product split section and the dark navy container
- Update text colors within the dark sections to use `text-tempo-bone` and `text-tempo-bone/60` for contrast
- Remove the existing `border-t` divider on the specs section since the wave replaces it

### 3. Update `TechSpecs.tsx` for Dark Mode
- Add an optional `theme` prop (`"light" | "dark"`) to control text/box colors
- When `dark`, spec boxes use `bg-white/5` instead of `bg-tempo-mist`, with light text colors
- Hover state becomes `bg-white/10` with `text-tempo-bone`

### 4. Update `ProductFAQ.tsx` for Dark Mode
- Add optional `theme` prop for dark background compatibility
- Adjust text, border, and accordion trigger colors for contrast on navy

### 5. Update `TestimonialsSection.tsx` for Dark Mode
- Add optional `theme` prop
- Adjust card backgrounds and text colors

### 6. Add Wave Animation Keyframes
**Edit:** `src/index.css`
- Add a `@keyframes topoShift` animation for the slow horizontal drift of the SVG paths

---

## Technical Details

**SVG Structure (simplified):**
```text
+--------------------------------------------------+
|  Tempo Bone background                            |
|                                                   |
|  ~~~~~~~~~~~~ line 1 (opacity 0.08) ~~~~~~~~~~~~  |
|   ~~~~~~~~~~~ line 2 (opacity 0.12) ~~~~~~~~~~~   |
|    ~~~~~~~~~~ line 3 (opacity 0.18) ~~~~~~~~~~    |
|     ~~~~~~~~~ line 4 (opacity 0.25) ~~~~~~~~~     |
|      ~~~~~~~~ line 5 (opacity 0.35) ~~~~~~~~      |
|       ~~~~~~~ line 6 (opacity 0.50) ~~~~~~~       |
+==================================================+
|                                                   |
|           DARK NAVY (#0f1b2d) SECTION             |
|         Specs / Testimonials / FAQ / CTA          |
|                                                   |
+--------------------------------------------------+
```

**Animation:** Each path has a slightly offset animation delay so the lines ripple independently, creating an organic topographic feel. The animation is slow (8-12s cycle) and subtle.

**Files to create:**
- `src/components/ui/TopoWaveDivider.tsx`

**Files to edit:**
- `src/pages/products/TheArchitect.tsx`
- `src/components/products/TechSpecs.tsx`
- `src/components/products/ProductFAQ.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/index.css`
