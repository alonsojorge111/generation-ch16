//PRIMERA FORMA /str/: te busca la palabra

let texto = "Hoy parece que va a salir el sol";
let buscar = /eo/;

console.log(buscar.test(texto));

let texto2 = "La espero en el aeropuerto de LA";
console.log(buscar.test(texto2));

//SEGUNDA FORMA /[str]/ te busca por caractere

let texto3 = "Te marqué anoche";
let buscar3 = /[eo]/;

console.log(buscar3.test(texto3));


