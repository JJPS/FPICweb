<?php 

session_start();

include ("conecta.php");


?>
<!DOCTYPE html>
<html lang="es">    

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="icon" type="image/jpg" href="../Fotos/icon.png" />
    <link rel="stylesheet" type="text/css" href="../style.css">
    
    <title>Registro de profesores</title>
</head>

<body class="background-profesores">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>

    <div class="vh-100 d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    class="col-md-8 col-lg-6 col-xl-5 p-5 shadow border border-3 border-danger bg-light rounded mt-4 p-4">
                    <h4 class="mb-4 text-dark border-danger text-center p-2">
                        Registro de profesores
                    </h4>

                    <form action="register_profesores.php" method="POST">
                        <div class="mb-3">
                            <select class="form-select" name="profesor" id="profesor" onchange="mostrarDatosProfesor()">
                                <option for="profesor" selected>Selecciona un profesor</option>
                                <option value="1">Carlos Andrés Campoy Gómez</option>
                                <option value="2">Daniel Berbel Puerto</option>
                                <option value="3">David Méndez Ubeda</option>
                                <option value="4">Elías Isaac García Toledo</option>
                                <option value="5">Francisco Javier Alés Fernández</option>
                                <option value="6">José Javier Pérez Suárez</option>
                                <option value="7">Mohamed Baghdadi Chabbi</option>
                                <option value="8">Mohamed Mehamed Maanan</option>
                                <option value="9">Mustafa Mohamed Maanan</option>
                                <option value="10">Salim Tieb Mohamedi</option>
                                <option value="11">Samuel Higueras Fernández</option>
                                <option value="12">Vicente Villanueva Gonzalez</option>
                            </select>
                        </div>
                        <div class="mb-3" >
                            <label for="nombreyapellidos" class="form-label">Nombre y apellidos</label>
                            <input type="text" class="form-control" id="nombreyapellidos" name="nombreyapellidos"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="docente" class="form-label">Docente</label>
                            <input type="text" class="form-control" id="docente" name="docente" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="curso" class="form-label">Cursos</label>
                            <textarea class="form-control" id="curso" name="curso" rows="3"></textarea>
                          </div>
                        <div class="mb-3">
                            <label for="modulo" class="form-label">Módulo</label>
                            <textarea class="form-control" id="modulo" name="modulo" rows="3"></textarea>
                          </div>
                        <div class="mb-3">
                            <label for="codigo" class="form-label">Código</label>
                            <input type="text" class="form-control" id="codigo" name="codigo" required>
                        </div>
                        <div class="d-grid gap-2 col-10 mx-auto pt-3">
                            <button type="submit" class="btn btn-primary">Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="../javascript/datosProfesor.js"></script>
</body>

</html>