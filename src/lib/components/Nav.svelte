<script lang="ts">
  import { t } from '$lib/i18n';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import LangToggle from './LangToggle.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { Menu, X } from 'lucide-svelte';

  let open = false;
  $: onHome = $page.url.pathname === `${base}/` || $page.url.pathname === base;

  const sections = [
    { key: 'about', href: 'about' },
    { key: 'currently', href: 'currently' },
    { key: 'howIWork', href: 'how-i-work' },
    { key: 'experience', href: 'experience' },
    { key: 'projects', href: 'projects' },
    { key: 'skills', href: 'skills' },
    { key: 'contact', href: 'contact' }
  ];

  function hrefFor(h: string) {
    return onHome ? `#${h}` : `${base}/#${h}`;
  }
</script>

<header
  class="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70"
>
  <nav class="container-page flex h-14 items-center justify-between">
    <a href="{base}/" class="font-mono text-sm font-semibold tracking-tight hover:text-accent">
      chu1pc<span class="text-accent">.</span>
    </a>

    <div class="hidden items-center gap-1 md:flex">
      {#each sections as s}
        <a
          href={hrefFor(s.href)}
          class="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        >
          {$t(`nav.${s.key}`)}
        </a>
      {/each}
      <a
        href="{base}/blog"
        class="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      >
        {$t('nav.blog')}
      </a>
      <div class="ml-2 flex items-center gap-1">
        <LangToggle />
        <ThemeToggle />
      </div>
    </div>

    <div class="flex items-center gap-1 md:hidden">
      <LangToggle />
      <ThemeToggle />
      <button
        type="button"
        class="btn-ghost px-2 py-1.5"
        aria-label="Toggle menu"
        on:click={() => (open = !open)}
      >
        {#if open}<X size={16} />{:else}<Menu size={16} />{/if}
      </button>
    </div>
  </nav>

  {#if open}
    <div class="border-t border-zinc-200 bg-zinc-50 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
      <div class="container-page flex flex-col py-2">
        {#each sections as s}
          <a
            href={hrefFor(s.href)}
            on:click={() => (open = false)}
            class="py-2 text-sm text-zinc-700 hover:text-accent dark:text-zinc-300"
          >
            {$t(`nav.${s.key}`)}
          </a>
        {/each}
        <a
          href="{base}/blog"
          on:click={() => (open = false)}
          class="py-2 text-sm text-zinc-700 hover:text-accent dark:text-zinc-300"
        >
          {$t('nav.blog')}
        </a>
      </div>
    </div>
  {/if}
</header>
