import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "../styles/styles.css";

const Header = () => {
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
        <Link className="nav-link" to="/nosotros">Nosotros</Link>
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


