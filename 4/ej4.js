var isTextVisible = false; // Variable global para controlar la visibilidad del texto

function toggleText() {
  var extraText = document.querySelector(".additional");
  var linkText = document.getElementById("toggle-link");

  if (!isTextVisible) {
    extraText.classList.remove("hidden");
    extraText.classList.add("visible");
    linkText.innerHTML = "Ocultar exceso de texto";
    isTextVisible = true; // Actualizamos la variable global
  } else {
    extraText.classList.remove("visible");
    extraText.classList.add("hidden");
    linkText.innerHTML = "Seguir leyendo";
    isTextVisible = false; // Actualizamos la variable global
  }
}
