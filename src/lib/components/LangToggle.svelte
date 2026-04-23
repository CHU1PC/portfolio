<script lang="ts">
  import { lang, toggleLang } from '$lib/stores/lang';
  import { Languages } from 'lucide-svelte';
</script>

<button
  type="button"
  class="btn-ghost px-3 py-1.5 text-xs"
  aria-label="Toggle language"
  on:click={toggleLang}
>
  <Languages size={14} />
  <span class="font-mono">{$lang === 'en' ? 'EN' : 'JA'}</span>
</button>
