---
name: web-performance
description: Use when adding images, fonts, or any new page/route — image optimization, font loading, and Core Web Vitals (LCP/CLS/INP). Applies to the current pages and to future content (e.g. a blog section) alike.
---

# Web Performance

Performance is a design constraint from the start, not a later pass — every image or font added should already follow these defaults.

## Image optimization

- Always use Astro's built-in `<Image />` (or `<Picture />` for art direction/multiple formats) from `astro:assets` instead of a plain `<img>` for local images — it handles format conversion, resizing, and lazy loading at build time.
- Let Astro convert to modern formats (WebP/AVIF) rather than shipping source PNG/JPG directly.
- Always set explicit `width`/`height` (or `aspect-ratio` in CSS) on every image to reserve layout space and prevent CLS.
- Mark below-the-fold images `loading="lazy"`; the hero/first-viewport image should NOT be lazy-loaded (it's likely the LCP element and needs to load eagerly, ideally with `fetchpriority="high"`).
- Serve appropriately sized images per viewport via `srcset`/`sizes` (Astro's `<Image />` widths option) rather than one large image scaled down by CSS.

## Font loading

- Self-host fonts (as this project already does via `@fontsource`) rather than loading from a third-party CDN — avoids an extra DNS/connection round trip and a render-blocking external request.
- Set `font-display: swap` (or `optional` if layout stability matters more than webfont branding) so text renders immediately in a fallback font instead of blocking on the webfont.
- Only load the font weights/styles actually used — importing every `@fontsource` weight when the design uses one or two wastes bytes.
- Preload the single font file used above the fold if it's render-critical; don't preload fonts used further down the page.

## Core Web Vitals

- **LCP** (Largest Contentful Paint): usually the hero image or heading on a page like this — make sure it isn't lazy-loaded, blocked behind JS, or behind a slow font load.
- **CLS** (Cumulative Layout Shift): reserve space for images (see above), avoid injecting content above existing content after load, avoid FOUT/FOIT-induced reflow (see font-display above).
- **INP** (Interaction to Next Paint): keep JS minimal — this project ships none by default (see `astro-conventions`); if a future interactive piece needs client JS, keep the hydrated bundle small and hydrate lazily (`client:visible`/`client:idle`) rather than eagerly.
- Prefer static generation (already the default here — `output: "static"`) over client-side data fetching for anything that doesn't need it, including future blog content — pre-render posts at build time rather than fetching them client-side.
