'use client';

import { useEffect, useState } from 'react';
import { WEDDING_END, WEDDING_START } from '@/lib/wedding';

const START = new Date(WEDDING_START).getTime();
const END = new Date(WEDDING_END).getTime();

const UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
] as const;

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function Countdown() {
  // Starts empty so the server render and first client render match.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now !== null && now >= START) {
    const married = now >= END;
    return (
      <div className="countdown-done">
        <p className="script">{married ? 'Just Married!' : 'The ceremony has begun'}</p>
        <p>{married ? 'Thank you for your love and blessings.' : 'Join us at St. Augustine’s Church.'}</p>
      </div>
    );
  }

  const parts = now === null ? null : split(START - now);

  return (
    <div className="countdown" role="timer" aria-label="Time left until the wedding">
      {UNITS.map(([key, label]) => {
        const value = parts ? String(parts[key]).padStart(2, '0') : '--';
        return (
          <div className="cd-unit" key={key}>
            <span className="cd-num" key={value}>
              {value}
            </span>
            <span className="cd-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
