'use client';

import Image from 'next/image';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AgendaCard from '@/components/AgendaCard';
import hero_group from '../public/images/hero_group.png';
import choraleallemande from '../public/images/choraleallemande.jpg';
import '../styles/components/home.css';
import '../styles/components/evencard.css';
import groupe from '../public/images/groupe.jpg';

export default function Page() {

  const sampleEvent = [
    { id: 1, date: 'Du 11 au 18 juin 2026', location: 'Allemagne', time: 'Toute la semaine', price: 'Libre participation', description: 'Animation & Concert en Allemagne', image: choraleallemande, link: 'https://photos.app.goo.gl/dCQxYKieb6aZ9QN2A' },
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
          <button className='Gold' onClick={() => window.location.href = '/contact'}>Contactez-Nous</button>
        </div>

        <header className="home-header">
          <h1>Prochains évènements</h1>
          <p>Parce que la musique ne vit que si elle est partagée,</p>
          <p>les Esbarrits adorent quitter les répétitions pour venir à votre rencontre !</p>
          <p className='textBold'>Bloquez vos agendas : </p>
          
          <div>
            {sampleEvent.map(evt => (
              <AgendaCard
                key={evt.id}
                date={evt.date}
                location={evt.location}
                time={evt.time}
                price={evt.price}
                description={evt.description}
                image={evt.image}
                link={evt.link}
              />
            ))}
          </div>
        </header>
        <section className="home-text">
          <h2>Notre répertoire : Entre tradition et création</h2>
          <p>Le répertoire des Esbarrits n'est pas seulement une liste de chants gascons, béarnais, espagnols ou autres variétés, mais c'est une histoire de partage.</p>
          <p>Nos chants et nos musiques sont le reflet de ce qui nous fait vibrer : un mélange savoureux entre tradition béarnaise et esprit de fête.</p>
          
          <button className='Gold' onClick={() => window.location.href = '/repertoire'}>Ecoutez nos chansons</button>
          <h2>Plus de 50 ans de tradition</h2>
          <Image src={groupe} alt="Accueil" className="groupe" />
          <p>Fondé en 1970 à Cardesse, Los Esbarrits perpétuent avec passion la tradition du chant béarnais.</p>
          <p>Notre répertoire mêle chansons traditionnelles et créations originales, toutes interprétées en béarnais.</p>
          <p>Nous animons mariages, fêtes de village, marchés et événements culturels dans tout le Béarn et au-delà, portant fièrement notre identité pyrénéenne.</p>
        </section>

       
          <button className='Gold' onClick={() => window.location.href = '/histoire'}>Voici notre Histoire</button>
        
      </main>

      <Footer />
    </>
  );
};
