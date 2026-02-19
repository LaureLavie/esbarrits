'use client';

import '../styles/components/navBar.css';
import '../styles/components/footer.css';
import Image from 'next/image';
import logo from '../public/images/logo.webp';
import icoFB from '../public/images/icoFB.webp';

export default function Footer() {
  return (
    <footer className="footer-container">
              <Image src={logo} alt="Esbarrits de Cardesse" className="footer-logo" />

        <div className="footer-info">
          <p><strong>Les Esbarrits de Cardesse</strong></p>
          <a
          className="footer-fb"
          href="https://www.facebook.com/Esbarrits"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Page Facebook Les Esbarrits de Cardesse"
        >
          <Image src={icoFB} alt="Facebook Esbarrits" className="picto_fb" />
        </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Les Esbarrits de Cardesse - Tous droits réservés</p>
          <ul>
            <li>
              <a href="/mentions-legales" className="footer-link">Mentions légales</a>
            </li>
            <li>
              <a href="/confidentialite" className="footer-link">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

    </footer>
  );
}