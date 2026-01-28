'use client';

import Image from 'next/image';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import EventCard from '@/components/EventCard';
import hero_group from '../public/images/hero_group.png';
import sample3 from '../public/images/sample3.jpg';
import '../styles/components/home.css';
import '../styles/components/evencard.css';

export default function Page() {

  const sampleEvent = [
    { id: 1, dateTitle: 'Samedi 02 Décembre 2024', location:'Lagor', time:'12h30-18h', price:'Libre participation', excerpt: 'Concert animé pour le Téléthon', image: sample3, link: 'https://photos.app.goo.gl/dCQxYKieb6aZ9QN2A' },
  ];

  const handleMore = () => {
        alert("Plus d'infos bientôt disponibles");
  };

  return(
    <>
      <Navbar />

      <main className="home-page">
        <div className="home-banner">
          <Image src={hero_group} alt="Accueil" className="hero-group" />
        </div>

        <header className="home-header">
          <h1>Prochains évènements</h1>
          <div className='eventcard'>
            {sampleEvent.map(evt => (
              <EventCard
                key={evt.id}                
                dateTitle={evt.dateTitle}
                location={evt.location}
                time={evt.time}
                price={evt.price}
                excerpt={evt.excerpt}
                image={evt.image}
                link={evt.link}
              />
            ))}
          </div>
        </header>
          <h2>Plus de 50 ans de tradition</h2>
       
        <section className="home-text">
          <p>Fondé en 1970 à Cardesse, Los Esbarrits perpétuent avec passion la tradition du chant béarnais.</p>
          <p>Notre répertoire mêle chansons traditionnelles et créations originales, toutes interprétées en béarnais.</p>
          <p>Nous animons mariages, fêtes de village, marchés et événements culturels dans tout le Béarn et au-delà, portant fièrement notre identité pyrénéenne.</p>
        </section>

       
          <button className='Gold' onClick={() => window.location.href = '/histoire'}>Notre Histoire</button>
        
      </main>

      <Footer />
    </>
  );
};
