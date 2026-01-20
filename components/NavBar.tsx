'use client';

import '../styles/components/navBar.css';
import { useState } from 'react';
import logo from '../public/images/logo.png'; // Ajustez le chemin selon votre dossier
import burgerIcon from '../public/images/hamburger.webp';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    console.log("Current pathname:", pathname);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            {/* Logo */}
            <div>
                <img
                    src={logo.src}
                    alt="Esbarrits de Conesa"
                />
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className='mobile'>
                    <a href="/" className={pathname === '/' ? "active" : ""}>Accueil</a>
                    <a href="/histoire" className={pathname === '/histoire' ? "active" : ""}>Notre histoire</a>
                    <a href="/repertoire" className={pathname === '/repertoire' ? "active" : ""}>Notre répertoire</a>
                    <a href="/contact" className={pathname === '/contact' ? "active" : ""}>Contact</a>
                </div>
            )}

            {/* Menu Desktop - Centré */}
            <div className='desktop'>
                <a href="/" className={pathname === '/' ? "active" : ""}>Accueil</a>
                <a href="/histoire" className={pathname === '/histoire' ? "active" : ""}>Notre histoire</a>
                <a href="/repertoire" className={pathname === '/repertoire' ? "active" : ""}>Notre répertoire</a>
                <a href="/contact" className={pathname === '/contact' ? "active" : ""}>Contact</a>
            </div>

            {/* Burger Menu Butto */}
            <div className='burger'>

                <button
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <img src={burgerIcon.src} alt="" />
                </button>
            </div>


        </nav>
    );
}