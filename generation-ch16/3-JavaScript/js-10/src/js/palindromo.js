const palindromo = (palabra) => {

    if(typeof palabra === 'number'){
        return 'No es una palabra'
    }

    let palabraInvertida = palabra.split("").reverse().join("");
    if (palabra === palabraInvertida) {
        return 'Es un palindromo'
    }else{
        return 'No es palindromo'
    }
}
console.log(palindromo(1));

module.exports = palindromo;