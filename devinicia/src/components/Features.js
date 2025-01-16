import React from 'react';
import '../styles/styles.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Lo que aprenderás</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Conceptos básicos de Python</h3>
          <p>Aprende los fundamentos de Python para ciencia de datos y automatización.</p>
        </div>
        <div className="feature-card">
          <h3>Fundamentos de JavaScript</h3>
          <p>Construye aplicaciones web interactivas con JavaScript.</p>
        </div>
        <div className="feature-card">
          <h3>HTML y CSS</h3>
          <p>Diseña sitios web impresionantes y responsivos desde cero.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
