'use client';

import Image from 'next/image';
import React from 'react';

type EventCardProps = {
  id?: number | string;
  dateTitle?: string; 
  title?: string;
  location?: string;
  time?: string;
  price?: string;
  excerpt?: string;
  image?: any;
  link?: string; 
};

export default function EventCard({
  dateTitle,
  title,
  location,
  time,
  price,
  excerpt,
  image,
  link,
}: EventCardProps) {
  const handleClick = () => {
    if (link) return window.open(link, '_blank');
  };

  return (
    <article className="event-item">
      {image ? (
        <Image src={image} alt={title || dateTitle || 'évènement'} className="event-thumb" />
      ) : (
        <div className="event-thumb" style={{background:'#eee'}} />
      )}

      <div className="event-caption">
        <h3>{title || dateTitle}</h3>
        {dateTitle && title && <p className="event-subtitle">{dateTitle}</p>}
        {excerpt && <p>{excerpt}</p>}
        <div style={{marginTop:8}}>
          {location && <span style={{marginRight:12}}>📍 {location}</span>}
          {time && <span style={{marginRight:12}}>🕒 {time}</span>}
          {price && <span>€ {price}</span>}
        </div>
      </div>

      <div className="event-actions">
        <button className="Gold" onClick={handleClick}>
          {link ? 'Voir l\'album' : 'Plus d\'infos'}
        </button>
      </div>
    </article>
  );
}
