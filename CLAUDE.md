# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` / `npm start` — start the Astro dev server
- `npm run build` — type-check and build the static site to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — lint with ESLint (`.astro` + JS/TS)
- `npm run lint:fix` — lint and auto-fix
- `npm run format` — format the whole project with Prettier

Node version is pinned via `.nvmrc` (Node 24). Astro 7 requires Node >=22.12; run `nvm use` before installing/building if your shell defaults to an older version.

## Architecture

This is an [Astro](https://astro.build) static site (`output: "static"`), styled with plain CSS — no CSS-in-JS, Sass, or utility framework. Astro components (`.astro`) use scoped `<style>` blocks; there is no global stylesheet or design-token file yet.

- `src/pages/` — file-based routing; each `.astro` file here is a route.
- `src/layouts/Layout.astro` — shared HTML shell (`<head>`, meta tags, favicon) wrapping page content via `<slot />`.
- `public/` — static assets served as-is (favicon, etc.).
- `astro.config.mjs` — sets `site: "https://ingeheeringa.com"` for canonical URL / sitemap generation; no integrations are configured.

### Linting & formatting

- ESLint uses flat config (`eslint.config.js`): `eslint-plugin-astro` recommended rules, with `eslint-config-prettier` last to disable stylistic rules that Prettier owns. `@typescript-eslint/parser` is installed so ESLint can parse the TypeScript frontmatter inside `.astro` files.
- Prettier (`.prettierrc.json`) uses `prettier-plugin-astro` for `.astro` files.
- `.vscode/settings.json` enables format-on-save (Prettier as default formatter) and ESLint auto-fix on save (`source.fixAll.eslint`). The recommended extensions (`.vscode/extensions.json`) — Astro, Prettier, ESLint — must be installed for this to work in-editor.

## Skills

- `astro-conventions` — component/file organization, TypeScript frontmatter conventions, and per-page SEO/meta tags. Use when creating or editing `.astro` files or adding a route.
- `vanilla-css` — CSS conventions (scoping, tokens, naming) and animation/transition patterns. Use when writing or reviewing styles or adding a transition.
- `ui-ux-accessibility` — mobile-first responsive design, typography/legibility, color contrast, and WCAG-aligned accessibility. Use when designing or reviewing UI/layout decisions.
- `web-performance` — image optimization, font loading, and Core Web Vitals (LCP/CLS/INP). Use when adding images, fonts, or a new page/route.

### Deployment

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main` (or manual dispatch), using `withastro/action` to build and `actions/deploy-pages` to publish. No separate hosting config (Netlify/Vercel/etc.) is used.
