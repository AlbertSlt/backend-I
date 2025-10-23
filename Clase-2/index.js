/*
import { edad, nombre, saludar } from "./constants.js" //AGREGAR EXTENSION, LA IMPORTACION AUTOMATICA NO LO PONE

console.log("hola mundo")
*/

/*
require ("./mi-archivo.js")
*/

/*
console.log (edad, saludar) // selecciono la variable y aprieto CTRL ALT L y da como resultado lo de abajo
console.log("🚀 ~ edad:", edad)

saludar()
*/
/* 

Operaciones asincronicas: promesas, solicitudes a apis/fetch, eventos

Timers, por ej: setTimeout, setInterval, setImmediate
Eventos/triggers: click - submit - change
Recursos: peticion a api - lectura de archivo - etc

*/

/*
setTimeout(() => {
    console.log("1")
}, 5000);

setTimeout(function () {
    console.log("2")
}, 2000);

console.log("3")
*/



/* 
document.addEventListener("click",()=>{})
*/


/*
//fetch toma 2 parametros
//bla bla, asincronico, en el siguiente caso se mostrara primero console log 2
fetch("https://jsonplaceholder.typicode/users")
    .then(() => {
    console.log("1")
})


console.log("2")
*/


// const usuarios = [
//     { id: 1, nombre: "a" },
//     { id: 2, nombre: "b" },
//     { id: 3, nombre: "c" }
// ]

//promesas, envolver algo en una promesa para hacerla asinc

// function traerUsuarios() {

//     const promesa = new Promise((res, rej) => {

//         setTimeout(() => {

//             const unNumeroRandom = Math.random() //0-1

//             if (unNumeroRandom > 0.5) {
//                 res()
//             } else {
//                 rej()
//             }

//             res()
//         }, 1000)
//     })

//     return promesa
// }

//LAS PROMESAS STANDAR, ES DECIR SIN ASYNC AWAIT, SIEMPRE DEBEN RESOLVERESE CON THEN Y CATCH! (no con try catch, este lo maneja de manera sincronica y termina en error cuando la promesa falla)
//Si la promesa SI USA ASYNC AWAYT, Ahi SI puedo usar Try Catch

//la const resultado devuelve una promesa, a cualquier promesa le podemos hacer then y catch


// resultado
//     .then(function () {
//         console.log("Salio bien")
//     })
//     .catch(function () {
//         console.log("salio mal")
//     })

//--------Todo lo que va dentro del bloque try, en este caso, se toma como sincronico, NO es conveniente

// try {
//     const resultado = traerUsuarios() //aca se ve la pausa
//     console.log("salio todo bien")
// } catch (error){
// console.log("🚀 ~ error:", error)
// }


// console.log("🚀 ~ resultado:", resultado) //undefined si la funcion esta pelada






//async await
//en funcion flecha: const traerUsuariosAsync = async ()=>{}

// async function traerUsuariosAsync() {
//     try {
//         const resultado = await traerUsuarios() // como sé que es una promesa, debo pobner el await delante
//         console.log("salio todo bien")
//     } catch (error) {
//         console.log("salio todo mal")
//     }
// }

// const resultado = traerUsuariosAsync()


//clases son funciones un poco mas preparadas para determinadas situaciones
//tambien tiene retorno implicito,  un OBJETO

/*
//las clases son funciones al igual que: (solo que con mas codigo interno)
const Persona = () => { }
//esta funcion se llama asi: 
Persona()

function Persona() { }
//esta funcion se llama de cualquiera de estas dos maneras:
Persona()
new Persona ()
*/

class Persona { }

//ejecutar una clase con la palabra new
const resultado1 = new Persona() //retorna {}
console.log("🚀 ~ resultado1:", resultado1)
