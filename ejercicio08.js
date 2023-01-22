/* 8.Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
rellenar valores y otro para mostrar.*/

let arrayC = [];
let x;

for (let x = 1; x <= 10; x++) {
    arrayC.push(prompt("Introduce el número " + x + " del array."));
}

for (let x = 0; x < arrayC.length; x++) {
    console.log(arrayC[x] + " es el valor de la posición " + x + " del array.");
}