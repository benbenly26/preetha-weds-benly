# Preetha weds Benly

Wedding invitation website — Monday, 16 November 2026, St. Augustine’s Church, Kulasekharam.

Built with Next.js (App Router), React and plain CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

It deploys to Vercel as-is (import the repo, no settings needed).

## Editing details

All names, dates, venues, relatives and phone numbers are in [`lib/wedding.ts`](lib/wedding.ts).

### Map pins

Each venue in `VENUES` is found on Google Maps by its `mapQuery`. For an exact pin, either:

- set `coordinates: { lat: <latitude>, lng: <longitude> }` (right-click the spot in Google Maps to copy them), or
- set `embedUrl` to the `src` from Google Maps → Share → **Embed a map**.

## Where things live

| Path | What |
| --- | --- |
| `app/page.tsx` | All page sections |
| `app/globals.css` | Colours, fonts, layout and animations |
| `components/Countdown.tsx` | Live timer to 9:45 AM IST, 16 Nov 2026 |
| `components/VenueMap.tsx` | Auditorium / Church map tabs |
| `components/Decor.tsx` | Gold corners, dividers, mandala, petals, sparkles |
| `app/invite.ics/route.ts` | “Apple / Outlook” calendar download |
