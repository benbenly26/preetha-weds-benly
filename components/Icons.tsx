import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M7.5 13h.01M12 13h.01M16.5 13h.01M7.5 17h.01M12 17h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function HeartsIcon(props: IconProps) {
  const heart =
    'M12 20s-7-4.4-8.6-8.8C2.2 7.9 4.2 5 7.3 5c1.9 0 3.4 1 4.7 2.8C13.3 6 14.8 5 16.7 5c3.1 0 5.1 2.9 3.9 6.2C19 15.6 12 20 12 20z';
  return (
    <svg {...base} viewBox="0 0 40 24" strokeWidth={1.2} {...props}>
      <path d={heart} transform="translate(-1 -1)" />
      <path d={heart} transform="translate(15 2) scale(.9)" />
    </svg>
  );
}

export function RingsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="14.5" r="5.5" />
      <circle cx="15" cy="14.5" r="5.5" />
      <path d="M9 9 6.8 6.4l1.1-1.9h2.2l1.1 1.9z" />
    </svg>
  );
}

export function GlassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 3h6l-.5 4.5a2.5 2.5 0 0 1-5 0zM7 10v7M4.5 17h5" />
      <path d="M14 3h6l-.5 4.5a2.5 2.5 0 0 1-5 0zM17 10v7M14.5 17h5" />
      <path d="M12 1.5v1.5M10.5 21h3" />
    </svg>
  );
}

export function FeastIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18M4.5 18a7.5 7.5 0 0 1 15 0M12 10.5V8.5M10.5 8.5h3M2.5 21h19" />
    </svg>
  );
}

export function ChurchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v5M10 4h4M5 21v-9l7-5 7 5v9M3 21h18M10 21v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

export function HallIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 7.5v2h16v-2zM6 9.5V18M10 9.5V18M14 9.5V18M18 9.5V18M3.5 18h17M3 21h18" />
    </svg>
  );
}

export function NavIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11 21 3l-8 18-2-8z" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6v3.2a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3 5.6a2 2 0 0 1 2-2.1z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
