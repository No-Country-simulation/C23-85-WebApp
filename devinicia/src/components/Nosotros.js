import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Nosotros = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="team-container">
        <h2>El equipo de c23-85-webapp</h2>
        <div className="team-card">
          <div className="team-pic">
            < img className="team-member" src={`${process.env.PUBLIC_URL}/profiles/perfil-cs.png`} alt="Claudia Sanchez" />
          </div>
          <div className="team-detail">
            <h3>Claudia Sanchez/Tester</h3>
            <p>Soy Claudia Sanchez , Ingeniera de Sistemas. Me he desempeñado en proyectos enfocados en la ejecución de pruebas manuales, Tengo conocimientos en el diseño de casos de prueba detallados, ejecución de pruebas automatizadas en patrón Screenplay, y el uso de herramientas de gestión como Azure DevOps. Además, cuento con habilidades en bases de datos (MySQL, PostgreSQL) y lenguajes de programación como Java y PHP. En este proyecto me desempeñe con Tester.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-pic">
            < img className="team-member" src={`${process.env.PUBLIC_URL}/profiles/perfil-mg.png`} alt="Mauro Godoy" />
          </div>
          <div className="team-detail">
            <h3>Mauro Godoy/Backend</h3>
            <p>Hola, soy Mauro Godoy, Técnico Superior en Desarrollo Web, con experiencia en tecnologías como HTML, CSS, JavaScript, PHP, C#, SQL, MySQL y Git. En este proyecto, desempeñé el rol de desarrollador backend utilizando PHP.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-pic">
            < img className="team-member" src={`${process.env.PUBLIC_URL}/profiles/perfil-ss.png`} alt="Sebastian Siddi" />
          </div>
          <div className="team-detail">
            <h3>Sebastian Siddi/Frontend</h3>
            <p>Soy Sebastian Siddi, licenciado en comunicación y diseñador web. Con experiencia en desarrollo frontend utilizando tecnologías como HTML, CSS  (Sass), Javascript, React y con conocimientos en Python/Django. En estre proyecto me desempeñé como desarrollador Frontend</p>
          </div>
        </div>
      </div>
    );

});

export default Nosotros;