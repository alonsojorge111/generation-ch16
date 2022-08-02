/* AGREGAR "use strict" siempre al inicio del codigo */

/* TIPO DE DATOS */

/* TIPO DE VARIABLES */

let a;
const b = 0;
var c;

/* STRING */

let cadena = "Hola Mundo";

/* NUMBER */

let numero = 5;

/* BOOLEANO */

let buleano = true;
let buleano2 = true;

/* UNDEFINED */

let variable;

/* NaN - Not a Number: No es un número
Trata de realizar alguna operación aritmética con algun dato que no es un número */

/* Null */
let vacio = null;

/* ARREGLOS */

let arr = [1, "A", null, undefined, [true, false]];

let arr2 = new Array();

//ACCEDER A POSICIONES DE UN ARRAY

console.log(arr[4][0]);

//OBJETOS
//CLAVE/VALOR

const persona = {
  nombre: "Raúl",
  edad: 31,
  hobbies: ["Leer", "Ver Sherk 1 y 2", "Comer"],
  auto: {
    marca: "VW",
    modelo: "Pointer",
    año: "2000",
  },
  saludar: function(){
    return "Hola"
  }
};

console.log(persona.hobbies[1]); //NOMBRAR UN OBJETO POR SUS ATRIBUTOS

console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(persona.saludar());

console.log(`La acción que realizo es ${persona.saludar()}`);
