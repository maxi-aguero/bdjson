document.addEventListener('DOMContentLoaded', function() {
    const binId = '66623b8cad19ca34f87550fa'; // ID del bin en JSONBin
    const masterKey = '$2a$10$B932aYdxH1HrrkOGgNwB6.SPPh0Fr8LqJYq3hAUzjqP6w.cr9bVdK'; // Master Key de JSONBin
  
    // URL para obtener los datos del bin específico
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}/latest`;
  
    // Realizar la solicitud utilizando Fetch API
    fetch(apiUrl, {
      headers: {
        'X-Master-Key': masterKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Verificar la estructura de los datos recibidos
      
      // Llamar a la función para mostrar los datos en una tarjeta
      mostrarDatos(data.record);
    })
    .catch(error => {
      console.error('Error al obtener datos desde JSONBin:', error);
    });
  
    // Función para mostrar los datos en una tarjeta
    function mostrarDatos(data) {
      const container = document.getElementById('results');
      if (!container) {
        console.error('El contenedor #results no se encontró en el DOM.');
        return;
      }
  
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar tarjetas
  
      // Crear tarjeta para mostrar los datos
      const card = document.createElement('div');
      card.classList.add('col', 'mb-4');
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.content}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    }
  });
  
  