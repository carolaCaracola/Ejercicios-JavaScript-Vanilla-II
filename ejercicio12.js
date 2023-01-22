 /*12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un

JavaScript Vanilla Basics

array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
155, 25, etc.*/
  
let sizes = parseInt(prompt("Introduce el tamaño del array:"));
let digit = prompt("Introduce en que numero quieres que acaben lo digitos mostrados:");

// Controlar que se introduce un numero correcto
if (isNaN(digit) || digit.length !== 1) {
  alert("Por favor introduzca un digito correcto.");
}

// Metodo para crear el array
let numbers = Array.from({length: size}, () => Math.floor(Math.random() * 300) + 1);
console.log("array Original: " + numbers);

// Filtrar los numeros que acaben en el digito indicado
let filteredNumbers = numbers.filter(num => num.toString().endsWith(digit));
console.log("numeros que terminan en este digito: " + filteredNumbers);

