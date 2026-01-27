'use client';

import Image from 'next/image';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import groupe_esbarrits from '../public/images/groupe_esbarrits.png';
import hero_group from '../public/images/hero_group.png';
import EventCard from '@/components/EventCard';
import '../styles/components/home.css';

export default function Page() {
  const sampleEvent = {
    dateTitle: 'Samedi 02 Décembre 2024',
    location: 'Lagor',
    time: '12h30-18h',
    price: 'Libre participation',
    excerpt: "Animations, musique et convivialité."
  };

  const handleMore = () => {
    // placeholder pour ouvrir une modal ou naviguer vers une page événement
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
          <EventCard
            dateTitle={sampleEvent.dateTitle}
            location={sampleEvent.location}
            time={sampleEvent.time}
            price={sampleEvent.price}
            excerpt={sampleEvent.excerpt}
            onMore={handleMore}
          />
          </div>

          <h2>Plus de 50 ans de tradition</h2>
        </header>
       
          <Image src={groupe_esbarrits} alt="Groupe Esbarrits" className="groupe_esbarrits" />
       
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
