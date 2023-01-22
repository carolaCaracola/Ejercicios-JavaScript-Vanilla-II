/* 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizara mediante un método al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.*/

	
let numeroF =parseInt( prompt(" Introduce un numero a factorizar "));
function factorial (numeroF) {
	let total = 1; 
	for (i=1; i<=numeroF; i++) {
		total = total * i; 
	}
	console.log("El resultado de la factorizacion es:"+" " + total ); 
}
    
factorial(numeroF);
