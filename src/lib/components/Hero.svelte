<script lang="ts">
  import { t } from '$lib/i18n';
  import { Github, Mail, ArrowRight } from 'lucide-svelte';
</script>

<section id="hero" class="container-page pt-20 pb-16 sm:pt-28 sm:pb-24">
  <div class="mx-auto max-w-3xl">
    <p class="mb-3 text-sm font-medium text-accent">{$t('hero.greeting')}</p>
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
      {$t('hero.name')}
    </h1>
    <p class="mt-3 font-mono text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
      {$t('hero.role')}
    </p>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
      {$t('hero.tagline')}
    </p>
    <div class="mt-8 flex flex-wrap items-center gap-3">
      <a href="#projects" class="btn-primary">
        {$t('hero.ctaProjects')}
        <ArrowRight size={16} />
      </a>
      <a href="#contact" class="btn-ghost">
        <Mail size={16} />
        {$t('hero.ctaContact')}
      </a>
      <a
        href="https://github.com/CHU1PC"
        target="_blank"
        rel="noopener"
        class="btn-ghost"
      >
        <Github size={16} />
        @CHU1PC
      </a>
    </div>
  </div>
</section>
