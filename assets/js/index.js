// Declarando Variables
const amountInput = document.querySelector(".amount-input");
const colorInput = document.querySelector(".color-input");
const calculateButton = document.querySelector("button");
const totalElement = document.querySelector(".total");
const amountElement = document.querySelector(".amount");
const colorObject = document.querySelector(".color-object");

// Funcion a boton Calculate
calculateButton.addEventListener("click", function() {
  
  // Recepcion de valores
  const amount = parseInt(amountInput.value);
  const color = colorInput.value;

//Funciones matematicas
  const price = 1099;
  const total = "$ " + amount * price;

  // Resultados
  totalElement.innerHTML = total;
  amountElement.innerHTML = amount;
  colorObject.style.backgroundColor = color;
});

