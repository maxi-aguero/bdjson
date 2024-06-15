    var valorSignIn = localStorage.getItem("signin");

    // Verificamos si el valor no es nulo
    if (valorSignIn !== null) {
      // Mostramos el valor en la página
      document.getElementById("valorsignin").innerHTML = "Usuario: " + valorSignIn;
    } else {
      // Si el valor es nulo, mostramos un mensaje indicando que no se encontró un valor
      document.getElementById("valorsignin").innerHTML = "No hay ningun usuario loguado.";
    }
  