/* Mario quiere averiguar si un numero es divisible entre 7 y 8. Ayuda a Mario a escribir una funcion que tome
un numero. Si el numero es divisible entre 7 y 8, el programa debe retornar verdadero. Si el numero no es
divisible entre 7 y 8, retornar falso.
*/

function divisible () {
let numeroIngresado = parseInt(prompt("Hola Mario, ingresa un número por favor: "));
if(numeroIngresado % 7 == 0 && numeroIngresado % 8 ==0){
    console.log("Verdadero");
    return true;
}else{
    console.log("Falso");
   return false;
}
}
divisible();