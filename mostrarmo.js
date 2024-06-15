import { cconexion } from './claseconexion.js';
let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

document.addEventListener('DOMContentLoaded', async function() {
  //if (localStorage.getItem('autenticado') !== 'true') {
    // Redirigir a la página de inicio de sesión si no está autenticado
    //window.location.href = 'login.html';
  //}
   const binId = '666f131ee41b4d34e4041ea3'; // ID del bin en JSONBin
  const masterKey = '$2a$10$B932aYdxH1HrrkOGgNwB6.SPPh0Fr8LqJYq3hAUzjqP6w.cr9bVdK'; // Master Key de JSONBin

  // URL para obtener los datos del bin específico
  const apiUrl = `https://api.jsonbin.io/v3/b/${binId}/latest`;
  const resultadosElement = document.getElementById('resultado');
  resultadosElement.innerHTML = ''; // Limpiar el contenedor antes de agregar las tarjetas


  try{
  const conexion01 = new cconexion(binId, masterKey);
  const comidas = (await conexion01.checkconexion()).data.record.comidas;
  const exitoso = (await conexion01.checkconexion()).exito;
  resultadosElement.innerHTML=`Conexion: ${exitoso}`;

  const container = document.getElementById('results');
  container.innerHTML = ''; // Limpiar el contenedor antes de agregar las tarjetas
  comidas.forEach(comida => {
    const card = document.createElement('div');
    card.classList.add('col', 'mb-4'); // Clases para las columnas y margen inferior
    card.innerHTML = `
      <div class="card">
      <img src="${comida.imageurl}" class="card-img-top" alt="${comida.title}">
        <div class="card-body">
          <h5 class="card-title">${comida.title}</h5>
          <p class="card-text">Precio: $ ${comida.precio}</p>
          </div>
      </div>
      <div class="card-footer">
      <button class="btn btn-primary agregar-btn">Agregar</button>
          </div>
    `;
    container.appendChild(card);

    //toda la logica de carrito
    card.querySelector('.agregar-btn').addEventListener('click', () => {
      agregarAlCarrito(comida);
    });
    

  });

} catch (error) {
  console.error('Error al obtener datos desde JSONBin:', error.message);
  mostrarError();
}

function agregarAlCarrito(comida) {
  if (carrito[comida.title]) {

    carrito[comida.title].cantidad++;
  
  } else {
    carrito[comida.title] = {
      title: comida.title,
      precio: comida.precio,
      cantidad: 0
    };
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));	

  console.log(`Artículo agregado al carrito: ${comida.title}`);
  //actualizarCarrito();
}




    

 

  // Función para mostrar un mensaje de error en caso de fallo en la solicitud
  function mostrarError() {
    const container = document.getElementById('results');
    if (!container) {
      console.error('El contenedor #results no se encontró en el DOM.');
      return;
    }

    container.innerHTML = '<p>Error al cargar los datos desde JSONBin.</p>';
  }
});