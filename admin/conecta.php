<?php
$servername = "localhost";
$username = "debianDB";
$password = "debianDB";
$dbname = "FPICweb";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Aquí puedes realizar operaciones en la base de datos

// Cerrar la conexión
$conn->close();
?>
