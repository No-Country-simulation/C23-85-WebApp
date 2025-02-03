CREATE TABLE `usuarios` (
  `id` int PRIMARY KEY,
  `nombre` varchar(20),
  `email` varchar(30) UNIQUE,
  `contraseña` varchar(30),
  `rol` enum('usuario','admin'),
  `fecha_registro` timestamp
);

CREATE TABLE `cuestionario` (
  `id` int PRIMARY KEY,
  `titulo` varchar(50)
);

CREATE TABLE `preguntas` (
  `id` int PRIMARY KEY,
  `cuestionario_id` int,
  `texto` text
);

CREATE TABLE `respuestas` (
  `id` int PRIMARY KEY,
  `pregunta_id` int,
  `texto` text,
  `es_correcta` boolean
);

CREATE TABLE `intentos_cuestionario` (
  `id` int PRIMARY KEY,
  `usuario_id` int,
  `cuestionario_id` int,
  `puntaje` int,
  `fecha_intento` timestamp
);

ALTER TABLE `preguntas` ADD FOREIGN KEY (`cuestionario_id`) REFERENCES `cuestionario` (`id`);

ALTER TABLE `respuestas` ADD FOREIGN KEY (`pregunta_id`) REFERENCES `preguntas` (`id`);

ALTER TABLE `intentos_cuestionario` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

ALTER TABLE `intentos_cuestionario` ADD FOREIGN KEY (`cuestionario_id`) REFERENCES `cuestionario` (`id`);
