document
	.getElementById("inicioSesionForm")
	.addEventListener("submit", function (event) {

		let correo = document.getElementById("email").value.trim();
		let contrasenia = document.getElementById("password").value;

		let usuarioRecuperado = JSON.parse(localStorage.getItem(correo));
		
		if ( usuarioRecuperado=== null) {
			alert("Correo electrónico no registrado.");
			event.preventDefault();
		}
		else if (usuarioRecuperado.password !== contrasenia) {
			alert("Contraseña incorrecta.");
			event.preventDefault();
		} else {
			window.location.href="./index.html"
			alert("Bienvenido "+usuarioRecuperado.nombre);
			localStorage.removeItem("signin");
			localStorage.setItem('signin', usuarioRecuperado.nombre);		


		     }
	}

		);
