import React, { useState } from "react";
import preguntas from "../data/preguntas.json"; // Ajusta la ruta
import "../styles/styles.css";
import Header from './Header';
import Footer from './Footer';

const Cuestionario = () => {
  const [indiceActual, setIndiceActual] = useState(0); // Controla la pregunta actual
  const [puntaje, setPuntaje] = useState(0); // Guarda el puntaje
  const [mostrandoResultado, setMostrandoResultado] = useState(false); // Para mostrar resultados finales

  const preguntaActual = preguntas[indiceActual]; // Obtiene la pregunta actual

  const manejarRespuesta = (opcion) => {
    if (opcion === preguntaActual.respuestaCorrecta) {
      setPuntaje(puntaje + 1); // Incrementa el puntaje si la respuesta es correcta
    }

    // Avanza a la siguiente pregunta o muestra los resultados si es la última
    if (indiceActual + 1 < preguntas.length) {
      setIndiceActual(indiceActual + 1);
    } else {
      setMostrandoResultado(true); // Finaliza el cuestionario
    }
  };

  const reiniciarCuestionario = () => {
    setIndiceActual(0);
    setPuntaje(0);
    setMostrandoResultado(false);
  };

  return (
    <div className="mainContainer">
      <Header />
    <div className="cuestionarioContainer">
      {mostrandoResultado ? (
        <div className="resultado">
          <h2>¡Cuestionario Finalizado!</h2>
          <p className="puntaje">
            Tu puntaje: {puntaje} de {preguntas.length}
          </p>
          <button onClick={reiniciarCuestionario}>Reiniciar</button>
        </div>
      ) : (
        <div className="pregunta">
          <h2>{preguntaActual.pregunta}</h2>
          <div className="opciones">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                className="opcion"
                onClick={() => manejarRespuesta(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
};

export default Cuestionario;
