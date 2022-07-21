/*
CONTROL DE FLUJO

if (condicion) {
    codigo a ejecutar, si la condicion se cumple;
} else if (condicion 2) {
    codigo a ejecutar si la condicion 2 se cumple;
}else if (condicion 3){
    codigo a ejecutar si el codigo 3 se cumple;
} else {
    codigo a ejecutar si la condicion 3 tampoco se cumple;
}

let edad = parseInt("23") ---------------> el parseInt o parseFloat convierte un str a numero
console.log(edad); 

*/

//let nombre = "Jonathan Yair";


let nombre = prompt("Escribe tu nombre");
console.log(nombre);

let edad = parseInt(prompt("Escribe tu edad"));
console.log(edad);

if (nombre === "Jonathan Yair" && edad === 26) { //USAR AND U OR
  console.log("Eres un maestro");
} else if (nombre === "Magali") {
  console.log("Eres una mentora");
} else if (nombre === "Jorge Alonso") {
  console.log("Eres un alumno");
} else {
  console.log("No perteneces al curso");
}
console.log("Fin del programa");

