function addItem() {
  var lista = document.getElementById("lista");
  var newItem = document.createElement("li");

  var itemCount = lista.getElementsByTagName("li").length + 1;
  newItem.textContent = "Elemento " + itemCount;

  newItem.classList.add("list-group-item"); // Clase Bootstrap para estilizar el elemento
  lista.appendChild(newItem);
}
