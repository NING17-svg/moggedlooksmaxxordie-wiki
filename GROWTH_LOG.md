# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-29 - System requirements page mirrored to Steam Minimum table

- Task: Replace the previous "hardware not yet announced" framing on /system-requirements with the official Steam store Minimum spec table (Windows 11 64-bit, i5-12400F / Ryzen 5 5600, RTX 3060 Ti 8GB / RX 6700 XT, 16 GB RAM, DirectX 11, 8 GB storage, DirectX-compatible sound card, microphone required, 6 GB cards on lower quality presets, 1080p high-settings target) and add a clearly-labelled "Recommended: not announced by Sigma Labs" section.
- Files changed: `src/data/pages/fixed-pages.ts` (system-requirements block, guides grid summary), `src/data/pages/home.ts` (home grid summary), `src/data/faq.ts` (mlw-spec-gpu, mlw-spec-deck, mlw-spec-disk, mlw-spec-windows10, new mlw-spec-mic), `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: `/system-requirements` rewritten; no URL changes.
- SEO changed: page H1, seoTitle, metaDescription, summary, quickAnswer, keyFacts, modules, and FAQ coverage all reflect the Steam Minimum table; Recommended specs remain explicitly marked as not announced.
- Verification: `npm run verify` required.

### 2026-09-28 - Adsterra six-unit code integration

- Task: Replace the six placeholder Adsterra ad slots (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink) with the real codes collected from the Adsterra publisher dashboard.
- Files changed: `src/data/ads.ts` (six values populated); `GROWTH_LOG.md`.
- URLs affected: none (ad slots live in shared page shell and footer; no public URL changes).
- Ad baseline: All six fixed units now hold real, non-empty Adsterra code; `npm run verify` (typecheck, lint, template/content/indexnow validation, production build, rendered SEO) passes locally.
- Verification: `npm run verify` exit 0.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-08` / Worker `moggedlooksmaxxordie-wiki`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
