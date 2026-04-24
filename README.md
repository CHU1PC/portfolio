# portfolio

Personal portfolio of Tadashi (CHU) — live at [chu1pc.github.io/portfolio](https://chu1pc.github.io/portfolio).

Built with SvelteKit + TypeScript + Tailwind, statically exported via `@sveltejs/adapter-static`, bilingual EN/JP, and auto-deployed to GitHub Pages from `main` via GitHub Actions.

## Development

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev           # http://localhost:5173
bun run build         # outputs build/
bun run preview       # serves build/ locally
bun run check         # svelte-check
```

## Structure

- `src/routes/` — SvelteKit pages (`/`, `/blog`, `/blog/[slug]`)
- `src/lib/components/` — Svelte components (Hero, About, Projects, …)
- `src/lib/data/` — static data (projects, experience, skills)
- `src/lib/i18n/` — EN/JP dictionaries and `t` store
- `src/content/blog/` — markdown posts (mdsvex)
- `static/` — `resume.pdf`, `favicon.svg`, `.nojekyll`
- `.github/workflows/deploy.yml` — Pages deploy

## Content updates

- **New project** → edit `src/lib/data/projects.ts`
- **New experience** → edit `src/lib/data/experience.ts`
- **New blog post** → create `src/content/blog/<slug>.md` with the frontmatter shown in `hello-world.md`
- **New translation key** → add to both `src/lib/i18n/en.json` and `src/lib/i18n/ja.json`
