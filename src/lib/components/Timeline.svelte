<script lang="ts">
  import { t } from '$lib/i18n';
  import { lang } from '$lib/stores/lang';
  import { inView } from '$lib/actions/inView';
  import { experience } from '$lib/data/experience';
  import { ExternalLink } from 'lucide-svelte';

  function fmt(s: string) {
    // ISO YYYY-MM → "Apr 2025"
    const [y, m] = s.split('-');
    if (!m) return y;
    const d = new Date(Number(y), Number(m) - 1, 1);
    return d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  $: sorted = [...experience].sort((a, b) => b.start.localeCompare(a.start));
</script>

<section id="experience" class="py-20">
  <div class="container-page" use:inView>
    <p class="section-eyebrow">{$t('experience.eyebrow')}</p>
    <h2 class="section-title">{$t('experience.title')}</h2>
    <ol class="relative mt-10 border-l-2 border-zinc-200 dark:border-zinc-800">
      {#each sorted as exp}
        <li class="mb-10 ml-6">
          <span class="absolute -left-[9px] mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-zinc-50 dark:ring-zinc-950"></span>
          <div class="flex flex-wrap items-baseline gap-x-3">
            <h3 class="text-lg font-semibold">{exp.role[$lang]}</h3>
            <a
              href={exp.url ?? '#'}
              target={exp.url ? '_blank' : undefined}
              rel="noopener"
              class="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              {exp.org[$lang]}
              {#if exp.url}<ExternalLink size={12} />{/if}
            </a>
          </div>
          <time class="mt-1 block font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {fmt(exp.start)} — {exp.end ? fmt(exp.end) : $t('experience.present')}
          </time>
          <p class="mt-3 text-zinc-700 dark:text-zinc-300">{exp.blurb[$lang]}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
