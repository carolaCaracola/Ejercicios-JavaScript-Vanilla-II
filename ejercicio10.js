/* 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indicar cual
es el mayor de todos. Haz un método para comprobar que el número aleatorio es
primo, puedes hacer todos los métodos que necesites.*/

let size = prompt("Introduce el tamaño del array");
size = parseInt(size);
let primoB = true;
let arrayB = [];
let numB;
let j;

const numRandom = () => {
    numB = Math.floor(Math.random() * (100 - 3) + 3);
    return numB;
}

const calculaPrimo = (valor) => {
        primoB = true;
    for (let j = 2; j < valor; j++) {
    if (valor % j == 0) {
        primoB = false;
            
        }
    }
}

const añadirArray = () => {
    while (arrayB.length < size) {
        calculaPrimo(numRandom());
        if (primoB) {
            arrayB.push(numB);
        }
   
}
}

añadirArray();

console.log(arrayB);
console.log("El mayor de los numeros del array es:"+ " " + Math.max(...arrayB));
