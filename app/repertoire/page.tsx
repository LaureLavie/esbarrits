'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '../../styles/components/repertoire.css';

export default function RepertoirePage() {
    return (
        <div>
              <Navbar />
            <main className="repertoire-page">
        <header className="repertoire-header">
          <h1>Notre Répertoire</h1>
        </header>
          <h2>Lous Esbarrits de Cardesse</h2>
        <section className="repertoire-text">
          <p>
          Notre première production “artisanale”.

Cette cassette comprend 12 chansons traditionnelles béarnaises et françaises et, comme dit plus haut des œuvres complètement crées par le groupe (paroles et musique).

Elle n’est plus, hélas, disponible: stock épuisé !!!
          </p>
</section>
<section className="sound">
            <iframe 
            width="80%" 
            height="450"
            style={{border: 0, overflow: 'hidden' }}             
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2177723975&color=%23aa0101&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            </section>
     
            <h2>Passa Lo Temps</h2>
    
        <section className="repertoire-text">
          <p>
          Il nous fallait illustrer le thème “Passa lo temps” (le temps passe) pour composer la jaquette de notre CD.

Pour cela, nous avons utilisé deux photos de notre village, qui sont à elles seules des témoignages frappants de ce temps qui passe…

Celle-ci, datant du début du XXème siècle montre la Place de la Liberté avec son chêne multi-centenaire.

Vous noterez la “vitalité” du village, ne serait-ce que par la présence “massive” des habitants… (On aurait sans doute beaucoup de mal à rassembler autant de “villageois” aujourd’hui pour la photo !!!)

Et oui, le temps passe et notre village a été, comme tous les villages ruraux, victime du dépeuplement, de l’exode rural. Comme les autres, il a vu disparaître ses nombreux commerces, artisans et services…

Mais il faut garder espoir et surtout sauvegarder notre patrimoine culturel. C’est la motivation profonde de notre groupe: garder bien vivantes nos belles chansons traditionnelles, les préserver de l’oubli dans l’uniformisation du monde “moderne“.
          </p>
</section>
            <section className="sound">
            <iframe width="80%" 
            height="450"   
            style={{border: 0, overflow: 'hidden' }}             
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2181431807&color=%23c7a109&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            </section>


            <h2>Un Plapot de Colors</h2>
    
    <section className="repertoire-text">
      <p>
      Une durée de gestation plus proche de l’éléphant que de la souris a été nécessaire pour accoucher de notre nouvel album », a déclaré avec humour Christian Carrasquet, membre du groupe Los Esbarrits.

Voici notre deuxième CD « un plapòt de colors ». Ce titre est tiré de la chanson « Saunei deu vielh » dont le texte est un poème d’Hubert Sarrailh-Bengué notre poète local. Il a été mis en musique par Paul-Henri notre chef de chœur. En reprenant ce texte, nous avons voulu rendre hommage à cette figure moneinchonne, bien connue de tous pour sa culture, son amour de la langue béarnaise qu’il a su transmettre par l’écriture de nombreux textes et poèmes.

La jaquette de notre deuxième CD illustre parfaitement son titre “Un plapòt de colors” (une petite tache de couleurs). Christian Lamaison – notre graphiste – a savamment déposé de belles zones colorées sur un fond de portée musicale.
      </p>
</section>
    <section className="sound">
    <iframe 
    width="80%" 
    height="450" 
    style={{border: 0, overflow: 'hidden' }}   
    allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2177711177&color=%235ea11d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
    </iframe>
    </section>
        
        </main>
        <Footer />
        </div>
    );
}
