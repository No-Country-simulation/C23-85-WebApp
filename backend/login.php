<?php
header("Access-Control-Allow-Origin: *"); // Permite solicitudes desde cualquier origen (útil para desarrollo)
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include 'db_connection.php'; // Incluye la conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $vUsuario = $_POST['usuario'];
    $vClave = $_POST['clave'];

    $Usuario = DatosLogin($vUsuario, $vClave, $vConexion);

    if (!empty($Usuario)) {
        echo json_encode([
            'success' => true,
            'data' => $Usuario
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Usuario o contraseña incorrectos.'
        ]);
    }
}

function DatosLogin($vUsuario, $vClave, $vConexion) {
    $Usuario = array();
    $SQL = "SELECT usuario.id_usuario, usuario.nombre_usuario, usuario.contrasena, usuario.id_tipousuario, tipousuario.descripcion as nombre_tipousuario
            FROM usuario 
            JOIN tipousuario ON usuario.id_tipousuario = tipousuario.id_tipousuario
            WHERE usuario.nombre_usuario = '$vUsuario' AND usuario.contrasena = '$vClave'";

    $rs = mysqli_query($vConexion, $SQL);
    $data = mysqli_fetch_array($rs);

    if (!empty($data)) {
        $Usuario['ID'] = $data['id_usuario'];
        $Usuario['NOMBRE'] = $data['nombre_usuario'];
        $Usuario['CONTRASEÑA'] = $data['contrasena'];
        $Usuario['NIVEL'] = $data['id_tipousuario'];
        $Usuario['NOMBRE_NIVEL'] = $data['nombre_tipousuario'];
    }

    return $Usuario;
}
?>
