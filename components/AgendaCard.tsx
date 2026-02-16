import React from 'react';
import Image from 'next/image';
import '../styles/components/agendacard.css';

type AgendaCardProps = {
  date: string;
  location: string;
  time: string;
  price: string;
  description: string;
  image: any;
  link?: string;
};

export default function AgendaCard({
  date,
  location,
  time,
  price,
  description,
  image,
  link,
}: AgendaCardProps) {
  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className="agenda-card" onClick={handleClick}>
      <div className="agenda-card-header">
        <h3>{date}</h3>
      </div>
      <div className="agenda-card-body">
        <Image src={image} alt={description} className="agenda-card-image" />
        <div className="agenda-card-details">
          <p><span>📍</span> {location}</p>         
          <p>{description}</p>
        </div>
      </div>
      <div className="agenda-card-footer">
        <button className="agenda-card-button">Plus d'infos</button>
      </div>
    </div>
  );
}
