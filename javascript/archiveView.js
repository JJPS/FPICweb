
  var miModal = document.getElementById('mi-modal')
  miModal.addEventListener('show.bs.modal', function (event) {
    
    // Obtiene el botón que abrió el modal
    var boton = event.relatedTarget

    // Obtiene la URL del archivo del atributo de datos personalizados del botón
    var archivo = boton.getAttribute('data-file')

    // Actualiza la URL del objeto <embed> con la URL del archivo
    var embed = miModal.querySelector('.embed-responsive-item')
    embed.setAttribute('src', archivo)
  })

