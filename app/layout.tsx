import type { Metadata, Viewport } from 'next';
import { Cinzel, Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import './globals.css';

const script = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const display = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const description =
  'You are warmly invited to the wedding of M.R. Preetha & C.M. Benly — Monday, 16 November 2026 at St. Augustine’s Church, Kulasekharam.';

export const metadata: Metadata = {
  title: 'Preetha weds Benly · 16 November 2026',
  description,
  openGraph: {
    title: 'Preetha weds Benly',
    description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBF5EA',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable} ${display.variable}`}>
      <body>
        {/* Without JavaScript, show everything instead of waiting for scroll reveals. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}.intro{display:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
