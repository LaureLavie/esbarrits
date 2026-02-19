'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import '../../styles/components/evenement.css';
import '../../styles/components/evencard.css';
import chais1 from '../../public/images/chais1.webp';
import bourret2 from '../../public/images/bourret2.webp';
import oloron3 from '../../public/images/oloron3.webp';
import bordeaux4 from '../../public/images/bordeaux4.webp';
import laruns5 from '../../public/images/laruns5.webp';
import esquiule6 from '../../public/images/esquiule6.webp';
import cardesse7 from '../../public/images/cardesse7.webp';
import asson8 from '../../public/images/asson8.webp';
import allemand9 from '../../public/images/allemand9.webp';

export default function EventPage() {
  const items = [
    { id: 1, title: 'Esbarrits à Bordeaux - Janvier 2026', excerpt: 'Quelques photos souvenirs de notre animation', img: bordeaux4, link: 'https://photos.app.goo.gl/vdbj8jKyRij7jDJF7' },
    { id: 2, title: 'Portes Ouvertes du Jurançon - Décembre 2025', excerpt: 'Esbarrits aux Portes ouvertes décembre 2025', img: chais1, link: 'https://photos.app.goo.gl/dCQxYKieb6aZ9QN2A' },
    { id: 3, title: 'Castanhas e Bouret - octobre 2025', excerpt: 'Quelques photos de notre animation', img: cardesse7, link: 'https://photos.app.goo.gl/s8KsRfmYMPRdP5uJ8' },
    { id: 4, title: 'Esbarrits à Laruns - Mai 2025', excerpt: 'Voici l\'album photo de notre concert à Laruns', img: laruns5, link: 'https://photos.app.goo.gl/WNSsA6L1XbrggeP97' },
    { id: 5, title: 'Esbarrits à Esquiule - Juin 2025', excerpt: 'Retour en images sur notre concert à Esquiule', img: esquiule6, link: 'https://photos.app.goo.gl/XRH97ZRizh4TLLWV7' },
    { id: 6, title: 'Esbarrits à Asson avec Esbagats et En Daban - novembre 2024', excerpt: 'Retour en images du concert à Asson', img: asson8, link: 'https://photos.app.goo.gl/y9qZABbdcTJ7SxSQ7' },
    { id: 7, title: 'Concert avec chorale allemande - aout 2024', excerpt: 'Quelques photos du concert avec une chorale allemande', img: allemand9, link: 'https://photos.app.goo.gl/BoqAn721vP6gEJD47' },
    { id: 8, title: 'Soirée Chataîgnes & Bourret - Novembre 2023', excerpt: 'Retour en images sur notre animation', img: bourret2, link: 'https://photos.app.goo.gl/MJZomYkwfWzW4ndDA' },
    { id: 9, title: 'Festival des Vallées - avril 2023', excerpt: 'Retour en images sur notre prestation à Oloron', img: oloron3, link: 'https://photos.app.goo.gl/DgKc7xEzp9xUfX2T8' },
  ];

  return (
    <>
      <Navbar />
      <main className="evenement-page">
        <header className="event-header">
          <h1>Nos évènements</h1>
          <h2>Tous nos évènements et sorties</h2>
        </header>

        <section className="event-text">
          <p>
            Retrouvez nos albums photos des évènements et sorties.
          </p>
        </section>

        <section className="event-gallery">
          {items.map(item => (
            <EventCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              image={item.img}
              link={item.link}
            />
          ))}
        </section>

      </main>
      <Footer />
    </>
  )
}