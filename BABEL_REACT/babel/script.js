// Obtener referencia al botón
const fetchButton = document.getElementById('fetchButton');

// Agregar evento click al botón
fetchButton.addEventListener('click', () => {
    // Realizar solicitud Fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            // Mostrar los datos en la consola
            console.log(data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Error en la solicitud Fetch:', error);
        });
});


// Código original
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
  }
  