'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import '../../styles/components/evenement.css';
import sample1 from '../../public/images/sample1.jpg';
import sample2 from '../../public/images/sample2.jpg';

export default function EventPage() {
  const items = [
    { id: 1, title: 'Portes Ouvertes du Jurançon - 2025', excerpt: 'Esbarrits aux Portes ouvertes décembre 2025', img: sample1, link: 'https://photos.app.goo.gl/dCQxYKieb6aZ9QN2A' },
    { id: 2, title: 'Soirée Chataîgnes & Bourret - 2023', excerpt: 'Retour en images sur notre animation', img: sample2, link: 'https://photos.app.goo.gl/MJZomYkwfWzW4ndDA' },
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
            <article key={item.id} className="event-item">
              <Image src={item.img} alt={item.title} className="event-thumb" />
              <div className="event-caption">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
              <div className="event-actions">
                <button className="Gold" onClick={() => window.open(item.link, '_blank')}>Voir l'album</button>
              </div>
            </article>
          ))}
        </section>

      </main>
      <Footer />
    </>
  )
}