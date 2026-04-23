<script lang="ts">
  import { t } from '$lib/i18n';
  import { lang } from '$lib/stores/lang';
  import { ArrowRight } from 'lucide-svelte';
  export let data;
</script>

<svelte:head>
  <title>Blog — Tadashi (CHU)</title>
</svelte:head>

<section class="container-page py-20">
  <p class="section-eyebrow">{$t('blog.eyebrow')}</p>
  <h1 class="section-title">{$t('blog.title')}</h1>
  <p class="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">{$t('blog.description')}</p>

  {#if data.posts.length === 0}
    <p class="mt-10 text-zinc-500">{$t('blog.empty')}</p>
  {:else}
    <ul class="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
      {#each data.posts as post (post.slug)}
        <li class="py-6">
          <a href={`/blog/${post.slug}`} class="group block">
            <div class="flex items-baseline justify-between gap-4">
              <h2 class="text-xl font-semibold group-hover:text-accent">
                {$lang === 'ja' ? post.title_ja : post.title_en}
              </h2>
              <time class="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">{post.date}</time>
            </div>
            <p class="mt-2 text-zinc-600 dark:text-zinc-400">
              {$lang === 'ja' ? post.summary_ja : post.summary_en}
            </p>
            <span class="mt-3 inline-flex items-center gap-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {$t('blog.readMore')}
              <ArrowRight size={14} />
            </span>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</section>
