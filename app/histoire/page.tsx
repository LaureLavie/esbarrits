'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import frise_esbarrits from '../../public/images/frise_esbarrits.png';
import '../../styles/components/histoire.css';

export default function HistoirePage() {
  return (
    <>
      <Navbar />

      <main className="histoire-page">
        <header className="histoire-header">
          <h1>Notre Histoire</h1>
          <h2>Plus de 50 ans de passion pour le chant béarnais</h2>
        </header>

        <section className="histoire-text">
          <p>
            Fondé en 1970 à Cardesse, Los Esbarrits perpétuent avec passion la tradition du chant béarnais.
          </p>

          <p>
          Los Esbarrits de Cardesse, c'est avant tout une grande famille unie par l'amour du chant traditionnel béarnais. 

Depuis plus d'un demi-siècle, nous perpétuons avec fierté et authenticité les mélodies et les textes qui ont façonné l'identité de notre belle région.
          </p>
        </section>

        <section className="histoire-frise">
          <Image src={frise_esbarrits} alt="Frise Esbarrits" className="frise-image" />
        </section>

        <section className="histoire-events">
        <h2> Nos sorties, nos évènements... </h2>
        <button className='Gold' onClick={() => window.location.href = '/evenement'}>Nos évènements</button>
        </section>
      </main>

      <Footer />
    </>
  );
}
