//CALCULADORA DE PORCENTAJES (60%)

function calcularPorcentaje (numero, porcentaje) {
    let resultado = numero * porcentaje;
    return {resultado, numero, porcentaje}


}
let resultadoPorcentaje = calcularPorcentaje(100,0.40);
console.log(resultadoPorcentaje);
