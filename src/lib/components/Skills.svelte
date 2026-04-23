<script lang="ts">
  import { t } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { skills } from '$lib/data/skills';
</script>

<section id="skills" class="container-page py-20">
  <div use:inView>
    <p class="section-eyebrow">{$t('skills.eyebrow')}</p>
    <h2 class="section-title">{$t('skills.title')}</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-3">
      {#each skills as group}
        <div class="card">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {$t(`skills.${group.groupKey}`)}
          </h3>
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
