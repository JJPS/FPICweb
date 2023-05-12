// Obtén todos los enlaces de paginación
let paginationLinks = document.querySelectorAll('.pagination-inner a');

// Agrega un controlador de eventos para cada enlace de paginación
paginationLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Previene el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Elimina la clase pagination-active de cualquier enlace de paginación existente
    paginationLinks.forEach(function(link) {
      link.classList.remove('pagination-active');
    });
    
    // Agrega la clase pagination-active al enlace de paginación clicado
    this.classList.add('pagination-active');
  });
});
