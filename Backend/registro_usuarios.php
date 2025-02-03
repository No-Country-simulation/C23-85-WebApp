<?php
require 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = password_hash($_POST['contraseña'], PASSWORD_BCRYPT);
    $rol = 'usuario';

    $sql = "INSERT INTO usuarios (nombre, email, contraseña, rol, fecha_registro) VALUES (?, ?, ?, ?, NOW())";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([$nombre, $email, $password, $rol]);
        echo json_encode(["status" => "success", "message" => "Usuario registrado correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error al registrar usuario: " . $e->getMessage()]);
    }
}
?>