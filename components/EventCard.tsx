'use client';

import React from 'react';

type EventCardProps = {
  dateTitle: string;
  location?: string;
  time?: string;
  price?: string;
  excerpt?: string;
  onMore?: () => void;
};

export default function EventCard({ dateTitle, location, time, price, excerpt, onMore }: EventCardProps) {
  return (
    <article className="event-card">
      <header className="event-card-header">
        <div className="event-date">{dateTitle}</div>
      </header>

      <div className="event-card-body">
        {location && <p className="event-line"><span className="event-icon">📍</span>{location}</p>}
        {time && <p className="event-line"><span className="event-icon">🕒</span>{time}</p>}
        {price && <p className="event-line"><span className="event-icon">€</span>{price}</p>}
        {excerpt && <p className="event-excerpt">{excerpt}</p>}
      </div>

      <footer className="event-card-footer">
        <button className="event-more" onClick={onMore}>Plus d'infos</button>
      </footer>
    </article>
  );
}
