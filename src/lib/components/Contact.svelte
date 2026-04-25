<script lang="ts">
  import { t } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { base } from '$app/paths';
  import { Mail, Github, FileDown } from 'lucide-svelte';
</script>

<section id="contact" class="py-20">
  <div class="container-page">
    <div use:inView class="mx-auto max-w-3xl text-center">
    <p class="section-eyebrow">{$t('contact.eyebrow')}</p>
    <h2 class="section-title">{$t('contact.title')}</h2>
    <p class="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
      {$t('contact.body')}
    </p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a href="mailto:raikyu70@gmail.com" class="btn-primary">
        <Mail size={16} />
        {$t('contact.email')}
      </a>
      <a href="https://github.com/CHU1PC" target="_blank" rel="noopener" class="btn-ghost">
        <Github size={16} />
        {$t('contact.github')}
      </a>
      <a href="{base}/resume.pdf" target="_blank" rel="noopener" class="btn-ghost">
        <FileDown size={16} />
        {$t('contact.resume')}
      </a>
    </div>
    </div>
  </div>
</section>
