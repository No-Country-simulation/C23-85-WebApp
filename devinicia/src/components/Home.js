import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Header from './Header';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <div className="homeContainer">
        <img className="logoHero" src={`${process.env.PUBLIC_URL}/logo-dev.png`} alt="Logo Devinicia" />
        <p>Haz clic en el botón de abajo para iniciar el cuestionario.</p>
        <Link to="/cuestionario">
          <button className="btn-iniciar">Iniciar Cuestionario</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
