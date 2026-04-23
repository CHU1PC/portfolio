<script lang="ts">
  import { t } from '$lib/i18n';
  import { Github } from 'lucide-svelte';
</script>

<footer class="mt-24 border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
  <div class="container-page flex flex-col items-center justify-between gap-3 sm:flex-row">
    <p>© {new Date().getFullYear()} Tadashi (CHU). {$t('footer.builtWith')}</p>
    <a
      href="https://github.com/CHU1PC/chu1pc.github.io"
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-1 hover:text-accent"
    >
      <Github size={14} />
      {$t('footer.source')}
    </a>
  </div>
</footer>
