import { Fragment, type CSSProperties } from 'react';
import Countdown from '@/components/Countdown';
import Intro from '@/components/Intro';
import RevealObserver from '@/components/RevealObserver';
import VenueMap from '@/components/VenueMap';
import { Corners, Mandala, Monogram, Ornament, Petals, SectionHead, Sparkles } from '@/components/Decor';
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  FeastIcon,
  GlassIcon,
  HeartsIcon,
  NavIcon,
  PhoneIcon,
  PinIcon,
  RingsIcon,
} from '@/components/Icons';
import {
  CONTACTS,
  EVENTS,
  FAMILIES,
  HOSTS,
  LITTLE_ONES,
  RELATIVES,
  VENUES,
  directionsUrl,
  googleCalendarUrl,
} from '@/lib/wedding';

const EVENT_ICONS = { rings: RingsIcon, glass: GlassIcon, feast: FeastIcon };

/** Stagger for hero entrance animations. */
const step = (i: number) => ({ '--i': i }) as CSSProperties;
/** Delay for scroll reveals. */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const weddingEvent = EVENTS.find((e) => e.id === 'wedding')!;

/** Keeps each person's name on one line, e.g. "Mrs. A. Maria Vimala" never splits. */
function Names({ text }: { text: string }) {
  return text.split(' & ').map((person, i) => (
    <Fragment key={person}>
      {i > 0 && ' & '}
      <span className="nowrap">{person}</span>
    </Fragment>
  ));
}

export default function Home() {
  return (
    <>
      <Intro />
      <RevealObserver />

      <main>
        {/* ───────── Hero ───────── */}
        <section className="hero" aria-label="Preetha weds Benly">
          <div className="hero-frame" aria-hidden="true" />
          <Corners />
          <Mandala />
          <Petals />

          <div className="hero-inner">
            <p className="script hero-label enter" style={step(0)}>
              Wedding Invitation
            </p>
            <h1 className="hero-names">
              <span className="enter" style={step(1)}>
                <span className="hero-name shimmer">Preetha</span>
              </span>
              <span className="hero-amp enter" style={step(2)}>
                <i className="hero-amp__line" />
                <span className="script">&amp;</span>
                <i className="hero-amp__line" />
              </span>
              <span className="enter" style={step(3)}>
                <span className="hero-name shimmer">Benly</span>
              </span>
            </h1>
            <div className="enter" style={step(4)}>
              <Ornament />
            </div>
            <div className="hero-date enter" style={step(5)}>
              <span className="hero-date__main">16 · 11 · 2026</span>
              <span className="hero-date__meta">
                Monday <i>✦</i> 9:45 AM
              </span>
            </div>
            <p className="hero-venue enter" style={step(6)}>
              St. Augustine’s Church, Kulasekharam
            </p>
          </div>

          <a href="#invitation" className="scroll-cue enter" style={step(8)}>
            <span>Scroll</span>
            <ChevronDownIcon />
          </a>
        </section>

        {/* ───────── Invitation card ───────── */}
        <section className="section" id="invitation">
          <div className="container">
            <article className="invite-card" data-reveal="up">
              <Corners />
              <p className="eyebrow">Together with their families</p>
              <div className="invite-parents">
                <p>
                  <span className="nowrap">
                    Mr. <strong>A. Murugan</strong>
                  </span>{' '}
                  &amp;{' '}
                  <span className="nowrap">
                    Mrs. <strong>K.J. Rekha</strong>
                  </span>
                </p>
                <p className="invite-and">and</p>
                <p>
                  <span className="nowrap">
                    Mr. <strong>R. Crystal Jeya Kumar</strong>
                  </span>{' '}
                  &amp;{' '}
                  <span className="nowrap">
                    Mrs. <strong>A. Maria Vimala</strong>
                  </span>
                </p>
              </div>

              <p className="script invite-line">Cordially invite you all to the wedding ceremony of our children</p>

              <div className="couple">
                <p className="couple-name script">
                  <span className="nowrap">M.R. Preetha</span> <small>M.Sc.</small>
                </p>
                <HeartsIcon className="couple-hearts" />
                <p className="couple-name script">
                  <span className="nowrap">C.M. Benly</span> <small>B.E.</small>
                </p>
              </div>

              <div className="trio">
                <div className="trio-item">
                  <span className="trio-icon">
                    <CalendarIcon />
                  </span>
                  <strong className="trio-big">
                    16<sup>th</sup>
                  </strong>
                  <span>November 2026</span>
                  <span>Monday</span>
                </div>
                <div className="trio-item">
                  <span className="trio-icon">
                    <PinIcon />
                  </span>
                  <strong>St. Augustine’s Church,</strong>
                  <span>Convent Jn., Kulasekharam</span>
                </div>
                <div className="trio-item">
                  <span className="trio-icon">
                    <ClockIcon />
                  </span>
                  <span>Between</span>
                  <strong>9.45 to 10.30 a.m.</strong>
                </div>
              </div>

              <p className="script invite-follow">
                followed by other wedding rituals &amp; feast at <b>F.A.C. Auditorium</b>, Arasumoodu,
                Kulasekharam.
              </p>
              <p className="script reception-strip">
                Reception : 15-11-2026 · Sunday Evening 4.00 pm to 8.00 pm
              </p>
            </article>
          </div>
        </section>

        {/* ───────── Countdown ───────── */}
        <section className="section section--tint countdown-section" id="countdown">
          <Sparkles />
          <div className="container">
            <SectionHead eyebrow="Save the Date" title="Counting Down to Forever" />
            <div data-reveal="zoom" style={delay(150)}>
              <Countdown />
            </div>
            <p className="countdown-when" data-reveal="up" style={delay(250)}>
              Monday, 16 November 2026 · 9:45 AM (IST)
            </p>
            <div className="btn-row" data-reveal="up" style={delay(350)}>
              <a
                className="btn btn--solid"
                href={googleCalendarUrl(weddingEvent)!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarIcon />
                Google Calendar
              </a>
              <a className="btn" href="/invite.ics" download>
                <CalendarIcon />
                Apple / Outlook
              </a>
            </div>
          </div>
        </section>

        {/* ───────── Events ───────── */}
        <section className="section" id="events">
          <div className="container">
            <SectionHead eyebrow="Celebrations" title="Wedding Events" />
            <div className="events-grid">
              {EVENTS.map((e, i) => {
                const Icon = EVENT_ICONS[e.icon];
                const venue = VENUES[e.venue];
                const calendar = googleCalendarUrl(e);
                return (
                  <article className="event-card" key={e.id} data-reveal="up" style={delay(i * 140)}>
                    <span className="event-icon">
                      <Icon />
                    </span>
                    <p className="eyebrow">{e.day}</p>
                    <h3 className="script event-title">{e.title}</h3>
                    <p className="event-date">{e.date}</p>
                    <ul className="event-meta">
                      <li>
                        <ClockIcon />
                        <span>{e.time}</span>
                      </li>
                      <li>
                        <PinIcon />
                        <span>
                          <strong>{venue.name}</strong>
                          <br />
                          {venue.address}
                        </span>
                      </li>
                    </ul>
                    <div className="event-actions">
                      <a className="btn btn--sm" href={directionsUrl(venue)} target="_blank" rel="noopener noreferrer">
                        <NavIcon />
                        Directions
                      </a>
                      {calendar && (
                        <a className="btn btn--sm" href={calendar} target="_blank" rel="noopener noreferrer">
                          <CalendarIcon />
                          Save
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────── Map ───────── */}
        <section className="section section--tint" id="venue">
          <div className="container">
            <SectionHead eyebrow="The Venue" title="Find Your Way" />
            <div data-reveal="up" style={delay(150)}>
              <VenueMap />
            </div>
          </div>
        </section>

        {/* ───────── Families ───────── */}
        <section className="section" id="families">
          <div className="container">
            <SectionHead eyebrow="Blessed by" title="Our Families" />
            <div className="families-grid">
              {FAMILIES.map((f, i) => (
                <article
                  className="family-card"
                  key={f.role}
                  data-reveal={i === 0 ? 'left' : 'right'}
                  style={delay(i * 150)}
                >
                  <Corners />
                  <p className="eyebrow">{f.role}</p>
                  <h3 className="script family-name">{f.firstName}</h3>
                  <p className="family-full">
                    {f.fullName} <small>{f.degree}</small>
                  </p>
                  <Ornament />
                  <p className="family-label">{f.relation}</p>
                  <p className="family-parents">
                    <Names text={f.parents} />
                  </p>
                  <p className="family-place">{f.place}</p>
                  <p className="family-label">{f.grandLabel}</p>
                  <ul className="family-grand">
                    {f.grandparents.map((g) => (
                      <li key={g}>
                        <Names text={g} />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Relatives ───────── */}
        <section className="section section--tint" id="dear-ones">
          <div className="container">
            <SectionHead eyebrow="Lovingly awaiting your presence" title="Our Dear Ones" />
            <ul className="dear-list">
              {RELATIVES.map((name, i) => (
                <li key={name} data-reveal="up" style={delay((i % 2) * 90 + Math.floor(i / 2) * 40)}>
                  <Names text={name} />
                </li>
              ))}
            </ul>
            <div className="little-ones" data-reveal="up">
              <p className="eyebrow">Our Little Ones</p>
              <p className="little-names">
                {LITTLE_ONES.map((name, i) => (
                  <span key={name}>
                    {i > 0 && <i>✦</i>}
                    {name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ───────── Footer ───────── */}
      <footer className="footer">
        <Sparkles />
        <div className="footer-inner" data-reveal="up">
          <Monogram />
          <p className="script footer-names shimmer shimmer--light">Preetha &amp; Benly</p>
          <p className="footer-date">16 · 11 · 2026</p>
          <Ornament />
          <p className="script footer-compliments">With best compliments from Relatives &amp; Friends</p>
          <p className="footer-hosts">
            <span className="footer-hosts__names">
              <Names text={HOSTS.names} />
            </span>
            <span className="footer-hosts__place">{HOSTS.place}</span>
          </p>
          <div className="footer-contacts">
            {CONTACTS.map((c) => (
              <a key={c.tel} href={`tel:${c.tel}`}>
                <PhoneIcon />
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-bottom">Made with love for Preetha &amp; Benly</p>
      </footer>
    </>
  );
}
