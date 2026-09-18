<script lang="ts">
  type Theme = 'dark' | 'light';

  interface Props {
    toLight: string;
    toDark: string;
    labelLight: string;
    labelDark: string;
  }

  const { toLight, toDark, labelLight, labelDark }: Props = $props();

  let theme = $state<Theme>('dark');

  // FOUC 防止のインラインスクリプトが先に data-theme を決めているので、そこから拾う
  $effect(() => {
    theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  });

  function toggle(): void {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage が使えない環境では記憶しないだけでよい
    }
  }
</script>

<button
  type="button"
  class="toggle"
  aria-label={theme === 'dark' ? toLight : toDark}
  onclick={toggle}
>
  {theme === 'dark' ? labelLight : labelDark}
</button>

<style>
  .toggle {
    appearance: none;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: transparent;
    color: var(--ink-muted);
    font: inherit;
    font-size: var(--fs-small);
    letter-spacing: 0.14em;
    padding: 0.35em 1em;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
  }

  .toggle:hover {
    color: var(--ink);
    border-color: var(--line-strong);
  }
</style>
