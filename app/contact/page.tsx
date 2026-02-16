'use client';

import { useState } from 'react';
import '../../styles/components/contact.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    requestType: 'reservation',
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nom || !formData.email) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Votre demande a été envoyée avec succès!');
        setFormData({
          requestType: 'reservation',
          nom: '',
          email: '',
          telephone: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
    <Navbar />
    <section className="contact-container">
      <div className="contact-content">
        <h1>Contactez-nous</h1>
        
        {/* Bloc d'informations de contact */}
        <div className="contact-info-box">
          <div className="contact-info-section">
            <strong>Chef du groupe :</strong>
            <p>Paul-Henri Guicharrousse : 06.15.16.02.32 /</p>
            <p>paul.guicharrousse@neuf.fr</p>
          </div>
          
          <div className="contact-info-section">
            <strong>Président :</strong>
            <p>Jean-Louis Laffargue: 06.29.82.15.30 /</p>
            <p>jeanlouis.laffargue@sfr.fr</p>
          </div>
          
          <div className="contact-info-section">
            <strong>Trésorière :</strong>
            <p>Fabienne Thiarc : 06.46.41.95.76 /</p>
            <p>fabiennethiarc@yahoo.fr</p>
          </div>
        </div>

        {/* Adresse */}
        <div className="address-section">
          <div className="location-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <strong>Place de l'Église,</strong>
            <p>64360 Cardesse</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">Type de demandes *</label>
            <div className="button-group">
              <button
                type="button"
                className={`button-option ${formData.requestType === 'reservation' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, requestType: 'reservation' }))}
              >
                Réserver une prestation pour un évènement
              </button>
              <button
                type="button"
                className={`button-option ${formData.requestType === 'autre' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, requestType: 'autre' }))}
              >
                Autre demande
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nom" className="form-label">Nom Prénom*</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Dupond Jean"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="dupond@mail.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone" className="form-label">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06.05.04.03.02"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Votre message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              className="form-textarea"
              rows={6}
            />
          </div>

          <button type="submit" className="Gold">
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
    <Footer />
        </>
  );
}