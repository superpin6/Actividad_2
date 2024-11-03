function toggleVisibility(linkElement) {
    var content = linkElement.previousElementSibling;
  
    if (content.style.display === "none") {
      content.style.display = "block";
      linkElement.innerHTML = "Ocultar contenidos";
    } else {
      content.style.display = "none";
      linkElement.innerHTML = "Mostrar contenidos";
    }
  }
  