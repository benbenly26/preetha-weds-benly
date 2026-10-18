'use client';

import { useState } from 'react';
import {
  EVENTS,
  VENUES,
  directionsUrl,
  mapEmbedUrl,
  mapsSearchUrl,
  type VenueId,
} from '@/lib/wedding';
import { ChurchIcon, ExternalIcon, HallIcon, NavIcon, PinIcon } from './Icons';

const ORDER: VenueId[] = ['auditorium', 'church'];
const TAB_ICONS = { auditorium: HallIcon, church: ChurchIcon };

export default function VenueMap() {
  const [active, setActive] = useState<VenueId>('auditorium');
  const venue = VENUES[active];
  const events = EVENTS.filter((e) => e.venue === active);

  return (
    <div className="venue">
      <div className="map-tabs" role="tablist" aria-label="Choose a venue">
        {ORDER.map((id) => {
          const Icon = TAB_ICONS[id];
          return (
            <button
              key={id}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={active === id}
              aria-controls="venue-panel"
              className="map-tab"
              onClick={() => setActive(id)}
            >
              <Icon />
              {VENUES[id].tab}
            </button>
          );
        })}
      </div>

      <div className="venue-layout" id="venue-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <div className="map-frame">
          <span className="map-pin" aria-hidden="true">
            <PinIcon />
          </span>
          <div className="map-canvas">
            {/* Both maps stay mounted so switching tabs cross-fades instead of reloading. */}
            {ORDER.map((id) => (
              <iframe
                key={id}
                title={`Map showing ${VENUES[id].name}`}
                src={mapEmbedUrl(VENUES[id])}
                className={id === active ? 'is-active' : undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                tabIndex={id === active ? 0 : -1}
                aria-hidden={id !== active}
              />
            ))}
          </div>
        </div>

        <div className="venue-card" key={active}>
          <p className="eyebrow">{events.map((e) => e.title).join(' · ')}</p>
          <h3 className="script venue-name">{venue.name}</h3>
          {venue.subtitle && <p className="venue-sub">{venue.subtitle}</p>}
          <p className="venue-address">
            <PinIcon />
            {venue.address}
          </p>
          <ul className="venue-events">
            {events.map((e) => (
              <li key={e.id}>
                <strong>{e.title}</strong>
                <span>
                  {e.day}, {e.date}
                </span>
                <span>{e.time}</span>
              </li>
            ))}
          </ul>
          <div className="venue-actions">
            <a className="btn btn--solid" href={directionsUrl(venue)} target="_blank" rel="noopener noreferrer">
              <NavIcon />
              Get Directions
            </a>
            <a className="btn" href={mapsSearchUrl(venue)} target="_blank" rel="noopener noreferrer">
              <ExternalIcon />
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
