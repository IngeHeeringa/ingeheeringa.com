---
name: vanilla-css
description: Use when writing or reviewing CSS in this project (scoped <style> blocks, global tokens, or animation/transitions). This project intentionally has no CSS framework, preprocessor, or animation library — trigger on adding/editing styles, adding a transition or animation, or introducing design tokens.
---

# Vanilla CSS Conventions

This project is styled with plain CSS on purpose, as a showcase of CSS skill — no Sass, no CSS-in-JS, no utility framework, no animation library.

## Structure

- Style with scoped `<style>` blocks in the same `.astro` file by default — Astro scopes automatically, so no global naming scheme is needed for most components.
- Reserve global styles (`src/styles/global.css`, imported once in `Layout.astro`'s frontmatter) strictly for page-wide resets and tokens: CSS custom properties, `<html>`/`<body>` baseline, typographic defaults. Never put component-specific rules there.
- Define design tokens as CSS custom properties on `:root` (matches the existing pattern) instead of repeating literal values across components.
- For any class that must escape scoping (targeted via JS, or an intentional global override), use BEM-style naming (`block__element--modifier`).
- Prefer modern native CSS over reaching for JS: nesting, `:has()`, container queries, `clamp()` for fluid sizing, logical properties.

## Animation & transitions

- Default to CSS for all animation: `transition`, `@keyframes`, and scroll-driven animation via `animation-timeline: view()`.
- For page-to-page transitions, use Astro's built-in View Transitions (`<ClientRouter />` in the layout, `transition:name` / `transition:animate` on elements) rather than a client-side router or framework.
- Keep transitions subtle and cheap: animate `opacity`/`transform` (compositor-only), avoid animating layout properties (`width`, `height`, `top`, `left`).
- Guard non-essential animation behind `prefers-reduced-motion`.
- Do not introduce Framer Motion, GSAP, or any animation library. If a case genuinely needs orchestration CSS can't do, flag it as a decision rather than defaulting to one.
