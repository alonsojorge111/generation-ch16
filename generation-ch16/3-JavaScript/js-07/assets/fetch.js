//FETCH PERMITE CONSUMIR RECURSOS DE INTERNET




const url = "https://dog.ceo/api/breeds/image/random"

//RESPUESTA DE LA PETICION
fetch(url).then((respuesta) =>{
    console.log(respuesta);
})

//OBTENER LA INFORMACION DE LA PETICION

/* FORMA 1 */

fetch(url)
.then((respuesta) => respuesta.json())
.then((datos) => {
    console.log(datos);
}).catch((error) =>{
    console.log(error);
})



/* FORMA 2 */

 async function obtenerPerritoAleatorio() {

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json()
        console.log(datos);
    }catch(error){
        console.log(error);
    }
}

obtenerPerritoAleatorio()


