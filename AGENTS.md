# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (port 5173, HMR enabled)
npm run build      # Production build → build/
npm run preview    # Preview production build (port 4173)
npm run check      # TypeScript + Svelte type checking
npm run lint       # Prettier + ESLint checks
npm run format     # Auto-format with Prettier
```

## Architecture

This is a **SvelteKit static site** for BSides312, a Chicago cybersecurity conference. It uses `@sveltejs/adapter-static` and deploys to GitHub Pages at `bsides312.org` via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

**Routing:** File-based under `src/routes/`. Each directory is a URL path; `+page.svelte` = page component, `+page.server.ts` = server-side load function (runs at build time for static generation), `+layout.svelte` = shared shell with navbar.

**Data:** Conference content lives in Svelte stores under `src/lib/stores/` (board members, sponsors, FAQ). The homepage gallery reads image files from `static/assets/img/gallery/` at build time via `src/routes/+page.server.ts`.

**Static assets:** Everything in `static/` is served as-is. The `static/` directory also contains `CNAME`, `.nojekyll`, and `robots.txt` which are required for GitHub Pages to work correctly — do not move these.

## Code Style

- Tabs for indentation, single quotes, 100-char line width (Prettier)
- TypeScript strict mode enabled
- ESLint allows `@html` in Svelte templates and relaxed `@typescript-eslint/no-explicit-any`
