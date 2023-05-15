<?php
require("conecta.php");

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
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Las credenciales son válidas, redirigir al usuario a la página de inicio
    header("Location: registrarProfesores.php");
    exit();
} else {
    // Las credenciales son inválidas, almacenar mensaje de error en $_mensaje
    $_mensaje = 'Credenciales inválidas. Iniciar sesión fallido.';
    // Redirigir al usuario a la página de inicio de sesión con el mensaje de error
    header("Location: login.php?mensaje=" . urlencode($_mensaje));
    exit();
}

// Cerrar la conexión a la base de datos
$conn->close();
?>

