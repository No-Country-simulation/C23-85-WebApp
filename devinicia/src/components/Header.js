import React from 'react';
import '../styles/styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Devinicia</h1>
      <nav>
        <a className="nav-link" href="#inicio">Inicio</a>
        <a className="nav-link" href="#nosotros">Nosotros</a>
        <a className="nav-link" href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;

