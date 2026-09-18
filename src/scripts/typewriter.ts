const DEFAULT_CHAR_MS = 50;
/** 行と行の間隔 */
const LINE_GAP_MS = 250;
/** 全行を打ち終えてからカーソルを消すまで */
const CARET_LINGER_MS = 2000;
/** カーソル点滅を止める合図。CSS の .is-typing がカーソル本体を出す */
const TYPING_CLASS = 'is-typing';

const DEFAULT_CHAIN = 'a';

interface Line {
  element: HTMLElement;
  chars: string[];
  speed: number;
}

function readSpeed(element: HTMLElement): number {
  const raw = Number(element.dataset.typewriterSpeed);
  return Number.isFinite(raw) && raw > 0 ? raw : DEFAULT_CHAR_MS;
}

function readChain(element: HTMLElement): string {
  return element.dataset.typewriterChain ?? DEFAULT_CHAIN;
}

function wait(ms: number, onTimer: (id: number) => void): Promise<void> {
  return new Promise((resolve) => {
    onTimer(window.setTimeout(resolve, ms));
  });
}

/**
 * data-typewriter-chain ごとに独立して並行開始し、同じ chain 内は
 * data-typewriter-order の順に 1 行ずつ直列で打つ。
 * 各要素は SSR の全文を読み取ってから空にするので、JS 無効時は全文がそのまま読める
 */
export function startTypewriter(): () => void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-typewriter]'));
  if (elements.length === 0) return () => {};

  const allLines: Line[] = elements.map((element) => ({
    element,
    chars: Array.from(element.textContent ?? ''),
    speed: readSpeed(element)
  }));

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const chains = new Map<string, Line[]>();
  elements.forEach((element, index) => {
    const chain = readChain(element);
    const group = chains.get(chain) ?? [];
    group.push(allLines[index]);
    chains.set(chain, group);
  });
  chains.forEach((group) => {
    group.sort(
      (a, b) =>
        Number(a.element.dataset.typewriterOrder ?? '0') -
        Number(b.element.dataset.typewriterOrder ?? '0')
    );
  });

  allLines.forEach(({ element }) => {
    element.textContent = '';
  });

  let cancelled = false;
  const activeIntervals = new Set<number>();
  const activeTimers = new Set<number>();

  const typeLine = ({ element, chars, speed }: Line): Promise<void> =>
    new Promise((resolve) => {
      element.classList.add(TYPING_CLASS);
      if (chars.length === 0) {
        resolve();
        return;
      }
      let typed = 0;
      const intervalId = window.setInterval(() => {
        typed += 1;
        element.textContent = chars.slice(0, typed).join('');
        if (typed >= chars.length) {
          window.clearInterval(intervalId);
          activeIntervals.delete(intervalId);
          resolve();
        }
      }, speed);
      activeIntervals.add(intervalId);
    });

  const runChain = async (lines: Line[]): Promise<void> => {
    for (let i = 0; i < lines.length; i += 1) {
      if (cancelled) return;
      await typeLine(lines[i]);
      if (cancelled) return;
      if (i < lines.length - 1) {
        lines[i].element.classList.remove(TYPING_CLASS);
        await wait(LINE_GAP_MS, (id) => {
          activeTimers.add(id);
        });
      }
    }
    if (cancelled) return;
    const timerId = window.setTimeout(() => {
      lines[lines.length - 1].element.classList.remove(TYPING_CLASS);
      activeTimers.delete(timerId);
    }, CARET_LINGER_MS);
    activeTimers.add(timerId);
  };

  chains.forEach((lines) => {
    void runChain(lines);
  });

  return () => {
    cancelled = true;
    activeIntervals.forEach((id) => window.clearInterval(id));
    activeTimers.forEach((id) => window.clearTimeout(id));
    allLines.forEach(({ element, chars }) => {
      element.classList.remove(TYPING_CLASS);
      element.textContent = chars.join('');
    });
  };
}
