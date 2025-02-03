import React, { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault(); // Previene que el formulario recargue la página

    try {
      // Realiza la solicitud al backend
      const response = await fetch("http://localhost/devinicia/backend/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Tipo de datos enviados
        },
        body: new URLSearchParams({
          usuario: usuario, // Datos del formulario
          clave: clave,
        }),
      });

      const data = await response.json(); // Convierte la respuesta a JSON

      if (data.success) {
        console.log("Login exitoso:", data.data);
        alert("¡Bienvenido, " + data.data.NOMBRE + "!");
      } else {
        console.error("Error:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema con la conexión al servidor.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Iniciar Sesión</h1>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
