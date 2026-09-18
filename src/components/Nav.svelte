<script lang="ts">
  import LangToggle from './LangToggle.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  interface NavItem {
    /** 対応するセクションの DOM id。ヘッダー中央の現在地表示にも使う */
    id: string;
    href: string;
    label: string;
  }

  interface Props {
    homeHref: string;
    items: NavItem[];
    openLabel: string;
    closeLabel: string;
    langHref: string;
    langLabel: string;
    langAriaLabel: string;
    toLight: string;
    toDark: string;
    labelLight: string;
    labelDark: string;
  }

  const {
    homeHref,
    items,
    openLabel,
    closeLabel,
    langHref,
    langLabel,
    langAriaLabel,
    toLight,
    toDark,
    labelLight,
    labelDark
  }: Props = $props();

  let open = $state(false);
  let current = $state('');

  // 画面中央の帯に入っているセクションを現在地とする。ヒーローだけの間は空になる
  $effect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((element) => element !== null);
    if (targets.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        current = items.find((item) => visible.has(item.id))?.label ?? '';
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  });

  // オーバーレイ表示中は背後のページをスクロールさせない
  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });

  function onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') open = false;
  }
</script>

<svelte:window onkeydown={onKeydown} />

<header class="header">
  <a class="brand" href={homeHref}>chu1pc</a>

  <div class="section-label" aria-hidden="true">
    {#key current}
      <span class="section-text">{current}</span>
    {/key}
  </div>

  <div class="actions">
    <LangToggle href={langHref} label={langLabel} ariaLabel={langAriaLabel} />
    <ThemeToggle {toLight} {toDark} {labelLight} {labelDark} />
    <button
      type="button"
      class="menu"
      aria-expanded={open}
      aria-controls="nav-overlay"
      onclick={() => (open = !open)}
    >
      {open ? closeLabel : openLabel}
    </button>
  </div>
</header>

<div id="nav-overlay" class="overlay" class:open aria-hidden={!open}>
  <nav>
    <ul>
      {#each items as item, index (item.href)}
        <li style={`--i: ${index}`}>
          <a href={item.href} tabindex={open ? 0 : -1} onclick={() => (open = false)}>
            <span class="index">{String(index + 1).padStart(2, '0')}</span>
            <span class="label">{item.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem var(--page-gutter);
  }

  .brand {
    font-size: var(--fs-small);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink);
  }

  .section-label {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    color: var(--ink-faint);
    font-size: var(--fs-small);
    letter-spacing: 0.2em;
    pointer-events: none;
  }

  .section-text {
    grid-area: 1 / 1;
    animation: section-fade 0.2s ease;
  }

  @keyframes section-fade {
    from {
      opacity: 0;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .menu {
    appearance: none;
    border: 1px solid var(--line-strong);
    border-radius: 999px;
    background: transparent;
    color: var(--ink);
    font: inherit;
    font-size: var(--fs-small);
    letter-spacing: 0.14em;
    padding: 0.35em 1.25em;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .menu:hover {
    background-color: var(--ink);
    color: var(--surface);
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    display: flex;
    align-items: center;
    padding: 6rem var(--page-gutter) 3rem;
    background-color: color-mix(in srgb, var(--surface) 92%, transparent);
    backdrop-filter: blur(18px);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.45s ease,
      visibility 0.45s ease;
  }

  .overlay.open {
    opacity: 1;
    visibility: visible;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li {
    border-top: 1px solid var(--line);
    transform: translateY(1rem);
    opacity: 0;
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
    transition-delay: calc(var(--i) * 60ms);
  }

  li:last-child {
    border-bottom: 1px solid var(--line);
  }

  .overlay.open li {
    transform: translateY(0);
    opacity: 1;
  }

  li a {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    padding: 0.6em 0;
    color: var(--ink-muted);
    font-size: var(--fs-h2);
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  li a:hover {
    color: var(--ink);
  }

  .index {
    font-size: var(--fs-small);
    letter-spacing: 0.2em;
    color: var(--ink-faint);
  }

  @media (max-width: 768px) {
    .section-label {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay,
    li {
      transition-duration: 0.01ms;
    }

    .section-text {
      animation: none;
    }
  }
</style>
