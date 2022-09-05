//PRIMERA FORMA

function miSuma(a, b) {
  let resultado = a + b;
  console.log("La suma es: " + resultado);
}
miSuma(2, 3);

//SEGUNDA FORMA. SEGUN VICTOR ESTA ES LA MEJOR.
function producto(a, b) {
  return a * b;
}
console.log("El producto es: " + producto(4, 5));

//TERCERA FORMA
let res;

function resta(a, b) {
  return a - b;
}

res = resta(10, 4);
console.log("El resultado es: " + res);



//3 FUNCIONES. QUE ARROJE NUESTRO NOMBRE DECLARANDO 3 VARIABLES, NOMBRE, AP Y AM
//CREAR OTRA FUNCION DONDE SE HAGA UNA OPERACIÓN COCIENTE


let nombre = "Jorge ";
let apePaterno = "Tello ";
let apeMaterno = "Alonso ";

function nombreCompleto(nombre,apePaterno,apeMaterno) {
    return nombre + apePaterno + apeMaterno;
}

console.log("Mi nombre es: " + nombreCompleto(nombre,apePaterno,apeMaterno));


function cociente(a, b) {
    return (a/b);
}

console.log("El cociente es: " + cociente(100, 20));




