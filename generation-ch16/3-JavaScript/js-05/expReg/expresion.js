/* Las expresiones regulares son utilizados para validar información o sustituir información de una cadena
de texto */
//PRIMERA FORMA /str/: te busca la palabra


let texto = "Hoy parece que va a salir el sol";
let buscar = /eo/;

console.log(buscar.test(texto));

let texto2 = "La espero en el aeropuerto de LA";
console.log(buscar.test(texto2));

//SEGUNDA FORMA /[str]/ te busca por caractere

let texto3 = "Los numeros primos son 2357 dentro de los 10 primeros numeros";
let buscar3 = /\d{3}/;

console.log(buscar3.test(texto3));




