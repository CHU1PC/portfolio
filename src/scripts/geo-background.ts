interface DriftSpec {
  periodXSec: number;
  periodYSec: number;
  phaseX: number;
  phaseY: number;
  /** 振幅。画面短辺に対する比率 */
  amp: number;
}

interface ScaleSpec {
  /** scale = 1 + SCROLL_SCALE_AMPLITUDE * sin(scrollY / pageHeight * PI * k + phase) */
  k: number;
  phase: number;
}

interface CircleElement {
  /** 画面幅に対する比率 */
  baseX: number;
  /** 周回 [-margin, height+margin) 上の位置。0〜1 の一様乱数で、実ピクセル位置は resize 時に margin から計算する */
  basePosT: number;
  /** 画面短辺に対する比率 */
  radius: number;
  alpha: number;
  parallax: number;
  drift: DriftSpec;
  scale: ScaleSpec;
}

interface ArcElement {
  baseX: number;
  basePosT: number;
  /** 同心の半径。画面短辺に対する比率 */
  radii: readonly number[];
  startAngle: number;
  sweep: number;
  spinPeriodSec: number;
  spinDir: number;
  alpha: number;
  parallax: number;
  drift: DriftSpec;
  scale: ScaleSpec;
}

interface LineElement {
  baseX: number;
  basePosT: number;
  /** 基準の角度（rad）。ここから ±LINE_SWING_DEG だけ揺れる */
  angle: number;
  swingPeriodSec: number;
  swingPhase: number;
  alpha: number;
  parallax: number;
}

interface CrossElement {
  baseX: number;
  basePosT: number;
  alpha: number;
  parallax: number;
}

interface GeoDebugInfo {
  visible: {
    circles: number;
    arcs: number;
    lines: number;
    crosses: number;
  };
}

declare global {
  interface Window {
    __geoDebug?: GeoDebugInfo;
  }
}

interface Scene {
  circles: readonly CircleElement[];
  arcs: readonly ArcElement[];
  lines: readonly LineElement[];
  crosses: readonly CrossElement[];
}

interface GeoPreset {
  lineAlpha: number;
  rotationSpeed: number;
}

interface GeoTheme {
  bg: string;
  lineRgb: string;
  grainAlpha: number;
}

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;

/** 1フレームあたりの経過時間の上限（ms）。タブ復帰直後の急変を抑える */
const MAX_FRAME_DT_MS = 100;

/** 出力 canvas の解像度倍率の上限 */
const MAX_DPR = 2;
/** 線の太さ。DPR で割って常に 1 デバイスピクセルで描く */
const LINE_DEVICE_PX = 1;

/** 配置の乱数シード。固定してリロードしても同じ構図になる */
const LAYOUT_SEED = 20260914;

const ALPHA_MIN = 0.14;
const ALPHA_MAX = 0.28;

/** 大きい円ほど遅い。小さい円ほどこの上限側に寄る */
const PARALLAX_CIRCLE_MIN = 0.15;
const PARALLAX_CIRCLE_MAX = 0.3;
/** 円弧は円と直線・十字の中間の速さにして奥行きの差を出す */
const PARALLAX_ARC_MIN = 0.3;
const PARALLAX_ARC_MAX = 0.45;
const PARALLAX_LINE_MIN = 0.4;
const PARALLAX_LINE_MAX = 0.6;
const PARALLAX_CROSS_MIN = 0.4;
const PARALLAX_CROSS_MAX = 0.6;

const DRIFT_PERIOD_MIN_SEC = 20;
const DRIFT_PERIOD_MAX_SEC = 40;
const DRIFT_AMP_MIN = 0.02;
const DRIFT_AMP_MAX = 0.04;

/** scale = 1 + SCROLL_SCALE_AMPLITUDE * sin(...)。範囲は 0.7〜1.3 倍 */
const SCROLL_SCALE_AMPLITUDE = 0.3;
const SCROLL_SCALE_MAX = 1 + SCROLL_SCALE_AMPLITUDE;
const SCALE_K_MIN = 1;
const SCALE_K_MAX = 2;

/** 周回全体に散らすため画面内基準の個数より多めに持つ（詳細は resize() のコメント参照） */
const CIRCLE_COUNT = 7;
const CIRCLE_RADIUS_MIN = 0.35;
const CIRCLE_RADIUS_MAX = 0.7;

const ARC_GROUP_COUNT = 4;
const ARC_RING_MIN = 2;
const ARC_RING_MAX = 3;
const ARC_RADIUS_MIN = 0.2;
const ARC_RADIUS_MAX = 0.5;
const ARC_RING_GAP_MIN = 0.04;
const ARC_RING_GAP_MAX = 0.08;
const ARC_SWEEP_MIN_DEG = 60;
const ARC_SWEEP_MAX_DEG = 200;
const ARC_SPIN_PERIOD_MIN_SEC = 90;
const ARC_SPIN_PERIOD_MAX_SEC = 180;

const LINE_COUNT = 4;
const LINE_ANGLE_MAX_DEG = 30;
const LINE_SWING_DEG = 4;
const LINE_SWING_PERIOD_MIN_SEC = 30;
const LINE_SWING_PERIOD_MAX_SEC = 60;
/** 直線の長さ。画面幅に対する比率。画面を確実に横断させる */
const LINE_LENGTH_RATIO = 1.6;

const CROSS_COUNT = 6;
/** 十字の腕の長さ。全長はこの2倍の 10px */
const CROSS_ARM_PX = 5;

/** カーソルからこの距離以内の要素を明るくする（CSS px） */
const CURSOR_RADIUS_PX = 220;
const CURSOR_ALPHA_BOOST = 0.12;

/** これ以上の px/frame のスクロールで energy が 1 に達する */
const ENERGY_SCROLL_PX = 40;
const ENERGY_ATTACK_TAU_MS = 120;
const ENERGY_DECAY_TAU_MS = 1500;
/** energy が 1 のときの円弧の回転速度と線の不透明度の倍率 */
const ENERGY_SPIN_MAX = 4;
const ENERGY_ALPHA_MAX = 1.5;

const GRAIN_TILE_PX = 128;

const GEO_BG_FALLBACK = '#0a0a0a';
const GEO_LINE_RGB_FALLBACK = '248 250 252';

/** セクションごとの調子。data-geo 属性の値がキーになる */
const SECTION_PRESETS: Record<string, GeoPreset> = {
  hero: { lineAlpha: 1.0, rotationSpeed: 1.0 },
  projects: { lineAlpha: 0.75, rotationSpeed: 0.8 },
  about: { lineAlpha: 1.0, rotationSpeed: 1.0 },
  experience: { lineAlpha: 0.8, rotationSpeed: 1.2 },
  skills: { lineAlpha: 1.0, rotationSpeed: 1.5 },
  contact: { lineAlpha: 0.8, rotationSpeed: 0.6 }
};
const NEUTRAL_PRESET: GeoPreset = { lineAlpha: 1, rotationSpeed: 1 };
const DEFAULT_PRESET_KEY = 'hero';
/** セクション切り替え時にプリセットへ寄せる時間（ms） */
const PRESET_TRANSITION_MS = 1000;
/** セクションを「見えている」とみなす交差割合 */
const SECTION_VISIBLE_THRESHOLD = 0.5;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** 線形合同法。構図をリロードしても固定するために使う */
function createRandom(seed: number): () => number {
  let state = seed >>> 0;
  return (): number => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function buildScene(): Scene {
  const random = createRandom(LAYOUT_SEED);
  const between = (min: number, max: number): number => lerp(min, max, random());
  const drift = (): DriftSpec => ({
    periodXSec: between(DRIFT_PERIOD_MIN_SEC, DRIFT_PERIOD_MAX_SEC),
    periodYSec: between(DRIFT_PERIOD_MIN_SEC, DRIFT_PERIOD_MAX_SEC),
    phaseX: random(),
    phaseY: random(),
    amp: between(DRIFT_AMP_MIN, DRIFT_AMP_MAX)
  });
  const scaleSpec = (): ScaleSpec => ({
    k: between(SCALE_K_MIN, SCALE_K_MAX),
    phase: random() * TAU
  });

  const circles: CircleElement[] = [];
  for (let i = 0; i < CIRCLE_COUNT; i += 1) {
    const radius = between(CIRCLE_RADIUS_MIN, CIRCLE_RADIUS_MAX);
    // 大きい円ほど遅く動くよう、半径を parallax 係数へ逆向きに写像する
    const radiusT = (radius - CIRCLE_RADIUS_MIN) / (CIRCLE_RADIUS_MAX - CIRCLE_RADIUS_MIN);
    circles.push({
      baseX: between(-0.15, 1.15),
      basePosT: random(),
      radius,
      alpha: between(ALPHA_MIN, ALPHA_MAX),
      parallax: lerp(PARALLAX_CIRCLE_MAX, PARALLAX_CIRCLE_MIN, radiusT),
      drift: drift(),
      scale: scaleSpec()
    });
  }

  const arcs: ArcElement[] = [];
  for (let i = 0; i < ARC_GROUP_COUNT; i += 1) {
    const ringCount = Math.round(between(ARC_RING_MIN, ARC_RING_MAX));
    const first = between(ARC_RADIUS_MIN, ARC_RADIUS_MAX);
    const radii: number[] = [];
    for (let r = 0; r < ringCount; r += 1) {
      radii.push(first + r * between(ARC_RING_GAP_MIN, ARC_RING_GAP_MAX));
    }
    arcs.push({
      baseX: between(0.05, 0.95),
      basePosT: random(),
      radii,
      startAngle: random() * TAU,
      sweep: between(ARC_SWEEP_MIN_DEG, ARC_SWEEP_MAX_DEG) * DEG,
      spinPeriodSec: between(ARC_SPIN_PERIOD_MIN_SEC, ARC_SPIN_PERIOD_MAX_SEC),
      spinDir: random() < 0.5 ? -1 : 1,
      alpha: between(ALPHA_MIN, ALPHA_MAX),
      parallax: between(PARALLAX_ARC_MIN, PARALLAX_ARC_MAX),
      drift: drift(),
      scale: scaleSpec()
    });
  }

  const lines: LineElement[] = [];
  for (let i = 0; i < LINE_COUNT; i += 1) {
    lines.push({
      baseX: between(0.1, 0.9),
      basePosT: (i + 0.5) / LINE_COUNT + between(-0.12, 0.12),
      angle: between(-LINE_ANGLE_MAX_DEG, LINE_ANGLE_MAX_DEG) * DEG,
      swingPeriodSec: between(LINE_SWING_PERIOD_MIN_SEC, LINE_SWING_PERIOD_MAX_SEC),
      swingPhase: random(),
      alpha: between(ALPHA_MIN, ALPHA_MAX),
      parallax: between(PARALLAX_LINE_MIN, PARALLAX_LINE_MAX)
    });
  }

  const crosses: CrossElement[] = [];
  for (let i = 0; i < CROSS_COUNT; i += 1) {
    crosses.push({
      baseX: between(0.08, 0.92),
      basePosT: (i + 0.5) / CROSS_COUNT + between(-0.08, 0.08),
      alpha: between(ALPHA_MIN, ALPHA_MAX),
      parallax: between(PARALLAX_CROSS_MIN, PARALLAX_CROSS_MAX)
    });
  }

  return { circles, arcs, lines, crosses };
}

function readTheme(): GeoTheme {
  const style = getComputedStyle(document.documentElement);
  const read = (name: string): string => style.getPropertyValue(name).trim();
  const grain = Number.parseFloat(read('--geo-grain-alpha'));
  return {
    bg: read('--geo-bg') || GEO_BG_FALLBACK,
    lineRgb: read('--geo-rgb') || GEO_LINE_RGB_FALLBACK,
    grainAlpha: Number.isFinite(grain) ? grain : 0.03
  };
}

function createGrainTile(): HTMLCanvasElement | null {
  const tile = document.createElement('canvas');
  tile.width = GRAIN_TILE_PX;
  tile.height = GRAIN_TILE_PX;
  const tileCtx = tile.getContext('2d');
  if (tileCtx === null) return null;

  const image = tileCtx.createImageData(GRAIN_TILE_PX, GRAIN_TILE_PX);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    const value = Math.floor(Math.random() * 256);
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = 255;
  }
  tileCtx.putImageData(image, 0, 0);
  return tile;
}

export function startGeoBackground(canvas: HTMLCanvasElement): () => void {
  const context2d = canvas.getContext('2d');
  if (context2d === null) return () => {};
  const ctx: CanvasRenderingContext2D = context2d;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scene = buildScene();
  /** 円弧ごとの回転角。速度が時間で変わるので step() で積分する */
  const arcSpins = scene.arcs.map(() => 0);

  const grainTile = createGrainTile();
  const grainPattern = grainTile === null ? null : ctx.createPattern(grainTile, 'repeat');

  let width = 0;
  let height = 0;
  let minSide = 0;
  /** スクロール可能な全高。scale の位相計算に使う */
  let pageHeight = 1;
  let lineWidth = 1;
  let theme = readTheme();
  let frame = 0;

  // 各要素の周回 [-margin, height+margin) 上の実ピクセル位置。resize() で再計算する
  let circleBaseY: number[] = [];
  let arcBaseY: number[] = [];
  let lineBaseY: number[] = [];
  let crossBaseY: number[] = [];

  const debugCounts = { circles: 0, arcs: 0, lines: 0, crosses: 0 };

  let pointerX = 0;
  let pointerY = 0;
  let pointerActive = false;

  // スクロール連動の状態。すべて step() が1フレームに1回だけ更新する
  let scrollY = 0;
  let lastScrollY = 0;
  let lastFrameTime = 0;
  let energy = 0;

  // セクションプリセットの状態
  let activePresetKey = DEFAULT_PRESET_KEY;
  let transitionFrom: GeoPreset = SECTION_PRESETS[DEFAULT_PRESET_KEY];
  let transitionTo: GeoPreset = SECTION_PRESETS[DEFAULT_PRESET_KEY];
  let transitionStart = 0;
  let framePreset: GeoPreset = SECTION_PRESETS[DEFAULT_PRESET_KEY];

  function currentPreset(now: number): GeoPreset {
    const t = clamp((now - transitionStart) / PRESET_TRANSITION_MS, 0, 1);
    return {
      lineAlpha: lerp(transitionFrom.lineAlpha, transitionTo.lineAlpha, t),
      rotationSpeed: lerp(transitionFrom.rotationSpeed, transitionTo.rotationSpeed, t)
    };
  }

  function setActivePreset(key: string, now: number): void {
    if (key === activePresetKey) return;
    const preset = SECTION_PRESETS[key];
    if (preset === undefined) return;
    transitionFrom = currentPreset(now);
    transitionTo = preset;
    transitionStart = now;
    activePresetKey = key;
  }

  function setupSectionObserver(): IntersectionObserver | null {
    const sections = document.querySelectorAll<HTMLElement>('[data-geo]');
    if (sections.length === 0) return null;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = entry.target.getAttribute('data-geo');
          if (key === null) continue;
          visibleRatios.set(key, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestKey: string | null = null;
        let bestRatio = 0;
        for (const [key, ratio] of visibleRatios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestKey = key;
          }
        }
        if (bestKey !== null) setActivePreset(bestKey, performance.now());
      },
      { threshold: SECTION_VISIBLE_THRESHOLD }
    );

    for (const section of sections) observer.observe(section);
    return observer;
  }

  function resize(): void {
    width = Math.max(window.innerWidth, 1);
    height = Math.max(window.innerHeight, 1);
    minSide = Math.min(width, height);
    pageHeight = Math.max(document.documentElement.scrollHeight - height, 1);

    const dpr = clamp(window.devicePixelRatio || 1, 1, MAX_DPR);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lineWidth = LINE_DEVICE_PX / dpr;

    // basePosT（周回上の位置。0〜1）を要素ごとの margin で実ピクセル位置へ変換する。
    // 周回全体に散らすことで、baseY を画面内だけに置いていたときの
    // 「スクロールすると要素の見え方が揃って一斉に画面外へ出る」偏りを避ける
    circleBaseY = scene.circles.map((spec) => basePixelY(spec.basePosT, circleMargin(spec)));
    arcBaseY = scene.arcs.map((spec) => basePixelY(spec.basePosT, arcMargin(spec)));
    lineBaseY = scene.lines.map((spec) => basePixelY(spec.basePosT, lineMargin(spec.angle)));
    crossBaseY = scene.crosses.map((spec) => basePixelY(spec.basePosT, CROSS_ARM_PX));
  }

  /** 上へ流れて画面外に出た要素を反対側へ回す。margin は要素のはみ出し幅 */
  function wrapY(y: number, margin: number): number {
    const span = height + margin * 2;
    return (((y + margin) % span) + span) % span - margin;
  }

  /** basePosT（周回 [-margin, height+margin) 上の 0〜1 位置）を実ピクセル位置に変換する */
  function basePixelY(basePosT: number, margin: number): number {
    return -margin + basePosT * (height + margin * 2);
  }

  // 再登場のマージンは実際の拡縮でなく最大拡縮（1.3倍）の直径で取り、
  // 拡大時にマージン不足で縁が切れて見えないようにする
  function circleMargin(spec: CircleElement): number {
    return spec.radius * minSide * SCROLL_SCALE_MAX * 2;
  }

  function arcMargin(spec: ArcElement): number {
    const outerRatio = spec.radii[spec.radii.length - 1];
    return outerRatio * minSide * SCROLL_SCALE_MAX * 2;
  }

  function lineMargin(angle: number): number {
    return Math.abs(Math.sin(angle)) * ((LINE_LENGTH_RATIO * width) / 2);
  }

  function driftOffset(spec: DriftSpec, timeSec: number): readonly [number, number] {
    const amp = spec.amp * minSide;
    return [
      Math.sin((timeSec / spec.periodXSec + spec.phaseX) * TAU) * amp,
      Math.sin((timeSec / spec.periodYSec + spec.phaseY) * TAU) * amp
    ];
  }

  /** スクロール量に応じた円・円弧の拡縮率。0.7〜1.3 倍に収まる */
  function scrollScale(spec: ScaleSpec, scaleScrollY: number): number {
    const t = (scaleScrollY / pageHeight) * Math.PI * spec.k + spec.phase;
    return 1 + SCROLL_SCALE_AMPLITUDE * Math.sin(t);
  }

  /** カーソルからの距離に応じた不透明度の上乗せ */
  function cursorBoost(distance: number): number {
    if (!pointerActive || distance >= CURSOR_RADIUS_PX) return 0;
    return CURSOR_ALPHA_BOOST * (1 - distance / CURSOR_RADIUS_PX);
  }

  function setStroke(alpha: number): void {
    ctx.strokeStyle = `rgb(${theme.lineRgb} / ${clamp(alpha, 0, 1).toFixed(4)})`;
  }

  /** margin を含めた矩形が画面 [0, height] と重ならないか */
  function isOffscreenY(y: number, margin: number): boolean {
    return y + margin < 0 || y - margin > height;
  }

  function drawCircles(timeSec: number, alphaScale: number, scaleScrollY: number): void {
    scene.circles.forEach((spec, i) => {
      const [dx, dy] = driftOffset(spec.drift, timeSec);
      const scale = scrollScale(spec.scale, scaleScrollY);
      const radius = spec.radius * minSide * scale;
      const x = spec.baseX * width + dx;
      const y = wrapY(circleBaseY[i] + dy - scrollY * spec.parallax, circleMargin(spec));
      // wrapY の折り返し margin（overscan）ではなく現在の実サイズで画面外判定する
      if (isOffscreenY(y, radius)) return;
      debugCounts.circles += 1;

      const boost = cursorBoost(Math.abs(Math.hypot(pointerX - x, pointerY - y) - radius));
      setStroke(spec.alpha * alphaScale + boost);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, TAU);
      ctx.stroke();
    });
  }

  function drawArcs(timeSec: number, alphaScale: number, scaleScrollY: number): void {
    scene.arcs.forEach((spec, index) => {
      const [dx, dy] = driftOffset(spec.drift, timeSec);
      const scale = scrollScale(spec.scale, scaleScrollY);
      const x = spec.baseX * width + dx;
      const y = wrapY(arcBaseY[index] + dy - scrollY * spec.parallax, arcMargin(spec));
      const outerRadius = spec.radii[spec.radii.length - 1] * minSide * scale;
      if (isOffscreenY(y, outerRadius)) return;
      debugCounts.arcs += 1;

      const pointerDistance = Math.hypot(pointerX - x, pointerY - y);
      let nearest = Number.POSITIVE_INFINITY;
      for (const ratio of spec.radii) {
        nearest = Math.min(nearest, Math.abs(pointerDistance - ratio * minSide * scale));
      }
      setStroke(spec.alpha * alphaScale + cursorBoost(nearest));

      const spin = arcSpins[index];
      for (const ratio of spec.radii) {
        ctx.beginPath();
        ctx.arc(x, y, ratio * minSide * scale, spec.startAngle + spin, spec.startAngle + spin + spec.sweep);
        ctx.stroke();
      }
    });
  }

  function drawLines(timeSec: number, alphaScale: number): void {
    const half = (LINE_LENGTH_RATIO * width) / 2;
    scene.lines.forEach((spec, i) => {
      const swing =
        Math.sin((timeSec / spec.swingPeriodSec + spec.swingPhase) * TAU) * LINE_SWING_DEG * DEG;
      const angle = spec.angle + swing;
      const ux = Math.cos(angle);
      const uy = Math.sin(angle);
      const margin = Math.abs(uy) * half;
      const x = spec.baseX * width;
      const y = wrapY(lineBaseY[i] - scrollY * spec.parallax, margin);
      if (isOffscreenY(y, margin)) return;
      debugCounts.lines += 1;

      // 点と直線の距離。(ux, uy) は単位ベクトルなので外積の絶対値がそのまま距離になる
      const distance = Math.abs((pointerX - x) * uy - (pointerY - y) * ux);
      setStroke(spec.alpha * alphaScale + cursorBoost(distance));
      ctx.beginPath();
      ctx.moveTo(x - ux * half, y - uy * half);
      ctx.lineTo(x + ux * half, y + uy * half);
      ctx.stroke();
    });
  }

  function drawCrosses(alphaScale: number): void {
    scene.crosses.forEach((spec, i) => {
      const x = spec.baseX * width;
      const y = wrapY(crossBaseY[i] - scrollY * spec.parallax, CROSS_ARM_PX);
      if (isOffscreenY(y, CROSS_ARM_PX)) return;
      debugCounts.crosses += 1;

      const boost = cursorBoost(Math.hypot(pointerX - x, pointerY - y));
      setStroke(spec.alpha * alphaScale + boost);
      ctx.beginPath();
      ctx.moveTo(x - CROSS_ARM_PX, y);
      ctx.lineTo(x + CROSS_ARM_PX, y);
      ctx.moveTo(x, y - CROSS_ARM_PX);
      ctx.lineTo(x, y + CROSS_ARM_PX);
      ctx.stroke();
    });
  }

  function step(now: number): void {
    scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    const dt = lastFrameTime === 0 ? 0 : clamp(now - lastFrameTime, 0, MAX_FRAME_DT_MS);
    lastFrameTime = now;

    const instantEnergy = clamp(Math.abs(scrollDelta) / ENERGY_SCROLL_PX, 0, 1);
    const tau = instantEnergy > energy ? ENERGY_ATTACK_TAU_MS : ENERGY_DECAY_TAU_MS;
    const smoothing = dt <= 0 ? 0 : 1 - Math.exp(-dt / tau);
    energy = clamp(energy + (instantEnergy - energy) * smoothing, 0, 1);

    framePreset = currentPreset(now);

    const spinScale = framePreset.rotationSpeed * lerp(1, ENERGY_SPIN_MAX, energy);
    scene.arcs.forEach((spec, index) => {
      const delta = (dt / 1000 / spec.spinPeriodSec) * TAU * spinScale * spec.spinDir;
      arcSpins[index] = (arcSpins[index] + delta) % TAU;
    });
  }

  function draw(now: number): void {
    const motionEnabled = !reducedMotion.matches;
    const preset = motionEnabled ? framePreset : NEUTRAL_PRESET;
    const timeSec = motionEnabled ? now / 1000 : 0;
    // reduced-motion では拡縮も scrollY=0 相当に固定する
    const scaleScrollY = motionEnabled ? scrollY : 0;
    const alphaScale = preset.lineAlpha * (motionEnabled ? lerp(1, ENERGY_ALPHA_MAX, energy) : 1);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'butt';
    debugCounts.circles = 0;
    debugCounts.arcs = 0;
    debugCounts.lines = 0;
    debugCounts.crosses = 0;
    drawCircles(timeSec, alphaScale, scaleScrollY);
    drawArcs(timeSec, alphaScale, scaleScrollY);
    drawLines(timeSec, alphaScale);
    drawCrosses(alphaScale);

    if (import.meta.env.DEV) {
      window.__geoDebug = { visible: { ...debugCounts } };
    }

    if (grainPattern === null || theme.grainAlpha <= 0.001) return;
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = theme.grainAlpha;
    ctx.fillStyle = grainPattern;
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  function loop(timestamp: number): void {
    step(timestamp);
    draw(timestamp);
    frame = window.requestAnimationFrame(loop);
  }

  function stop(): void {
    if (frame !== 0) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
  }

  function start(): void {
    if (frame !== 0 || reducedMotion.matches) return;
    lastFrameTime = 0;
    frame = window.requestAnimationFrame(loop);
  }

  function drawStill(): void {
    scrollY = window.scrollY;
    draw(performance.now());
  }

  function onResize(): void {
    resize();
    if (reducedMotion.matches) drawStill();
  }

  function onPointerMove(event: PointerEvent): void {
    pointerX = event.clientX;
    pointerY = event.clientY;
    pointerActive = true;
  }

  function onPointerLeave(): void {
    pointerActive = false;
  }

  function onVisibilityChange(): void {
    if (document.hidden) stop();
    else start();
  }

  function onThemeChange(): void {
    theme = readTheme();
    if (reducedMotion.matches) drawStill();
  }

  const themeObserver = new MutationObserver(onThemeChange);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  let sectionObserver: IntersectionObserver | null = null;

  resize();
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVisibilityChange);

  if (reducedMotion.matches) {
    drawStill();
  } else {
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    sectionObserver = setupSectionObserver();
    start();
  }

  return () => {
    stop();
    themeObserver.disconnect();
    sectionObserver?.disconnect();
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerleave', onPointerLeave);
  };
}
