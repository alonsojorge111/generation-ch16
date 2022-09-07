/* FUNCIONES : PEDAZO DE CODIGO REUTILIZABLE

function add (a,b) {
    return a + b;
}

add = nombre
a,b = parametros
return = retorno
{} = Cuerpo

function suma (){ //DENTRO DE LAS LLAVES ESTA LO QUE QUIERO QUE SE REPITA
console.log("Voy a sumar");
console.log("El resultado de la suma es:", (10+1));
} //NO IMPRIME NADA PORQUE SOLO LLAMÉ A LA MAQUINA PERO NO LE DIJE QUE HACER

suma() // AQUI YA LE DIJE QUE HACER O QUE VA A COPIAR
suma()
*/

/*function sumar (numero1 , numero2){
    console.log("Voy a sumar");
    console.log("El resultado de la suma es:", (numero1 + numero2));
    }

    sumar(4 , 5); 
    sumar(11 , 11)
    sumar(16 , 5)
  */

//SI QUIERO QUE EL SUELDO CAMBIE Y LOS DIAS
function calculadora_sueldo(sueldo_ingresado, dias_trabajados) {
let nombre = prompt("Escribe tu nombre");
console.log(nombre);

const sueldo = sueldo_ingresado;
const dias_semana = dias_trabajados;
const semana_mes = 4;

console.log("Sueldo Semanal:" + (sueldo*dias_semana));
console.log("Sueldo Mensual:" + (sueldo * dias_semana * semana_mes));
}

//calculadora_sueldo(100,2);
//calculadora_sueldo(1,6);
//calculadora_sueldo(50,1);



