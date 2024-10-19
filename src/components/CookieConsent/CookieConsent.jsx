import React, { useState, useEffect } from 'react';
import './CookieConsent.scss';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado/rechazado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Guardar la aceptación en localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    // Guardar el rechazo en localStorage
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // No mostrar el banner si ya se ha aceptado/rechazado
  }

  return (
    <div className="cookie-consent-banner">
      <h2>Las cookies bla bla bla...</h2>
      <p>
      Que sí, que usamos cookies, pero solo usamos las de Google Analytics para recoger datos estadísticos. Nada más. Más claro, imposible. :)
      </p>
      <p>De todas formas aquí tienes nuestra <a href="#">política de cookies</a>.</p>
      <div className="cookie-consent-actions">
        <button onClick={handleAccept} className="c__Button">
          Aceptar
        </button>
        <button onClick={handleReject} className="c__Button secondary">
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
