/* CASA DE TAURO */

let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log(carreritas);

//A) Andrea adelanta a Maria

carreritas.splice(2, 0, "Andrea");
carreritas.splice(5, 1);
console.log(carreritas);

//B) Jose es descalificado de la carrera

carreritas.pop();
console.log(carreritas);

//C) Detrás de Lucia y antes de Roberto se clasifican tres nuevos corredores: Cristobal, Fernanda y Armando

carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando");
console.log(carreritas);

//D) Hay un nuevo concursante que toma primer puesto: Federico

carreritas.unshift("Federico");
console.log(carreritas);

/* CASA DE CÁNCER */

//1) CELSIUS A KELVIN

let valor = parseInt(prompt("Ingresa un valor en grados Celsius: "));

function convKelvin(valor) {
    let resultado = (valor + 273.15 );
    return resultado;
}
alert(convKelvin(valor));

//2) CELSIUS A FAHRENHEIT

let valor2 = parseInt(prompt("Ingresa un valor en grados Celsius: "));

function convFahrenheit(valor2) {
    let resultado2 = ((valor2 * 1.8) + 32);
    return resultado2;
}
alert(convFahrenheit(valor2));



/* CASA DE VIRGO */

let wPayaso = 112;
let wMuneca = 75;
let ventPayaso = parseInt(prompt("¿Cuantos payasos de juguete requieres: "));
let ventMuneca = parseInt(prompt("¿Cuantas muñecas de juguete requieres: "));

function wTotal(wMuneca, wPayaso) {
    let pesPayaso = (wPayaso * ventPayaso);
    let pesMuneca = (wMuneca * ventMuneca);
    return (pesPayaso, pesMuneca);
}
alert(wTotal( wMuneca, wPayaso));
alert(wTotal(wPayaso, wMuneca));

let pesoMuneca = wTotal( wMuneca, wPayaso);
let pesoPayaso = wTotal(wPayaso, wMuneca);
let wMax = 1000;

function numPaq(pesMuneca, pesoPayaso) {
    let paqMuneca = (pesoMuneca / wMax);
    let paqPayaso = (pesoPayaso / wMax);
    sumaPaq = Math.round((paqMuneca + paqPayaso));
    return sumaPaq; 
}
alert(numPaq(pesoMuneca, pesoPayaso));


/* CASA DE ESCORPIO */

let numMagico = Math.floor(Math.random()*10);
let numUsuario = Number(prompt("Ingresa un número del 1 al 10; "));

if (numUsuario > numMagico) {
    console.log("El número que ingresaste es mayor al número mágico");
    
} else if (numUsuario < numMagico){
    console.log("El número que ingresaste es menor al número mágico");

} else if (numUsuario === numMagico){
    console.log("Felicidades, adivinaste el número mágico");
} else {
    console.log("Número fuera de rango o desconocido. Intenta de nuevo");
}
console.log("Juego Finalizado"); 
    








 











