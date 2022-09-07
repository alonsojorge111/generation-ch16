/* TIPO CADENA */

let cadena = 'Esto es una cadena'; //Esto es una cadena prototipo
let cadenaObjeto = new String('Esto es otra cadena objeto');  //new define un objeto y el string define el tipo de dato. Clase se escribe al inicio de su nombre ejemplo: String. Toda esa expresión es un constructor
console.log(cadenaObjeto);
console.log(cadena);


/* TIPO NÚMERICO */

let numero = 13;
let numeroObjeto = new Number(13.13);
console.log(numero);
console.log(numeroObjeto);

/* TIPO COMPUESTO O UNICO: UN ARRAY POR SI SOLO ES UN OBJETO */
let lista = ['2', '3', '5', '7'];
let listaObjeto = new Array ('1', '4', '6', '8', '9');
console.log(lista);
console.log(listaObjeto);

/* TIPO PREDEFINIDO: EL OBJETO YA EXISTE Y NO ES NECESARIO ASIGNAR NADA */

let tiempo = new Date();
console.log(tiempo);
console.log(Math);
let objLiteral = {
    nombre: 'Jorge',
    edad: '26',
}

let objConstructor = new Object();
objConstructor.nombre = 'Dora'
objConstructor.edad = 23;
console.log(objConstructor);
console.log(objLiteral);

