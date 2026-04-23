<script lang="ts">
  import { t } from '$lib/i18n';
  import { inView } from '$lib/actions/inView';
  import { MapPin, GraduationCap, Sparkles } from 'lucide-svelte';
</script>

<section id="about" class="container-page py-20">
  <div use:inView>
    <p class="section-eyebrow">{$t('about.eyebrow')}</p>
    <h2 class="section-title">{$t('about.title')}</h2>
    <div class="mt-8 grid gap-8 md:grid-cols-3">
      <p class="md:col-span-2 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {$t('about.body')}
      </p>
      <ul class="space-y-3 text-sm">
        <li class="flex items-start gap-3">
          <MapPin size={18} class="mt-0.5 text-accent shrink-0" />
          <span class="text-zinc-700 dark:text-zinc-300">{$t('about.location')}</span>
        </li>
        <li class="flex items-start gap-3">
          <GraduationCap size={18} class="mt-0.5 text-accent shrink-0" />
          <span class="text-zinc-700 dark:text-zinc-300">{$t('about.school')}</span>
        </li>
        <li class="flex items-start gap-3">
          <Sparkles size={18} class="mt-0.5 text-accent shrink-0" />
          <span class="text-zinc-700 dark:text-zinc-300">{$t('about.interests')}</span>
        </li>
      </ul>
    </div>
  </div>
</section>
