/* 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un
String con el numero convertido a binario. Para convertir un número decimal a
binario, debemos dividir entre 2 el número y el resultado de esa división se divide
entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
cada división formara el número binario, de abajo a arriba.*/
let numeroB = prompt(" Introduce un numero que quieras convertir en binario ");
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
