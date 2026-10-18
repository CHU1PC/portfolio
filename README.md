# portfolio

Personal portfolio of Tadashi (CHU) — live at [chu1pc.com](https://chu1pc.com).

Built with Astro + TypeScript + Tailwind v4, with Svelte 5 islands for the interactive
bits. Statically exported, bilingual JA/EN (`/ja/` and `/en/`), and auto-deployed to
Cloudflare Workers from `main` (`bun run build`, static assets from `dist/`).

## Development

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev           # http://localhost:4321/
bun run build         # outputs dist/
bun run preview       # serves dist/ locally
bun run check         # astro check
bun run check:code    # lint and format check for TypeScript, Astro, Svelte, and CSS
bun run format        # format TypeScript, Astro, Svelte, and CSS files
```

`bun install` installs a pre-commit hook. It formats and lints staged TypeScript,
Astro, Svelte, and CSS files, then includes the formatting changes in the commit.
`bun run check` also checks Astro and Svelte types.

## Structure

- `src/pages/` — routes. `index.astro` redirects to `/en/`, `[lang]/index.astro` renders the one-page site for each locale, `404.astro` is the custom 404
- `src/layouts/Base.astro` — html shell, fonts, theme bootstrap, nav, footer
- `src/components/` — `Nav.svelte`, `ThemeToggle.svelte`, `LangToggle.svelte` (Svelte islands) and `GeoBackground.astro`
- `src/scripts/geo-background.ts` — canvas geometric line-art background, no framework
- `src/styles/global.css` — Tailwind entry, theme tokens, fluid type scale
- `src/i18n/` — `ja.ts` / `en.ts` dictionaries and `useTranslations(lang)`
- `public/` — `favicon.svg`, `me.webp`
- `wrangler.jsonc` — Workers static asset configuration
- `docs/legacy-content/` — content carried over from the SvelteKit version, not yet wired in

## Content updates

- **New translation key** → add to `src/i18n/en.ts` (the type source) and `src/i18n/ja.ts`
- **Theme colors / type scale** → `src/styles/global.css`
