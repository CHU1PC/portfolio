<script lang="ts">
  import { t, tNode } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';

  type Principle = { title: string; body: string };

  $: principles = ($tNode('howIWork.principles') ?? []) as Principle[];
</script>

<section id="how-i-work" class="container-page py-20">
  <div use:inView>
    <p class="section-eyebrow">{$t('howIWork.eyebrow')}</p>
    <h2 class="section-title">{$t('howIWork.title')}</h2>
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      {#each principles as p, i}
        <div class="flex gap-4">
          <span
            class="font-mono text-sm text-accent shrink-0 pt-1"
            aria-hidden="true"
          >
            0{i + 1}
          </span>
          <div>
            <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
            <p class="mt-1 text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.body}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
