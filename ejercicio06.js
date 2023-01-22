/* 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
pasando el número por parámetro devolverá el número de cifras.*/

let numC = prompt("Introduce un número entero positivo para saber cuantas cifras tiene");
let nCifras = Array.from(numC);

alert(nCifras.length);
