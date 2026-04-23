<script lang="ts">
  import { t } from '$lib/i18n';
  import { lang } from '$lib/stores/lang';
  import type { Project } from '$lib/data/projects';
  import { Github, ExternalLink, Star } from 'lucide-svelte';

  export let project: Project;
</script>

<article class="card flex h-full flex-col hover:border-accent/50">
  <div class="flex items-start justify-between gap-3">
    <h3 class="text-lg font-semibold leading-tight">{project.title[$lang]}</h3>
    {#if project.featured}
      <span class="inline-flex items-center gap-1 text-xs font-medium text-accent">
        <Star size={12} fill="currentColor" />
        {$t('projects.featured')}
      </span>
    {/if}
  </div>
  <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
    {project.description[$lang]}
  </p>
  <div class="mt-4 flex flex-wrap gap-1.5">
    {#each project.tech as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
  <div class="mt-auto flex items-center gap-4 pt-4 text-sm">
    <a href={project.github} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-zinc-600 hover:text-accent dark:text-zinc-400">
      <Github size={14} />
      {$t('projects.viewOnGithub')}
    </a>
    {#if project.demo}
      <a href={project.demo} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-zinc-600 hover:text-accent dark:text-zinc-400">
        <ExternalLink size={14} />
        {$t('projects.liveDemo')}
      </a>
    {/if}
  </div>
</article>
