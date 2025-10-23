// const elArchivo = require("./constants.js")


// console.log("Hola culo");
// console.log(elArchivo.nombre);


// Ahora con destructuring


// const { nombre } = require("./constants.js"); //<---- esto no funciona en type module, se cambia por el siguiente import

import {nombre} from "./constants.js"

console.log("Hola culo");
console.log({nombre}.nombre)