import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/styles.css";
import Userlogged from "./Userlogged";

const Header = ({ onInicioClick, onNosotrosClick, onContactoClick }) => {
  const navigate = useNavigate();
  const location = useLocation();  // Nos dice en qué ruta estamos actualmente

  const handleInicioClick = () => {
    if (location.pathname === "/") {
      // Si ya estamos en la página de inicio, hacemos scroll al inicio
      if (onInicioClick) onInicioClick();
    } else {
      // Si estamos en otra página, navegamos a la página de inicio
      navigate("/");
    }
  };

  const handleNosotrosClick = () => {
    if (location.pathname === "/") {
      // Si estamos en la página de inicio, hacemos scroll a "Nosotros"
      if (onNosotrosClick) onNosotrosClick();
    } else {
      // Si estamos en otra página, navegamos al inicio y hacemos scroll a "Nosotros"
      navigate("/");
      setTimeout(() => {
        if (onNosotrosClick) onNosotrosClick();
      }, 0);
    }
  };

  const handleContactoClick = () => {
    if (location.pathname === "/") {
      // Si estamos en la página de inicio, hacemos scroll a "Contacto"
      if (onContactoClick) onContactoClick();
    } else {
      // Si estamos en otra página, navegamos al inicio y hacemos scroll a "Contacto"
      navigate("/");
      setTimeout(() => {
        if (onContactoClick) onContactoClick();
      }, 0);
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleInicioClick}>
        <img src={`${process.env.PUBLIC_URL}/logo-dev.png`} alt="Logo Devinicia" />
      </div>
      <div className="mainMenu">
        <Userlogged />
        <nav>
          <button className="nav-link" onClick={handleInicioClick}>Inicio</button>
          <button className="nav-link" onClick={handleNosotrosClick}>Nosotros</button>
          <button className="nav-link" onClick={handleContactoClick}>Contacto</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;





/* import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "../styles/styles.css";

const Header = ({ onInicioClick, onNosotrosClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo-dev.png`} alt="Logo Devinicia" />
        </Link>
      </div>
      <nav>
       <Link className="nav-link" onClick={handleOpenModal}>Login</Link>
        <Link className="nav-link" to="/">Inicio</Link>

        <Link className="nav-link" onClick={onInicioClick}>Inicio</Link> 
        <Link className="nav-link" onClick={onNosotrosClick}>Nosotros</Link> 


        <Link className="nav-link" to="/contacto">Contacto</Link>
      </nav>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modalContainer">
          <h2>Iniciar Sesión</h2>
          <form>
            <label>
              Usuario:
              <input type="text" name="username" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <button type="submit">Ingresar</button>
          </form>
        </div>
          <hr />
        <div className="modalContainer">
          <h2>Registrarse</h2>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" />
            </label>
            <label>
              Correo:
              <input type="email" name="email" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </Modal>
    </header>
  );
  }; 
  export default Header;
  */