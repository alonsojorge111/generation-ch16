//VARIABLE QUE SIMULA LOS DATOS PEDIDOS
const saludo = "Hola Mundo";
const datos = [
  {
    nombre: "Jorge",
    apellido: "Alonso",
  },
  {
    nombre: "Jorge",
    apellido: "Alonso",
  },
  {
    nombre: "Jorge",
    apellido: "Alonso",
  },
];

//FUNCION PARA SIMULAR UNA PETICION
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve(datos);
      } else {
        reject("No se puede obtener datos");
      }
    }, 2000);
  });
}

//FORMA 1

obtenerDatos()
  .then((datos) => {
    //THEN SE OCUPA CUANDO LA PROMESA SE RESUELVE
    console.log(datos);
  })
  .catch((error) => {
    console.log(error);
  });

//FORMA 2: FUNCIONES ASINCRONAS - AWAIT ASYNC. MAS FACIL. TRY-CATCH PARA MANEJAR EL ERROR

async function funcionAsincrona() {
  try {
    const datos = await obtenerDatos();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}

funcionAsincrona();
