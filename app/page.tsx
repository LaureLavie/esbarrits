'use client';

import Image from 'next/image';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AgendaCard from '@/components/AgendaCard';
import hero_group from '../public/images/hero_group.webp';
import choraleallemande from '../public/images/choraleallemande.webp';
import groupe from '../public/images/groupe.webp';
import moulin_bouge from '../public/images/moulin_bouge.webp';
import domaine_bayard from '../public/images/domaine_bayard.webp';
import chalet from '../public/images/chalet.webp';
import roussanne from '../public/images/roussanne.webp';
import '../styles/components/home.css';
import '../styles/components/agendacard.css';

export default function Page() {

  const sampleEvent = [
    { id: 1, date: 'Samedi 14 Mars 2026', location: 'Au Moulin Bouge à Monein', time: '12h', price: 'Libre participation', description: 'Animation Repas', image: moulin_bouge },
    { id: 2, date: 'Du 11 au 18 juin 2026', location: 'Allemagne', time: 'Toute la semaine', price: 'Libre participation', description: 'Animation & Concert en Allemagne', image: choraleallemande },
    { id: 3, date: 'Samedi 01 Août 2026', location: 'Au Chalet à Salies de Béarn', time: '20h', price: 'Libre participation', description: 'Animation Repas', image: chalet },
    { id: 4, date: 'Lundi 07 Septembre 2026', location: 'Au Domaine Bayard à Monein', time: '12h', price: 'Libre participation', description: 'Animation Repas', image: domaine_bayard },
    { id: 5, date: 'Mercredi 09 Septembre 2026', location: 'Au Domaine Bayard à Monein', time: '12h', price: 'Libre participation', description: 'Animation Repas', image: domaine_bayard },
    { id: 6, date: 'Jeudi 19 Novembre 2026', location: 'EPHAD La Roussanne à Monein', time: '14h30', price: ' - ', description: 'Animation & Chant', image: roussanne },


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
          
            <div className="agenda-gallery">
            {sampleEvent.map(evt => (
              <AgendaCard
              key={evt.id}
              date={evt.date}
              location={evt.location}
              time={evt.time}
              price={evt.price}
              description={evt.description}
              image={evt.image}
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
