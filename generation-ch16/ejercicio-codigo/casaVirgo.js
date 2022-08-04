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