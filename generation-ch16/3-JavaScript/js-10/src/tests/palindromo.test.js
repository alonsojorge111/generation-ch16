const palindromo = require('../js/palindromo.js');

describe('Pruebas de la función palindromo', () => {
    test('Debe regresar "Es un palindromo" si ingresamos ojo',() => {
        let mensaje = 'Es un palindromo'
        let palabra = 'ojo';
        
        expect(palindromo (palabra)).toBe(mensaje);
    })
    test('no debe de regresar "No es un palindromo" al ingresar generation', () => {
        let mensaje = 'Es un palindromo';
        let palabra = 'generation';

        expect( palindromo(palabra) ).not.toBe(mensaje)
    })
    test('Al ingresar un número debe regresar el mensaje', () => {
        let mensaje = 'No es una palabra';
        let valor = 2;

        expect(palindromo(valor)).toBe(mensaje);
    })
});

