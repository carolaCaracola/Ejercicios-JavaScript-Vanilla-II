/* 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido
pedirá los valores necesarios para calcular el área. Para ello has de crear un método
por cada figura para calcular cada área, este devolverá un número real. Muestra el
resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado*/ 

let calcularArea = prompt("Introduce una figura: circulo, triangulo o cuadrado ");

if (calcularArea.toLowerCase() == "circulo"){

   let radio= prompt("Introduce el radio del circulo ");
   const PI = "3.14";
   let num = parseFloat(PI)

   let areaCirculo = (radio*radio) *PI;

   console.log ("El area del circúlo introducido es:" + " " + areaCirculo + "cm"); 

} else if (calcularArea.toLowerCase() == "triangulo"){
    let b= prompt("Introduce la base del triangulo");
    let h= prompt("Introduce la altura del triangulo ");

    let areaTriangulo = (b*h) / 2;

   console.log ("El area del triangulo introducido es:" + " " + areaTriangulo + "cm"); 
   
}else if (calcularArea.toLowerCase() == "cuadrado"){
    let l1= prompt("Introduce un lado del cuadrado");
    let l2= prompt("Introduce otro lado del cuadrado");

    let areaCuadrado = l1*l2;

   console.log ("El area del cuadrado introducido es:" + " " + areaCuadrado + "cm"); 
}else{
    console.log ("No es una figura valida"); 

}