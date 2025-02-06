import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";  // Agregar useLocation
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Nosotros from "./Nosotros";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Detectamos la ubicación actual
  const nosotrosRef = useRef(null);
  const footerRef = useRef(null);

  // Función para hacer scroll hacia la sección de "Nosotros"
  const handleScroll = () => {
    if (nosotrosRef.current) {
      nosotrosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect para hacer scroll al cargar la ruta /cuestionario
  useEffect(() => {
    if (location.pathname === "/") {
      // Si estamos en la home, no hacemos scroll a "Nosotros"
      return;
    }
    
    if (location.hash === "#nosotros" && nosotrosRef.current) {
      nosotrosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const scrollToContacto = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mainContainer">
      <Header
        onInicioClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onNosotrosClick={handleScroll}
        onContactoClick={scrollToContacto}
      />
      <div className="homeContainer">
        <img className="logoHero" src={`${process.env.PUBLIC_URL}/logo-dev.png`} alt="Logo Devinicia" />
        <p>Haz clic en el botón de abajo para iniciar el cuestionario.</p>
        <Link to="/cuestionario">
          <button className="btn-iniciar">Iniciar Cuestionario</button>
        </Link>
      </div>
      <div ref={nosotrosRef}> {/* Sección Nosotros */}
        <Nosotros />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
