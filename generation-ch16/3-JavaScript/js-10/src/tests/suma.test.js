const suma = require('../js/suma');

//PEDIR UN VALOR ESPERADO Y DESPUES SE COMPARA EL RESULTADO CON EL VALOR ESPERADO

test('sumar 1 + 2 debe ser 3', () => {
    expect(suma(1, 2) ).toBe(3);

});

test('1 + 4 no debe ser 0', () => {
    expect(suma(1, 4).not.toBe(0));

});