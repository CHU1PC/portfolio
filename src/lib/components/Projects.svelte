<script lang="ts">
  import { t } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { projects } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';
  import { ArrowUpRight } from 'lucide-svelte';

  $: ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
</script>

<section id="projects" class="container-page py-20">
  <div use:inView>
    <p class="section-eyebrow">{$t('projects.eyebrow')}</p>
    <h2 class="section-title">{$t('projects.title')}</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each ordered as project (project.slug)}
        <ProjectCard {project} />
      {/each}
    </div>
    <div class="mt-8">
      <a
        href="https://github.com/CHU1PC?tab=repositories"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1 text-sm text-accent hover:underline"
      >
        {$t('projects.allProjects')}
        <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
</section>
