// Mensaje al hacer clic en el título
document.querySelector("h1").addEventListener("click", () => {
  alert("¡Bienvenido a mi emprendimiento de impresión 3D!");
});

// Validación del formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if(nombre && email && mensaje) {
    alert(`Gracias ${nombre}, recibí tu consulta: "${mensaje}". Te responderé al correo ${email}.`);
    this.reset();
  } else {
    alert("Por favor completá todos los campos");
  }
});
