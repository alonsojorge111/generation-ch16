/* URL A CONSUMIR */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"

/* ELEMENTOS DEL DOM */
const listaHabilidades = document.getElementById("lista-habilidades");






/* FUNCIONES */

async function obtenerPokemon(url) {
    const respuestas = await fetch(url)
    const datos = await respuestas.json()
    
    const pokemon ={
        nombre: datos.forms[0].name,
        habilidades: datos.ablities,
        numero:datos.id,
        tipos:datos.types,
        imagen:datos.sprites.other["official-artwork"].front_default
    }
    console.log(pokemon.imagen);

}

obtenerPokemon(urlPokemon)