<script lang="ts">
  import { t, tNode } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { skills } from '$lib/data/skills';

  type Capability = { title: string; body: string };

  $: capabilities = ($tNode('skills.capabilities') ?? []) as Capability[];
</script>

<section id="skills" class="py-20">
  <div class="container-page" use:inView>
    <p class="section-eyebrow">{$t('skills.eyebrow')}</p>
    <h2 class="section-title">{$t('skills.title')}</h2>

    <h3 class="mt-10 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {$t('skills.capabilitiesTitle')}
    </h3>
    <div class="mt-4 grid gap-4 md:grid-cols-2">
      {#each capabilities as cap, i}
        <div class="card flex gap-4">
          <span class="font-mono text-sm text-accent shrink-0 pt-1" aria-hidden="true">
            0{i + 1}
          </span>
          <div>
            <h4 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">{cap.title}</h4>
            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {cap.body}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <h3 class="mt-12 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {$t('skills.stackTitle')}
    </h3>
    <div class="mt-4 grid gap-6 sm:grid-cols-3">
      {#each skills as group}
        <div class="card">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {$t(`skills.${group.groupKey}`)}
          </h4>
          <ul class="mt-4 flex flex-wrap gap-2">
            {#each group.items as item}
              <li class="tag">{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
