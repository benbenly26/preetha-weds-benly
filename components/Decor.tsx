import type { CSSProperties } from 'react';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Gold flourishes for the four corners of the nearest positioned parent. */
export function Corners() {
  return (
    <>
      {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
        <svg
          key={pos}
          className={`corner corner--${pos}`}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 97V26C3 13 13 3 26 3h71" strokeWidth="1.4" />
          <path d="M10 97V31c0-11.6 9.4-21 21-21h66" strokeWidth=".7" opacity=".55" />
          <path d="M22 22c8-7 20-4 20 5 0 6-8 8-11 3-2-4 2-7 5-5" strokeWidth="1.1" />
          <path d="M42 27c8-6 18-5 24 1-8 5-17 5-24-1z" fill="currentColor" fillOpacity=".3" strokeWidth=".8" />
          <path d="M27 42c-6 8-5 18 1 24 5-8 5-17-1-24z" fill="currentColor" fillOpacity=".3" strokeWidth=".8" />
          <circle cx="74" cy="28" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="28" cy="74" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="84" cy="22" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="22" cy="84" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      ))}
    </>
  );
}

/** Divider that draws itself once its section is revealed. */
export function Ornament() {
  return (
    <svg
      className="ornament"
      viewBox="0 0 240 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path className="draw" pathLength={1} d="M84 12H4" />
      <path className="draw" pathLength={1} d="M156 12h80" />
      <path
        className="draw"
        pathLength={1}
        strokeWidth="1.2"
        d="M120 12c-6-9-18-9-22 0 4 9 16 9 22 0 6-9 18-9 22 0-4 9-16 9-22 0z"
      />
      <path className="pop" d="M120 8.5 123.5 12 120 15.5 116.5 12z" fill="currentColor" stroke="none" />
      <circle className="pop" cx="90" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle className="pop" cx="150" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="section-head" data-reveal="up">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="script section-title">{title}</h2>
      <Ornament />
    </header>
  );
}

const OUTER_PETALS = Array.from({ length: 24 }, (_, i) => i * 15);
const INNER_PETALS = Array.from({ length: 12 }, (_, i) => i * 30 + 15);
const CORE_PETALS = Array.from({ length: 16 }, (_, i) => i * 22.5);

/** Slowly turning line mandala behind the hero names. */
export function Mandala() {
  return (
    <svg className="hero-mandala" viewBox="-200 -200 400 400" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth=".8">
        <circle r="192" />
        <circle r="184" strokeDasharray="2 5" />
        <circle r="120" />
        <circle r="60" />
        <circle r="18" />
        {OUTER_PETALS.map((a) => (
          <path key={`o${a}`} transform={`rotate(${a})`} d="M0-122c18-24 18-44 0-58-18 14-18 34 0 58z" />
        ))}
        {OUTER_PETALS.map((a) => (
          <circle key={`d${a}`} transform={`rotate(${a + 7.5})`} cx="0" cy="-170" r="2.4" fill="currentColor" />
        ))}
        {INNER_PETALS.map((a) => (
          <path key={`i${a}`} transform={`rotate(${a})`} d="M0-62c26-20 26-44 0-56-26 12-26 36 0 56z" />
        ))}
        {CORE_PETALS.map((a) => (
          <path key={`c${a}`} transform={`rotate(${a})`} d="M0-20q12-19 0-38-12 19 0 38z" />
        ))}
      </g>
    </svg>
  );
}

const PETALS = [
  { x: 4, s: 14, dur: 15, delay: -2, drift: 60 },
  { x: 11, s: 10, dur: 12, delay: -9, drift: -40 },
  { x: 19, s: 16, dur: 17, delay: -5, drift: 80 },
  { x: 27, s: 9, dur: 13, delay: -12, drift: 30 },
  { x: 35, s: 13, dur: 16, delay: -1, drift: -60 },
  { x: 44, s: 11, dur: 14, delay: -7, drift: 50 },
  { x: 52, s: 15, dur: 18, delay: -14, drift: -30 },
  { x: 60, s: 10, dur: 12, delay: -4, drift: 70 },
  { x: 68, s: 14, dur: 16, delay: -10, drift: -50 },
  { x: 76, s: 9, dur: 13, delay: -3, drift: 40 },
  { x: 84, s: 16, dur: 17, delay: -8, drift: -70 },
  { x: 92, s: 11, dur: 14, delay: -13, drift: 30 },
  { x: 97, s: 12, dur: 15, delay: -6, drift: -40 },
  { x: 48, s: 8, dur: 11, delay: -15, drift: 20 },
];

/** Soft golden petals drifting down the hero. */
export function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={
            {
              '--x': `${p.x}%`,
              '--s': `${p.s}px`,
              '--dur': `${p.dur}s`,
              '--delay': `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as Vars
          }
        />
      ))}
    </div>
  );
}

const SPARKLES = [
  { x: 6, y: 18, s: 14, dur: 3.2, delay: 0 },
  { x: 14, y: 72, s: 10, dur: 4, delay: 1.2 },
  { x: 22, y: 40, s: 8, dur: 3.6, delay: 2.1 },
  { x: 31, y: 88, s: 12, dur: 4.4, delay: 0.6 },
  { x: 40, y: 12, s: 9, dur: 3.4, delay: 1.8 },
  { x: 58, y: 8, s: 11, dur: 4.2, delay: 0.3 },
  { x: 66, y: 82, s: 9, dur: 3.8, delay: 2.4 },
  { x: 74, y: 30, s: 13, dur: 4.6, delay: 1 },
  { x: 83, y: 64, s: 8, dur: 3.3, delay: 1.6 },
  { x: 90, y: 16, s: 12, dur: 4.1, delay: 2.8 },
  { x: 95, y: 50, s: 10, dur: 3.7, delay: 0.9 },
  { x: 50, y: 94, s: 8, dur: 3.9, delay: 2.2 },
];

/** Twinkling four-point stars scattered across a section. */
export function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {SPARKLES.map((p, i) => (
        <svg
          key={i}
          className="sparkle"
          viewBox="0 0 24 24"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              '--s': `${p.s}px`,
              '--dur': `${p.dur}s`,
              '--delay': `${p.delay}s`,
            } as Vars
          }
        >
          <path fill="currentColor" d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
        </svg>
      ))}
    </div>
  );
}

export function Monogram() {
  return (
    <span className="monogram" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="47" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="41" strokeWidth=".8" strokeDasharray="1 3" />
      </svg>
      <span className="monogram-text script">
        P<span>&amp;</span>B
      </span>
    </span>
  );
}
