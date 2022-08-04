/* CASA DE ESCORPIO */

let numMagico = Math.floor(Math.random()*10);
let numUsuario = Number(prompt("Ingresa un número del 1 al 10; "));

while (numMagico !== numUsuario) {

 if (numUsuario > numMagico) {
    console.log("El número que ingresaste es mayor al número mágico");
    
} else if (numUsuario < numMagico){
    console.log("El número que ingresaste es menor al número mágico");

} else if (numUsuario === numMagico){
    console.log("Felicidades, adivinaste el número mágico");
} else {
    console.log("Número fuera de rango o desconocido. Intenta de nuevo");
}
}
console.log("Juego Finalizado"); 


