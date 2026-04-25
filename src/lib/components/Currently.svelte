<script lang="ts">
  import { t, tNode } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { Briefcase, BookOpen, GraduationCap, Trophy } from 'lucide-svelte';

  type Item = { lead: string; highlight: string };

  const icons = [Briefcase, BookOpen, GraduationCap, Trophy];

  $: items = ($tNode('currently.items') ?? []) as Item[];
</script>

<section id="currently" class="py-20">
  <div class="container-page" use:inView>
    <p class="section-eyebrow">{$t('currently.eyebrow')}</p>
    <h2 class="section-title">{$t('currently.title')}</h2>
    <ul class="mt-8 grid gap-4 sm:grid-cols-2">
      {#each items as item, i}
        <li class="card flex items-start gap-3 p-4">
          <svelte:component
            this={icons[i] ?? Briefcase}
            size={20}
            class="mt-0.5 text-accent shrink-0"
          />
          <p class="text-zinc-700 dark:text-zinc-300">
            {item.lead}
            <span class="font-semibold text-zinc-900 dark:text-zinc-100">{item.highlight}</span>
          </p>
        </li>
      {/each}
    </ul>
  </div>
</section>
