/* 11Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
los valores del segundo array con valores aleatorios. Después, crea un método que
tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
el contenido de cada array.*/

let tamano = parseInt(prompt("Introduce la dimension del array"));
let numX;

const nRandom = ()=>{numX= Math.floor(Math.random() * tamano)
    return numX;}

    let array1 = Array.from({length: (tamano)}, () => Math.floor(Math.random() * tamano));

    let array2 = array1.slice();
    array1.sort();

console.log(array1);
console.log(array2);

const multiplyArrays = (array1, array2) => {
    let result = array1.map((val, index) => val * array2[index]);
    console.log(result);
  }
  multiplyArrays(array1, array2);
