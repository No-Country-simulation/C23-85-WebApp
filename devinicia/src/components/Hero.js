import React from 'react';
import '../styles/styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Aprenda a programar gratis</h1>
        <p>Accede a videos exclusivos para comenzar tu viaje en la codificación.</p>
        <form className="hero-form">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="hero-input"
          />
          <button type="submit" className="hero-button">
            Obtenga acceso gratuito
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
