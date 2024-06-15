
document
	.getElementById("registroForm")
	.addEventListener("submit", function (event) {
		let correo = document.getElementById("email").value.trim();

		let correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		if (!correoRegex.test(correo)) {
			alert(
				"Por favor, introduce una dirección de correo electrónico válida."
			);
			event.preventDefault(); // Previene el envío del formulario
		} else {

			let estacorreo=document.getElementById("email").value;
			let esta=(localStorage.getItem(estacorreo)!=null );
			if(esta){
					alert("Error, no puede registrarse con un email registrado.");
			}
			else{
				let contrasenia = document.getElementById("password").value;
				let nombreusuario = document.getElementById("nombre").value;
				//guardar nombre
				// Crear un objeto con los valores
				let userdata = {
					nombre: nombreusuario,
					correo: correo,
					password: contrasenia
				};
			
				// Convertir el objeto a una cadena JSON y almacenarlo en localStorage
				localStorage.setItem(correo, JSON.stringify(userdata));		

				alert("Se ha registrado con exito, ya puede iniciar sesión.");
			}
		


		}
	});