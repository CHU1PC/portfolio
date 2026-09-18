<script lang="ts">
  interface Props {
    /** 同じページの他言語版の URL */
    href: string;
    label: string;
    ariaLabel: string;
  }

  const { href, label, ariaLabel }: Props = $props();
</script>

<a class="toggle" {href} hreflang={label.toLowerCase()} aria-label={ariaLabel}>{label}</a>

<style>
  .toggle {
    display: inline-block;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--ink-muted);
    font-size: var(--fs-small);
    letter-spacing: 0.14em;
    padding: 0.35em 1em;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
  }

  .toggle:hover {
    color: var(--ink);
    border-color: var(--line-strong);
  }
</style>
