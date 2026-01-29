'use client';

import '../styles/components/navBar.css';
import '../styles/components/footer.css';
import Image from 'next/image';
import logo from '../public/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer-container">
              <Image src={logo} alt="Esbarrits de Cardesse" className="footer-logo" />

        <div className="footer-info">
          <p><strong>Les Esbarrits de Cardesse</strong></p>
          <p>📞 06 29 82 15 30</p>
          <p>✉️ <a href="mailto:contact@esbarrits.fr">jeanlouis.laffargue@sfr.fr</a></p>
          <p>📍 Cardesse, 64360</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Les Esbarrits de Cardesse - Tous droits réservés</p>
        </div>

    </footer>
  );
}