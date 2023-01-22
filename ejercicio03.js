/* 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
pasamos por parámetro para que nos indique si es o no un número primo, debe
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
embargo, 17 si es primo.*/

let numero =parseInt( prompt(" Introduce un numero "));
function primo(numero) {

     for (let i = 2; i < numero; i++) {
  
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

