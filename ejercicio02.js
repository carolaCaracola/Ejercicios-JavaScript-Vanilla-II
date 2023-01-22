/*2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
entre que números queremos que los genere, podemos pedirlas al usuario antes de
generar los números. Este método devolverá un número entero aleatorio. Muestra
estos números por consola.*/

let cantidad = prompt("Introduce la cantidad de numeros que quieres que se generen");
let desde = parseInt(prompt("Introduce desde que numero mínimo empezará a generar numeros aleatorios"));
let hasta = parseInt(prompt("Introduce hasta que numero máximo empezará a generar numeros aleatorios"));
let numeros = [];


function numeroAleatorio(cantidad, desde, hasta) {
    for (let i = 1; i <= cantidad; i++) {
        
        numeros.push(parseInt(Math.random() * (hasta - desde) + desde));
    }
}

numeroAleatorio(cantidad, desde, hasta);
console.log(numeros);
