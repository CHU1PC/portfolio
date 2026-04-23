<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { Sun, Moon } from 'lucide-svelte';
</script>

<button
  type="button"
  class="btn-ghost px-3 py-1.5 text-xs"
  aria-label="Toggle theme"
  on:click={toggleTheme}
>
  {#if $theme === 'dark'}
    <Sun size={14} />
  {:else}
    <Moon size={14} />
  {/if}
</button>
