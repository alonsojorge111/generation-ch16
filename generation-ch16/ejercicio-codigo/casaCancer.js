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