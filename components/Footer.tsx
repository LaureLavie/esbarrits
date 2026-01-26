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
          <p><strong>Los Esbarrits de Cardesse</strong></p>
          <p>📞 06 05 04 03 02</p>
          <p>✉️ <a href="mailto:contact@esbarrits.fr">contact@esbarrits.fr</a></p>
          <p>📍 Cardesse, 64360</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Los Esbarrits de Cardesse - Tous droits réservés</p>
        </div>

    </footer>
  );
}