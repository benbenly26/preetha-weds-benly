import { EVENTS, VENUES } from '@/lib/wedding';

export const dynamic = 'force-static';

const escape = (text: string) => text.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

/** Calendar file with the reception and the wedding, for Apple Calendar / Outlook. */
export function GET() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Preetha weds Benly//Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  for (const e of EVENTS) {
    if (!e.calendar) continue;
    const venue = VENUES[e.venue];
    lines.push(
      'BEGIN:VEVENT',
      `UID:${e.id}-2026@preetha-weds-benly`,
      'DTSTAMP:20261018T000000Z',
      `DTSTART:${e.calendar.start}`,
      `DTEND:${e.calendar.end}`,
      `SUMMARY:${escape(`${e.title} · Preetha & Benly`)}`,
      `LOCATION:${escape(`${venue.name}, ${venue.address}`)}`,
      `DESCRIPTION:${escape('Wedding of M.R. Preetha M.Sc. & C.M. Benly B.E.')}`,
      'END:VEVENT',
    );
  }

  lines.push('END:VCALENDAR');

  return new Response(lines.join('\r\n'), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="preetha-weds-benly.ics"',
    },
  });
}
