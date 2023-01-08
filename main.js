/* 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido
pedirá los valores necesarios para calcular el área. Para ello has de crear un método
por cada figura para calcular cada área, este devolverá un número real. Muestra el
resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado*/ 

var calcularArea = prompt("Introduce una figura: circulo, triangulo o cuadrado ");

if (calcularArea.toLowerCase() == "circulo"){

   var radio= prompt("Introduce el radio del circulo ");
   const PI = "3.14";
   var num = parseFloat(PI)

   var areaCirculo = (radio*radio) *PI;

   console.log ("El area del circúlo introducido es:" + " " + areaCirculo + "cm"); 

} else if (calcularArea.toLowerCase() == "triangulo"){
    var b= prompt("Introduce la base del triangulo");
    var h= prompt("Introduce la altura del triangulo ");

    var areaTriangulo = (b*h) / 2;

   console.log ("El area del triangulo introducido es:" + " " + areaTriangulo + "cm"); 
   
}else if (calcularArea.toLowerCase() == "cuadrado"){
    var l1= prompt("Introduce un lado del cuadrado");
    var l2= prompt("Introduce otro lado del cuadrado");

    var areaCuadrado = l1*l2;

   console.log ("El area del cuadrado introducido es:" + " " + areaCuadrado + "cm"); 
}else{
    console.log ("No es una figura valida"); 

}

/*2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
entre que números queremos que los genere, podemos pedirlas al usuario antes de
generar los números. Este método devolverá un número entero aleatorio. Muestra
estos números por consola.*/

var cantidad = prompt("Introduce la cantidad de numeros que quieres que se generen");
var desde = parseInt(prompt("Introduce desde que numero mínimo empezará a generar numeros aleatorios"));
var hasta = parseInt(prompt("Introduce hasta que numero máximo empezará a generar numeros aleatorios"));
var numeros = [];


function numeroAleatorio(cantidad, desde, hasta) {
    for (let i = 1; i <= cantidad; i++) {
        
        numeros.push(parseInt(Math.random() * (hasta - desde) + desde));
    }
}

numeroAleatorio(cantidad, desde, hasta);
console.log(numeros);


/* 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
pasamos por parámetro para que nos indique si es o no un número primo, debe
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
embargo, 17 si es primo.*/

var numero =parseInt( prompt(" Introduce un numero "));
function primo(numero) {

     for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        console.log(numero + " No es un numero primo porque " + i + " es un multiplo");
        return false;
      }
  
    }
  
   if (numero === 1) {
      console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
    } else {
      console.log("Es primo");
      return true;
    }
  
    
  }
  
  primo(numero) 


  /* 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizara mediante un método al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.*/

	
var numeroF =parseInt( prompt(" Introduce un numero a factorizar "));
function factorial (numeroF) {
	var total = 1; 
	for (i=1; i<=numeroF; i++) {
		total = total * i; 
	}
	console.log("El resultado de la factorizacion es:"+" " + total ); 
}
    
factorial(numeroF);

/* 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un
String con el numero convertido a binario. Para convertir un número decimal a
binario, debemos dividir entre 2 el número y el resultado de esa división se divide
entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
cada división formara el número binario, de abajo a arriba.*/
var numeroB = prompt(" Introduce un numero que quieras convertir en binario ");
function convertToBinary1 (numeroB) {
    let num = numeroB;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}
 convertToBinary1(numeroB)

 /* 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
pasando el número por parámetro devolverá el número de cifras.*/

var numC = prompt("Introduce un número entero positivo para saber cuantas cifras tiene");
var nCifras = Array.from(numC);

alert(nCifras.length);

/*7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €*/

let euros = parseFloat(prompt("Introduce los euros a convertir"));
let moneda = prompt("Tipo de moneda: Libras, Dolares o Yenes");
const Libras = 0.86;
const Dolares = 1.28611;
const Yenes = 129.852;

function cambio(euros, moneda) {
    switch (moneda) {
    case "libras":
console.log(euros * Libras);
    break;
    case "dolares":
console.log(euros * Dolares);
    break;
    case "yenes":
console.log(euros * Yenes);
    break;
    default:
alert("Por favor, introduzca un número correcto")
     break;
   
}
}

cambio(euros, moneda);

/* 8.Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
rellenar valores y otro para mostrar.*/

var array = [];
let x;

for (let x = 1; x <= 10; x++) {
    array.push(prompt("Introduce el número " + x + " del array."));
}

for (let x = 0; x < array.length; x++) {
    console.log(array[x] + " es el valor de la posición " + x + " del array.");
}

/* 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
método para rellenar el array(que tenga como parámetros los números entre los que
tenga que generar) y otro para mostrar el contenido y la suma del array.*/

     
var array = [];
var y;
var tamaño = prompt("Introduce tamaño del array");
tamaño = parseInt(tamaño);
var suma = 0;

for (let y = 1; y <= tamaño; y++) {
    array.push(parseInt(Math.random() * (10 - 0)));
}
array.forEach(tamaño => {
    suma = suma + tamaño;
});

console.log("El contenido del array es:" +" " + array);
console.log("La suma del array es:" +" " + suma);   

/* 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indicar cual
es el mayor de todos. Haz un método para comprobar que el número aleatorio es
primo, puedes hacer todos los métodos que necesites.*/

let size = prompt("Introduce el tamaño del array");
size = parseInt(size);
let primoB = true;
let arrayB = [];
let numB;
var j;

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

/* 11Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
los valores del segundo array con valores aleatorios. Después, crea un método que
tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
el contenido de cada array.*/


