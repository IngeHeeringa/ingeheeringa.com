---
name: astro-conventions
description: Use when creating or editing .astro files in this project — component/file organization, TypeScript frontmatter conventions, and per-page SEO/meta tags. For CSS/animation conventions, see vanilla-css; for images/fonts/Core Web Vitals, see web-performance. Trigger on adding a new page/component/layout, typing component props, or adding a route (including future blog posts).
---

# Astro Conventions

This project is an Astro static site — no React, no Sass. These conventions keep component structure consistent. For styling, see the `vanilla-css` skill.

## Component & file organization

- `src/pages/` — routes only. One `.astro` file per route, no reusable logic here.
- `src/layouts/` — shared page shells (`<head>`, meta, wrapper). Layout-only concerns, no page-specific content.
- `src/components/` — reusable/composable pieces. PascalCase filename matching the exported component (e.g. `ProjectCard.astro`).
- Group a component with its tightly-coupled files in a folder named after it (e.g. `components/Header/Header.astro`) — only do this once there's more than one file to group; a single-file component stays flat.
- Prefer composition (small components via props/slots) over large monolithic page files.
- Stay framework-free. Don't reach for a UI framework island unless something needs client-side interactivity that CSS genuinely can't provide.

## TypeScript frontmatter conventions

- Type all props via an exported `interface Props` in the frontmatter (matches the existing `Layout.astro` pattern) — no untyped `Astro.props` destructuring.
- Avoid `any`; use precise unions/literal types for variant-style props (e.g. `variant: "primary" | "secondary"`).
- Keep frontmatter logic minimal. Data fetching/formatting beyond a few lines belongs in a helper (e.g. under `src/data/`), imported into the component.
- Give optional props a default via destructuring (`const { title, subtitle = "" } = Astro.props`), not `??`/`||` in the template.

## SEO & meta tags

- Every route needs a unique, descriptive `<title>` and `<meta name="description">` — pass them as `Layout` props per-page rather than hardcoding one title for the whole site (this matters once a blog exists: each post needs its own title/description).
- Include Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`) so links render properly when shared; `og:image` should point at a real image per page (falls back to a default site image when a page has none, e.g. a blog post without a hero image).
- Set a canonical URL (`<link rel="canonical">`) per page, built from `Astro.site` + the current path, to avoid duplicate-content issues once posts can be reached via more than one path (tags, pagination, etc.).
- Generate `sitemap.xml` via `@astrojs/sitemap` once there's more than a couple of routes — required for a blog to be crawled reliably.
- Use one `<h1>` per page and a logical heading order (`h1` → `h2` → `h3`, no skipped levels) — this is also an accessibility requirement, see `ui-ux-accessibility`.
