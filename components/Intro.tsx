'use client';

import { useState, type AnimationEvent } from 'react';

/** Short monogram splash that fades away on its own (tap to skip). */
export default function Intro() {
  const [gone, setGone] = useState(false);
  if (gone) return null;

  const onEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setGone(true);
  };

  return (
    <div className="intro" onClick={() => setGone(true)} onAnimationEnd={onEnd} aria-hidden="true">
      <div className="intro-mark">
        <svg className="intro-ring" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="57" pathLength={1} />
          <circle cx="60" cy="60" r="51" pathLength={1} />
        </svg>
        <span className="intro-letters script">
          P<span>&amp;</span>B
        </span>
      </div>
      <p className="intro-sub">Preetha weds Benly</p>
    </div>
  );
}
