/* FUNCIONES COMO OBJETOS */

function miFuncion(a ,b) {
    let res = 0; //PROPIEDAD
    res = (a * b); //ACCION
    return res;
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString;
console.log(miFuncionTexto);