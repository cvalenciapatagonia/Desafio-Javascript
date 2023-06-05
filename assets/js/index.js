// Declarando Variables
const calculateButton = document.querySelector("button");
const totalElement = document.querySelector(".total");
const amountElement = document.querySelector(".amount");
const colorObject = document.querySelector(".color-object");
const colorInput = document.querySelector(".color");

// Funcion a boton Calculate
calculateButton.addEventListener("click", function() {
  
  // Recepcion de valores
  const cantidadInput = document.querySelector(".cantidad");
  const cantidad = parseInt(cantidadInput.value);
  const color = colorInput.value;

//Funciones matematicas
  const price = 1099;
  const total = cantidad * price;

  // Resultados
  totalElement.innerHTML = total;
  amountElement.innerHTML = cantidad;
  colorObject.style.backgroundColor = color;
});