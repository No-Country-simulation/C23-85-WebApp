import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const Pregunta = () => {
  const [pregunta, setPregunta] = useState("");

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await fetch("../data/preguntas.json"); 
        const data = await response.json();
        setPregunta(data[0].pregunta); 
      } catch (error) {
        console.error("Error al cargar las preguntas:", error);
      }
    };

    fetchPreguntas();
  }, []);

  return (
    <div className="preguntaContainer">
      <h2>{pregunta}</h2>
    </div>
  );
};

export default Pregunta;
