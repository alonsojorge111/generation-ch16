/* function miFuncion(a, b) {
    return (a + b);
}
let resultado = miFuncion(3, 6);
console.log("El resultado es: " + resultado);
 */
//FUNCIÓN EXPRESIÓN

let suma = function(a , b){
    return (a+ b);
}
let resultado = suma(4, 5);
console.log("El resultado de la suma es: " + resultado);

//RESTA, PRODUCTO Y COCIENTE

//RESTA

let resta = function(a,b){
    return (a -b);
} 
let resultadoResta = resta(11, 7);
console.log("El resultado de la resta es: " + resultadoResta);

// PRODUCTO

let producto = function(a, b){
    return (a * b);
}
let resultadoProducto = producto(11, 7);
console.log("El resultado del producto es: " + resultadoProducto);

//COCIENTE

let division = function(a ,b){
    return (a / b);
}
let resultadoCociente = division(10, 2);
console.log("El resultado del cociente es: " + resultadoCociente);

/* SELF INVOKING */

(function (a ,b) {
    console.log("El resultado de Self Invoking es: " + (a + b));
})
(4, 5);