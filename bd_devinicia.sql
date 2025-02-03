CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(20) NOT NULL,
  email VARCHAR(20) UNIQUE NOT NULL,
  contraseña VARCHAR(30) NOT NULL,
  rol ENUM('usuario', 'admin') NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cuestionario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL
);

CREATE TABLE preguntas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cuestionario_id INT NOT NULL,
  texto TEXT NOT NULL,
  FOREIGN KEY (cuestionario_id) REFERENCES cuestionario(id) ON DELETE CASCADE
);

CREATE TABLE respuestas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pregunta_id INT NOT NULL,
  texto TEXT NOT NULL,
  es_correcta BOOLEAN NOT NULL,
  FOREIGN KEY (pregunta_id) REFERENCES preguntas(id) ON DELETE CASCADE
);

CREATE TABLE intentos_cuestionario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  cuestionario_id INT NOT NULL,
  puntaje INT NOT NULL,
  fecha_intento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (cuestionario_id) REFERENCES cuestionario(id) ON DELETE CASCADE
);
