<script lang="ts">
  import { t } from '$lib/i18n';
  import { lang } from '$lib/stores/lang';
  import { ArrowLeft } from 'lucide-svelte';
  export let data;
</script>

<svelte:head>
  <title>{$lang === 'ja' ? data.metadata.title_ja : data.metadata.title_en} — Blog</title>
</svelte:head>

<article class="container-page py-20">
  <a href="/blog" class="inline-flex items-center gap-1 text-sm text-accent hover:underline">
    <ArrowLeft size={14} />
    {$t('blog.backToBlog')}
  </a>
  <header class="mt-6 mb-10">
    <time class="font-mono text-xs text-zinc-500 dark:text-zinc-400">{data.metadata.date}</time>
    <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
      {$lang === 'ja' ? data.metadata.title_ja : data.metadata.title_en}
    </h1>
    {#if data.metadata.tags?.length}
      <div class="mt-4 flex flex-wrap gap-1.5">
        {#each data.metadata.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </header>
  <div class="prose prose-zinc max-w-none dark:prose-invert">
    <svelte:component this={data.Content} />
  </div>
</article>
