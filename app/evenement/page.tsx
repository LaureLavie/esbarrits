'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import '../../styles/components/evenement.css';
import sample1 from '../../public/images/sample1.jpg';
import sample2 from '../../public/images/sample2.jpg';
import sample3 from '../../public/images/sample3.jpg';

export default function EventPage() {
  const items = [
    { id: 1, title: 'Portes Ouvertes du Jurançon - 2025', excerpt: 'Esbarrits aux Portes ouvertes décembre 2025', img: sample1, link: 'https://photos.app.goo.gl/dCQxYKieb6aZ9QN2A' },
    { id: 2, title: 'Soirée Chataîgnes & Bourret - 2023', excerpt: 'Retour en images sur notre animation', img: sample2, link: 'https://photos.app.goo.gl/MJZomYkwfWzW4ndDA' },
    { id: 3, title: 'Festival des Vallées - 2023', excerpt: 'Retour en images sur notre prestation à Oloron', img: sample3, link: 'https://photos.app.goo.gl/DgKc7xEzp9xUfX2T8' },
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
            Retrouvez nos albums photos et reportages. Cliquez sur une vignette pour ouvrir l'album.
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