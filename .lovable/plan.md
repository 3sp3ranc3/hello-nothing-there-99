

# Update Testimonials - Simplified Design

## Overview
Replace testimonials on both Batch 001 and Batch 002 pages with the new content, using a minimal card design with only the tag, quote, and reviewer's first name.

---

## New Testimonials Content (Both Pages)

| Tag | Quote | Name |
|-----|-------|------|
| Mis-hits / Sweet Spot | "The sweet spot is honestly massive. I've hit many off-centre shots that should've been dead but popped nicely over the net. Super forgiving if your aim isn't perfect like mine - it almost feels like cheating. So glad I gave that paddle a shot." | Oliver |
| Spin | "I bought this as a backup for my $300 tournament paddle but ended up making it the only one I reach for. The amount of spin you can get with this is crazy, the face bites so hard it feels like you have a whole extra second to place the ball. It just gives you that locked-in confidence that usually takes weeks to build with a new paddle." | Lachlan |
| Dinks | "I'm so glad my partner put me onto Tempo. Honestly feels like a hidden gem that hasn't blown up yet. I used to tense up every time I had to dink because I'd always pop it up and eat a smash, but the touch on this feels surgical. It really lets me neutralise the pace and keep my dinks unattackable." | Rachel |
| Manoeuvrability | "The swing weight on this is dialled in perfectly. It cuts through the air fast enough to keep up in rapid-fire kitchen rallies, but it still feels very substantial on contact. Plus, the vibration dampening is top tier - I can play 5 sets straight and have zero arm fatigue." | Eric |

---

## Card Design - Minimal Structure

Each testimonial card will contain only:
1. **Tag pill** - Topic badge (e.g., "Spin")
2. **Quote** - The testimonial text
3. **Name** - First name only, simple text

**Removed elements:**
- Avatar circle with initials
- Rating/location line
- Verified badge with checkmark
- Bottom border separator

---

## File Changes

### 1. `src/components/sections/TestimonialsSection.tsx` (Batch 002)

**Headers:**
- Subheading: "From Our First Batch Players"
- Headline: "Why Players Are Switching"

**Interface simplified to:**
```text
interface Testimonial {
  tag: string;
  quote: string;
  name: string;
}
```

**Card structure:**
```text
+----------------------------------+
|  [Tag Pill]                      |
|                                  |
|  "Quote text here..."            |
|                                  |
|  - Name                          |
+----------------------------------+
```

**Grid:** 2x2 layout (`lg:grid-cols-2`)

---

### 2. `src/pages/Batch001Page.tsx`

**Headers (keep existing):**
- Subheading: "What Batch 001 Players Said"
- Headline: "Real Feedback"

**Same testimonials content and minimal card design as Batch 002**

**Grid:** 2x2 layout (`lg:grid-cols-2`)

---

## Technical Implementation

### TestimonialsSection.tsx
1. Simplify interface to `tag`, `quote`, `name` only
2. Replace testimonials array with 4 new items
3. Update headers to new copy
4. Simplify TestimonialCard - remove avatar, rating/location, verified badge
5. Just show: tag pill, quote, and "- Name" at the bottom
6. Change grid to `lg:grid-cols-2`

### Batch001Page.tsx
1. Replace testimonials array with same 4 new items
2. Simplify card rendering - remove avatar, rating/location, verified badge
3. Keep existing headers unchanged
4. Change grid to `lg:grid-cols-2`

