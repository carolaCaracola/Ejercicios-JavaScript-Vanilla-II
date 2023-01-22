/* 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
método para rellenar el array(que tenga como parámetros los números entre los que
tenga que generar) y otro para mostrar el contenido y la suma del array.*/

     
let array = [];
let y;
let tamanyo = prompt("Introduce tamaño del array");
tamanyo = parseInt(tamanyo);
let suma = 0;

for (let y = 1; y <= tamanyo; y++) {
    array.push(parseInt(Math.random() * (10 - 0)));
}
array.forEach(tamanyo => {
    suma = suma + tamanyo;
});

console.log("El contenido del array es:" +" " + array);
console.log("La suma del array es:" +" " + suma);   
