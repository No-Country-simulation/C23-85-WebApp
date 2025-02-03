<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "mi_base_de_datos";

$vConexion = mysqli_connect($server, $username, $password, $database);

if (!$vConexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}
?>
