import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '../../styles/components/mentions.css';

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="mentions-legales">
        <h1>Mentions légales</h1>
        <section>
          <h2>Éditeur du site</h2>
          <p>Conformément aux dispositions de l’article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, nous vous informons que le site www.esbarrits.fr est le site officiel des Esbarrits de Cardesse.</p>
          <p><strong>Esbarrits de Cardesse</strong><br />
          75 rue de la Mairie<br />
          64360 Cardesse<br />
          Téléphone : 06.29.82.15.30 <br />
          Mail : jeanlouis.laffargue@sfr.fr </p>
          <p>Directeur de la publication du site : Monsieur Jean-Louis Laffargue, président de l’association</p>
          <p>Pour toute information liée au fonctionnement ou à l’utilisation du site, vous pouvez contacter le webmaster par le formulaire de contact ou par courrier postal à l’adresse ci-dessus.</p>
        </section>
        <section>
          <h2>Responsabilité</h2>
          <p>La responsabilité de l’association ne saurait être engagée en cas notamment :</p>
          <ul>
            <li>de difficultés de fonctionnement ou interruption des services en ligne</li>
            <li>d’interruptions momentanées du site nécessaires à son évolution, maintenance ou mise à jour</li>
            <li>de défaillances ou dysfonctionnement du réseau Internet dans la transmission de données ou de documents</li>
            <li>d’intrusion frauduleuse d’un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
            <li>de conséquences, directes ou indirectes, pouvant découler d’erreurs de saisie de coordonnées ou de toute autre information incomplète ou erronée transmise par vos soins via le présent site.</li>
          </ul>
        </section>
        <section>
          <h2>Commentaires, remarques et suggestions</h2>
          <p>L’Association des Esbarrits de Cardesse ne garantit pas que ce site soit exempt de défaut, d’erreur ou d’omission. L’information qui y est contenue est destinée à vous apporter des indications générales et les mieux actualisées possibles sur les sujets traités. L’Association des Esbarrits de Cardesse ne saurait en aucun cas être tenue responsable des éventuels défauts, erreurs ou omissions existant dans ce site, ni de l’utilisation et de l’interprétation de l’information qu’il contient.</p>
          <p>Un formulaire est à votre disposition pour toute suggestion, information, réaction concernant ce site.</p>
        </section>
        <section>
          <h2>Propriété Intellectuelle</h2>
          <p>Le présent site est la propriété des Esbarrits de Cardesse, qui en est l’auteur au sens des articles L. 111.1 et suivants du Code de la propriété intellectuelle. Les photographies, textes, slogans, dessins, images, séquences animées sonores ou non ainsi que toutes œuvres intégrées dans le site sont la propriété des Esbarrits de Cardesse ou de tiers l’ayant autorisée à les utiliser. La reproduction, sur un support papier ou informatique, du site est autorisée sous réserve qu’elle soit strictement réservée à un usage personnel, excluant tout usage à des fins publicitaires et/ou commerciales et/ou d’informations, et qu’elle soit conforme aux dispositions de l’article L122-5 du Code de la Propriété Intellectuelle. A l’exception des dispositions ci-dessus, toute reproduction, représentation, utilisation ou modification, par quelque procédé que ce soit et sur quelque support que ce soit, de tout ou partie du site, de tout ou partie des contenus qui le composent, sans avoir obtenu l’autorisation préalable des Esbarrits de Cardesse, est strictement interdite et constitue un délit de contrefaçon.</p>
        </section>
        <section>
          <h2>Établissement de liens vers des sites tiers</h2>
          <p>Le site contient des liens hypertextes donnant accès à d’autres sites web édités et gérés par des tiers.</p>
          <p>L’Association des Esbarrits de Cardesse ne pourra être tenue responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales et réglementaires tant françaises qu’européennes en vigueur ou à venir, ainsi que des conséquences de ce non-respect.</p>
        </section>
        <section>
          <h2>Données personnelles</h2>
          <p>Les données personnelles recueillies sur le site résultent de la communication volontaire lors du dépôt d’un message électronique par le biais d’un formulaire, d’une inscription volontaire à une liste de diffusion ou de la sollicitation d’un accès réservé à un espace restreint.</p>
          <p>Les courriels ainsi recueillis ne servent qu’à transmettre les éléments d’informations demandés.</p>
          <p>L’Association des Esbarrits de Cardesse conserve de manière confidentielle ces données pour une durée ne pouvant excéder 1 an. Les adresses électroniques collectées ne feront l’objet d’aucune cession, ni d’aucun traitement de la part des Esbarrits de Cardesse.</p>
          <p>Le site Internet des Esbarrits de Cardesse n’utilise pas de procédé de collecte automatisée de données : cookies, applet java ou active X</p>
          <p>Conformément à l’article 34 de la Loi “Informatique et Libertés” n° 78-17 du 6 janvier 1978, modifiée le 6 août 2004, vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données qui vous concernent. Vous pouvez exercer ce droit en envoyant un courriel via notre formulaire de contact ou un courrier postal à l’adresse suivante, en indiquant si possible le contexte dans lequel cette collecte de données personnelles a été effectuée afin que nous puissions retrouver plus facilement les informations vous concernant :</p>
          <p><strong>Esbarrits de Cardesse</strong><br />
          75 rue de la Mairie<br />
          64360 Cardesse</p>
        </section>
        <section>
          <h2>Crédits</h2>
          <p>Éditeur responsable du site : Contact<br />
          Conception et réalisation : Esbarrits de Cardesse<br />
          Hébergement: https://vercel.com <br />
          Mise à jour des contenus : Esbarrits de Cardesse</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
