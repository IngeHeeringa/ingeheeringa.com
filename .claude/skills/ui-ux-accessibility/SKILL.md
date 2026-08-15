---
name: ui-ux-accessibility
description: Use when designing or reviewing UI — layout, typography, color, and accessibility decisions. Covers mobile-first responsive design, font legibility, color contrast, and WCAG-aligned accessibility. For CSS syntax/scoping, see vanilla-css; for component structure, see astro-conventions.
---

# UI/UX & Accessibility

Design and implementation decisions for this project default to mobile-first, legible, sufficiently contrasted, and accessible — not as an afterthought pass, but as the baseline for any new UI.

## Mobile-first responsive design

- Write base styles for the smallest viewport first; add complexity with `min-width` media queries (or container queries for component-level responsiveness), never `max-width` overrides that undo a desktop-first default.
- Prefer fluid sizing (`clamp()`, `%`, `fr`, intrinsic grid/flex sizing) over fixed breakpoint-by-breakpoint pixel values where it holds up.
- Design touch targets at minimum 44×44px (iOS HIG) / 24×24px with adequate spacing (WCAG 2.5.8) — don't rely on hover-only affordances, since touch has no hover state.
- Test layouts at narrow widths (320–375px) before wide ones; the small viewport is the constraint that should shape the design, not a squeeze-down of the desktop layout.

## Typography & legibility

- Body text: 16px minimum (never smaller — prevents mobile browsers auto-zooming on input focus, and is the practical legibility floor).
- Line length: keep body copy around 45–75 characters per line (`max-width` in `ch` units is a convenient way to enforce this).
- Line height: ~1.5 for body text, tighter (1.1–1.3) is acceptable for large headings only.
- Use a type scale (e.g. a modular scale via `clamp()` for fluid heading sizes) rather than ad hoc font sizes per component.
- Left-align body text (avoid justified text, which creates uneven word spacing and hurts readability).

## Color & contrast

- Meet WCAG AA at minimum: 4.5:1 contrast for normal text, 3:1 for large text (≥24px, or ≥18.66px bold) and for UI component boundaries/icons.
- Never convey information (errors, required fields, status) through color alone — pair with an icon, label, or text.
- Verify contrast for every text/background token pair defined in `:root`, not just the obvious ones — check link colors against both default and hover/visited states.
- Respect `prefers-color-scheme` if/when a dark mode is introduced; don't hardcode assumptions about a light background into component logic.

## Accessibility baseline

- Use semantic HTML elements (`<nav>`, `<button>`, `<header>`, `<main>`, heading levels in order) before reaching for ARIA — ARIA supplements semantics, it doesn't replace them.
- Every interactive element must be reachable and operable via keyboard alone (`Tab`/`Enter`/`Space`); never remove `:focus` outlines without providing an equally visible custom focus style.
- All images need meaningful `alt` text (or `alt=""` for purely decorative images) — never omit the attribute.
- Form inputs need an associated `<label>` (not just a placeholder, which disappears on input and fails contrast/legibility requirements).
- Animation follows the reduced-motion rules in `vanilla-css` — this is part of the same accessibility baseline, not a separate concern.
