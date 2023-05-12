function mostrarDatosProfesor() {
  let select = document.getElementById("profesor");
  let nombreInput = document.getElementById("nombreyapellidos");
  let docenteInput = document.getElementById("docente");
  let emailInput = document.getElementById("email");
  let cursoInput = document.getElementById("curso");
  let moduloInput = document.getElementById("modulo");
  let codigoInput = document.getElementById("codigo");
  
  // Obtener el campo de cursos del formulario
  let cursosTextArea = document.getElementById("curso");
  
  // Limpiar el contenido anterior
  cursosTextArea.value = "";
  
  // Obtener el valor seleccionado del profesor
  let seleccion = select.value;
  
  // Obtener los datos del profesor seleccionado
  let datosProfesor = obtenerDatosProfesor(seleccion);
  
  // Obtener los cursos del profesor seleccionado
  let cursos = datosProfesor.curso;
  
  // Actualizar los campos del formulario con los datos del profesor
  nombreInput.value = datosProfesor.nombre;
  docenteInput.value = datosProfesor.docente;
  emailInput.value = datosProfesor.correo;
  
  // Recorrer todos los cursos del profesor seleccionado
  for (let i = 0; i < cursos.length; i++) {
    let curso = cursos[i];
  
    // Agregar los datos del curso al área de texto
    cursosTextArea.value += "Curso: " + curso.nombre + "\n";
    cursosTextArea.value += "Módulo: " + curso.modulo + "\n";
    cursosTextArea.value += "Código: " + curso.codigo + "\n\n";
  }
  
  // Si hay cursos, mostrar el primero seleccionado
  if (cursos.length > 0) {
    let primerCurso = cursos[0];
    cursoInput.value = primerCurso.nombre;
    moduloInput.value = primerCurso.modulo;
    codigoInput.value = primerCurso.codigo;
  }
}

function obtenerDatosProfesor(profesor) {
  let datos = {
    1: {
      nombre: "Carlos Andrés Campoy Gómez",
      docente: "Profesor",
      correo: "campoy@iesleopoldoqueipo.com",
      curso: [
        { nombre: "2A_I FPGB INFORMÁTICA Y COMUNICACIONES", modulo: "- Operaciones auxiliares para la configuración y la explotación - Instalación y mantenimiento de redes para transmisión de datos - FCT - Tutoría", codigo: "03030  03016  03032" },
        { nombre: "", modulo: "", codigo: "" },
        { nombre: "", modulo: "", codigo: "" }
      ],

    },
    2: {
      nombre: "Daniel Berbel Puerto",
      docente: "Profesor",
      correo: "daniel@iesleopoldoqueipo.com",
      curso: [
        { nombre: "2C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Aplicaciones web", codigo: "10228" },
        { nombre: "2C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Administración de sistemas gestores de bases de datos <br>- Proyecto de administración de sistemas informáticos <br>- FCT", codigo: "30377 <br> 30379 <br> 30382" },
        { nombre: "1C_B CURSO DE ESPECIALIZACIÓN EN CIBERSEGURIDAD", modulo: "- Incidentes de ciberseguridad", codigo: "75021" }
      ],
    },
    3: {
      nombre: "David Méndez Ubeda",
      docente: "Profesor - Coordinador Erasmus+",
      correo: "david@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Sistemas operativos monopuesto <br>- Montaje y mantenimiento de equipos", codigo: "10222 <br> 10221" },
        { nombre: "", modulo: "", codigo: "" },
        { nombre: "", modulo: "", codigo: "" }
      ],
    },
    4: {
      nombre: "Elías Isaac García Toledo",
      docente: "Profesor",
      correo: "elias@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Fundamentos de hardware", codigo: "30371" },
        { nombre: "2C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Administración de sistemas operativos", codigo: "30374" },
        { nombre: "1D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Sistemas informáticos", codigo: "30483" },
        { nombre: "1C_B CURSO DE ESPECIALIZACIÓN EN CIBERSEGURIDAD", modulo: "- Análisis forense informático", codigo: "30483" }
      ],

    },
    5 : {
      nombre: "Francisco Javier Alés Fernández",
      docente: "Profesor - Jefe de Departamento",
      correo: "ales@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Aplicaciones ofimáticas", codigo: "10223" },
        { nombre: "2C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Sistemas operativos en red", codigo: "10224" },
        { nombre: "", modulo: "", codigo: "" }
      ],
    },
    6: {
      nombre: "José Javier Pérez Suárez",
      docente: "Profesor",
      correo: "josejavier@iesleopoldoqueipo.com",
      curso: [
        { nombre: "2D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Diseño de interfaces WEB <br>- Proyecto de desarrollo de aplicaciones WEB <br>- FCT", codigo: "30615 <br> 30616 <br> 30619" },
        { nombre: "1C_B CURSO DE ESPECIALIZACIÓN EN CIBERSEGURIDAD", modulo: "- Bastionado de redes y sistemas", codigo: "75022" },
        { nombre: "", modulo: "", codigo: "" }
      ],
    },
    7: {
      nombre: "Mohamed Baghdadi Chabbi ",
      docente: "Profesor",
      correo: "baghdadi@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1A_I FPGB - INFORMÁTICA Y COMUNICACIÓN", modulo: "- Montaje y mantenimiento de sistemas y componentes <br>- Equipos eléctricos y electrónicos <br>- Tutoría", codigo: "03029 <br> 03015" },
        { nombre: "", modulo: "", codigo: "" },
        { nombre: "", modulo: "", codigo: "" }
      ],
    },
    8: {
      nombre: "Mohamed Mehamed Maanan",
      docente: "Profesor",
      correo: "maanan@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Redes locales", codigo: "10225" },
        { nombre: "2C_S TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES", modulo: "- Seguridad informática <br>- Servicios en red <br>- FCT", codigo: "10226 <br> 10227 <br> 10231" },
        { nombre: "", modulo: "", codigo: "" }
      ],
    },
    9: {
      nombre: "Mustafa Mohamed Maanan",
      docente: "Profesor",
      correo: "mustafa@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Proyecto de administración de sistemas informáticos <br>- Lenguajes de marca y sistemas de gestión de información", codigo: "30379 <br> 30373" },
        { nombre: "2C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Servicios de red e internet", codigo: "30375" },
        { nombre: "1D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Bases de datos <br>- Lenguajes de marca y sistemas de gestión de información", codigo: "30484 <br> 30373" }
      ],
    },
    10: {
      nombre: "Salim Tieb Mohamedi",
      docente: "Profesor - Coordinador Spainskills",
      correo: "salim@iesleopoldoqueipo.com",
      curso: [
        { nombre: "2C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Seguridad y alta disponibilidad", codigo: "30378" },
        { nombre: "1D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Programación <br>- Entornos de desarrollo", codigo: "30485 <br> 30487" },
        { nombre: "1C_B CURSO DE ESPECIALIZACIÓN EN CIBERSEGURIDAD", modulo: "- Hacking ético", codigo: "7502" }
      ],
    },
    11: {
      nombre: "Samuel Higueras Fernández",
      docente: "Profesor",
      correo: "samuel@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Planificación y administración de redes", codigo: "30370" },
        { nombre: "2C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Implantación de aplicaciones web", codigo: "30376" },
        { nombre: "2D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Despliegue de aplicaciones WEB <br>- Desarrollo WEB en entorno servidor", codigo: "30614 <br> 30613" }
      ],
    },
    12: {
      nombre: "Vicente Villanueva Gonzalez",
      docente: "Profesor",
      correo: "vicente@iesleopoldoqueipo.com",
      curso: [
        { nombre: "1C_F TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS Y REDES", modulo: "- Implantación de sistemas operativos", codigo: "30369" },
        { nombre: "2D_W TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB", modulo: "- Desarrollo WEB en entorno cliente", codigo: "30612" },
        { nombre: "1C_B CURSO DE ESPECIALIZACIÓN EN CIBERSEGURIDAD", modulo: "- Puesta en producción segura", codigo: "75023" }
      ],
    },
  };


  return datos[profesor] || {};
}
