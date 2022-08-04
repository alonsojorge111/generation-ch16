/* CONDICIONALES */

/* IF-ELSE IF-ELSE */

let condicion = "A";

if (condicion === "A") {
  console.log("ENTRÓ EN LA CONDICION A");
} else if (condicion === "B") {
  console.log("ENTRÓ EN LA CONDICION B");
} else if (condicion === "C") {
  console.log("ENTRÓ EN LA CONDICION C");
} else {
  console.log("NO ENTRÓ EN NINGUNA CONDICION");
}

function dividir(a, b) {
  if (b === 0) {
    console.log("No se puede realizar la operación");
  } else {
    console.log(a / b);
  }
}
dividir(10, 2);

/* SWITCH: SE UTILIZA PARA EVALUAR EXPRESIONES */

let nuevaCondicion = "Saludos";

switch (nuevaCondicion) {
  case "Hola":
    console.log("Buenos días, espero que te encuentres bien");
    break;
  case "Adios":
    console.log("Nos vemos");
    break;
  case "Saludos":
    console.log("Te mando un saludo");
    break;
  default:
    console.log("No entendi tu mensaje");
}

