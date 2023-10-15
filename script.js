document.getElementById("mostrarBoton").addEventListener("click", function() {
    let elementoOculto = document.getElementById("elementoOculto");
    if (elementoOculto) {
      elementoOculto.classList.toggle("d-none"); // Eliminar la clase d-none para mostrar el elemento
    }
  });