import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { nom, email, telephone, message, requestType } = formData;

    // Vérification des variables d'environnement SMTP
    const SMTP_USER = process.env.EMAIL_USER;
    const SMTP_PASS = process.env.EMAIL_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error('SMTP credentials missing', { SMTP_USER: !!SMTP_USER, SMTP_PASS: !!SMTP_PASS });
      return NextResponse.json({ error: 'SMTP credentials manquantes côté serveur' }, { status: 500 });
    }

    // Configurez vos paramètres d'email ici
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS, // Utilisez le App Password ici
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email à l'administrateur
    const adminMailOptions = {
      from: SMTP_USER,
      to: 'laure.lavie@gmail.com', 
      subject: `Nouvelle demande de contact - ${requestType}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Type de demande:</strong> ${requestType}</p>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || 'Non fourni'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email de confirmation au client
    const clientMailOptions = {
      from: SMTP_USER,
      to: email,
      subject: 'Confirmation de réception - Esbarrits',
      html: `
        <h2>Merci pour votre message</h2>
        <p>Bonjour ${nom},</p>
        <p>Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.</p>
        <p>Cordialement,<br/>L'équipe Esbarrits</p>
      `,
    };

    // Envoyez les deux emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
