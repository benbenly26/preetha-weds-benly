/**
 * Every detail shown on the invitation lives here, so names, times and
 * venues can be corrected in one place.
 */

export const WEDDING_START = '2026-11-16T09:45:00+05:30';
export const WEDDING_END = '2026-11-16T10:30:00+05:30';

export type VenueId = 'church' | 'auditorium';

export interface Venue {
  id: VenueId;
  /** Short label used on the map tabs. */
  tab: string;
  name: string;
  subtitle?: string;
  address: string;
  /** What Google Maps searches for when no exact location is set below. */
  mapQuery: string;
  /** Optional exact pin — when set, it is used instead of `mapQuery`. */
  coordinates?: { lat: number; lng: number };
  /**
   * Optional: paste the `src` from Google Maps → Share → "Embed a map".
   * When set, the map shows exactly that view.
   */
  embedUrl?: string;
}

export const VENUES: Record<VenueId, Venue> = {
  auditorium: {
    id: 'auditorium',
    tab: 'Auditorium',
    name: 'F.A.C. Auditorium',
    subtitle: 'Fine Arts Center',
    address: 'Arasumoodu, Kulasekharam',
    mapQuery: 'F.A.C Auditorium, Arasumoodu, Kulasekharam, Tamil Nadu',
  },
  church: {
    id: 'church',
    tab: 'Church',
    name: 'St. Augustine’s Church',
    subtitle: 'Convent Junction',
    address: 'Convent Jn., Kulasekharam',
    mapQuery: "St. Augustine's Church, Kulasekharam, Tamil Nadu",
  },
};

export interface WeddingEvent {
  id: string;
  title: string;
  icon: 'rings' | 'glass' | 'feast';
  day: string;
  date: string;
  time: string;
  venue: VenueId;
  /** UTC start/end for calendar links (IST is UTC+5:30). */
  calendar?: { start: string; end: string };
}

export const EVENTS: WeddingEvent[] = [
  {
    id: 'reception',
    title: 'Reception',
    icon: 'glass',
    day: 'Sunday',
    date: '15 November 2026',
    time: '4:00 PM – 8:00 PM',
    venue: 'auditorium',
    calendar: { start: '20261115T103000Z', end: '20261115T143000Z' },
  },
  {
    id: 'wedding',
    title: 'Holy Matrimony',
    icon: 'rings',
    day: 'Monday',
    date: '16 November 2026',
    time: '9:45 AM – 10:30 AM',
    venue: 'church',
    calendar: { start: '20261116T041500Z', end: '20261116T050000Z' },
  },
  {
    id: 'feast',
    title: 'Wedding Rituals & Feast',
    icon: 'feast',
    day: 'Monday',
    date: '16 November 2026',
    time: 'Following the ceremony',
    venue: 'auditorium',
  },
];

export const FAMILIES = [
  {
    role: 'The Bride',
    firstName: 'Preetha',
    fullName: 'M.R. Preetha',
    degree: 'M.Sc.',
    relation: 'Younger daughter of',
    parents: 'Mr. A. Murugan & Mrs. K.J. Rekha',
    place: 'Kottaikkala, Ponmanai',
    grandLabel: 'Granddaughter of',
    grandparents: [
      'Late S. Arumugam Asari & Mrs. C. Rajammal',
      'Late K. Krishnan Asari & Mrs. K. Jayanthi',
    ],
  },
  {
    role: 'The Groom',
    firstName: 'Benly',
    fullName: 'C.M. Benly',
    degree: 'B.E.',
    relation: 'Elder son of',
    parents: 'Mr. R. Crystal Jeya Kumar & Mrs. A. Maria Vimala',
    place: 'Arunankal, Konathuvilai',
    grandLabel: 'Grandson of',
    grandparents: [
      'Mr. P. Rasalaiyan & Mrs. G. Rajammal',
      'Mr. J. Arulappan & Late Mrs. P. Mariya Lourdu',
    ],
  },
];

export const RELATIVES = [
  'G. Rajkumar & M.R. Priyanka',
  'R. Ganesa Moorthy & G. Geetha Kumari',
  'K.J. Renuka & C. Raj',
  'K.J. Rajeshkumar & M.B. Jeyalakshmi',
  'E. Aruna & M. Isakki Asari',
  'E. Mahesh Muthu & M. Anitha',
  'E. Karpaga Meena & R. Rajan',
  'E. Sukanya & R. Vadivel',
  'R. Vignesh',
  'R. Vikash',
  'R. Aadhish Krishna',
  'R. Akshaya',
];

export const LITTLE_ONES = ['R.K. Nandhakishore', 'V.S. Mutheeswaran'];

export const HOSTS = {
  names: 'Mr. A. Murugan & Mrs. K.J. Rekha',
  place: 'Kottaikkala, Ponmanai P.O.',
};

export const CONTACTS = [
  { label: '+91 94429 75065', tel: '+919442975065' },
  { label: '+91 74181 85065', tel: '+917418185065' },
];

function mapTarget(v: Venue) {
  return v.coordinates ? `${v.coordinates.lat},${v.coordinates.lng}` : v.mapQuery;
}

export function mapEmbedUrl(v: Venue) {
  if (v.embedUrl) return v.embedUrl;
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapTarget(v))}&z=16&hl=en&output=embed`;
}

export function directionsUrl(v: Venue) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapTarget(v))}`;
}

export function mapsSearchUrl(v: Venue) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapTarget(v))}`;
}

export function googleCalendarUrl(e: WeddingEvent) {
  if (!e.calendar) return null;
  const v = VENUES[e.venue];
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${e.title} · Preetha & Benly`,
    dates: `${e.calendar.start}/${e.calendar.end}`,
    details: 'Wedding of M.R. Preetha M.Sc. & C.M. Benly B.E.',
    location: `${v.name}, ${v.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
