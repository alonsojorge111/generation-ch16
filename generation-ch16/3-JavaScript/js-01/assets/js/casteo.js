'use strict'

/* CONVERSION DE TIPOS EN JS O CASTEO--- COERCION DE TIPOS EN JS: conversion automatica o implicita de valores de un tipo de dato a otro*/

//Conversion de tipo de datos o casteo o parseo

let num = "5";
let num2 = "10";

console.log(num - num2);

//COERSION DE TIPO DE DATOS: CONVERSION AUTOMATICA DE DATOS

/* NUMBER(): CONVERTIR STR O BOOLEAN A NUMERO */

let num3 = Number("56.4")
console.log(num3);

//STRING(): CONVERTIR NUMERO Y BOOLEAN A STRING

let num4 = String(4);
console.log(typeof(num4));

//Boolean(): CONVERTIR STR Y NUMERO A BOOLEAN

let num5 = Boolean(NaN);
console.log(num5);