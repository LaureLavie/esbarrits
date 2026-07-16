import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/components/agendacard.css';

type AgendaCardProps = {
  date: string;
  location: string;
  time: string;
  price: string;
  description: string;
  image: any;
};

export default function AgendaCard({
  date,
  location,
  time,
  price,
  description,
  image,
}: AgendaCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <div className="agenda-card" onClick={handlePopupOpen}>
      <div className="agenda-card-media">
        <Image src={image} alt={description} className="agenda-card-image" />
        <div className="agenda-card-date">
         {date}
        </div>
      </div>

      <div className="agenda-card-body">
        <div className="agenda-card-details">
          <p className="agenda-card-location">{location}
          </p>
          <p className="agenda-card-time">à {time}</p>
        </div>

        <button className="agenda-card-button" onClick={handlePopupOpen}>
          Plus d&apos;infos
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={handlePopupClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handlePopupClose}>×</button>
            <h3>{date}</h3>
            <p><strong>Lieu :</strong> {location}</p>
            <p><strong>Heure :</strong> {time}</p>
            <p><strong>Prix :</strong> {price}</p>
            <p><strong>Description :</strong> {description}</p>
          </div>
        </div>
      )}
    </div>
  );
}