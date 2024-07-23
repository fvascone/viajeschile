document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;
  
    function showNextItem() {
      items[index].classList.remove('active');
      index = (index + 1) % items.length;
      items[index].classList.add('active');
    }
  
    // Mostrar la primera imagen al cargar la página
    items[index].classList.add('active');
  
    // Configurar el intervalo para cambiar de imagen cada 3 segundos
    setInterval(showNextItem, 3000);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto
  
      // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, usando Fetch API
      // o simplemente mostrar un mensaje de éxito como este:
      alert('¡Mensaje enviado! Gracias por contactarnos.');
      form.reset(); // Opcional: limpiar el formulario después de enviar
    });
  });