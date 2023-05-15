<?php

require ("conecta.php");

// Crear conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si se estableció la conexión
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . $conn->connect_error);
}

// Obtener los datos ingresados en el formulario
$usuario = $_POST['usuario'];
$password = $_POST['password'];

// Realizar la consulta a la base de datos para validar las credenciales
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contraseña = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Las credenciales son válidas, redirigir al usuario a la página de inicio
    header("Location: registrarProfesores.php");
    exit(); // Es importante terminar la ejecución del script después de redirigir
} else {
    // Las credenciales son inválidas, mostrar mensaje de error o redirigir al usuario a otra página
    echo "Credenciales inválidas. Iniciar sesión fallido.";
}

// Cerrar la conexión a la base de datos
$conn->close();
?>



