// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chu1pc.github.io',
  base: '/portfolio',
  output: 'static',
  trailingSlash: 'always',
  integrations: [svelte()],
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en'],
    // redirectToDefaultLocale を切らないと、Astro が自前の遅延2秒の redirect ページで
    // src/pages/index.astro を上書きしてしまう
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false }
  },
  vite: {
    plugins: [tailwind()]
  }
});
