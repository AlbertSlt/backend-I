

//una clase no deja de ser una funcion

// los objetos se pasan por referencia


/* 
class MessageManager{
    constructor() {
        this.id = 1231231 
            }
    enviarTexto() {
        console.log("Enviando wsp...")
        console.log(this)
    }
}

const manager = new MessageManager()
 */
// manager.enviarTexto()
//document.addEventListener("click", manager.enviarTexto) // en un evento, el this cambia al document, porque es el document el que ejecuta la funcion, document es el contexto de la funcion.

/* class Persona {
    //ATRIBUTOS SE ESCRIBEN ARRIBA, son como cosas tangibles de lo que representa la clase
    //nombre, edad, dni, por ej.
    constructor(nombre, callback) {
        this.nombre = nombre;
        this.callback = callback
    } //metodo constructor, es una funcion interna de una clase, se escribe sin la palabra function al inicio

    //METODO, son funciones que se pueden hacer, algo mas bien general, todas las instancias pueden hacerlo, todas las personas pueden saludar, comer, etc.
    enviarMensaje() {
        // const manager = new MessageManager()
        // manager.enviarTexto()
        this.callback()
    }
}  
    
function handleSendText() {
    manager.enviarTexto() //esta linea, que sabemos que funciona, la envuelvo en una handle
}*/


/*     const persona = new Persona("Horacio", handleSendText) //el 2do parametro es un envoltorio, funcion de arriba que envuelve la linea que sabemos que funciona
persona.enviarMensaje() */




/* const persona = new Persona("Horacio")
persona.enviarMensaje()

const persona_1 = new Persona() //los parentesis son para pasar parametros
const persona_2 = new Persona()

console.log(persona_1) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}
console.log(persona_2) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}

persona_2.nombre = "juan"

console.log(persona_1) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}
console.log(persona_2) //  {nombre: juan} */



//this: Contexto de funcion* no siempre
//contexto de una funcion = el objeto que contiene a la funcion

//console.log(this)


// const persona = {
//     nombre: "al",
//     saludar: function () {

//         const self = this
//         console.log(self)

//         setTimeout(function () {
//             console.log(self)
//         },0)*/
//         setTimeout(() => {
//             console.log(self)
//         },0) //la funcion flecha cancela el cambio de la varible this
//     }
// }

// persona.saludar()


/* function saludar(nombre, edad) {
    console.log(this)
    console.log(`Hola, soy ${ nombre } y tengo ${edad}`)
}

saludar("horacio", 35)
//las funciones call y call hacen lo mismo, se escriben diferente: 
saludar.call("call", "horacioCall", 35) //el primer parametro que paso al call, sera el valor de this, se transforma en objeto. DEL SEGUNDO VALOR EN ADELANTE SERAN LOS PARAMETROS DE LA FUNCION ORIGINAL
saludar.apply("apply", ["horacioApply", 35]) //en apply, se mantiene el orden de los parametros de la funcion pero dentro de un array, por fuera queda la definicion del this

const saludar_2 = saludar.bind("bind", "horacioBind", 35) //bind hace una copia exacta de la funcion, no la ejecuta, la deja pregrabada con sus parametros, y luego la mando a ejecutar sin tener que pasarle parametros

console.log(saludar)
console.log(saludar_2)
saludar_2() */

//Variables Primitivos: String Number, boolean, undefined, null, symbol <--- todo lo que no sea esto, pasa a ser un objeto!



// ----------------ACA EMPIEZA NODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE------------------

//sintaxis vieja --> const fs = require("node:fs/promise")

import fs from "fs/promises"

/* function leerMensajesOld() {
    fs.readFile("info.txt", {encoding: "utf-8"})
        .then(function (data) {
            console.log(data)
        })
        .catch(function () {
            console.log("hubo un error")
        })
} */


/* async function leerMensajesAsync() {
    try {
        const data = await fs.readFile("info.txt", { encoding: "utf-8" })
        console.log("🚀 ~ leerArchivoAsync ~ data:", data) //ctrl alt L para el console rapido
        
    } catch {
            console.log("hubo un error")
        }
} */

/* leerMensajesAsync() 

leerMensajesOld() */

class MessageManager {
    constructor() {
        this.id = Math.random()
        this.messages = []
    }
    enviarTexto() {
        console.log("Enviando wsp...")
        console.log(this)
    }

    async leerMensajesAsync() {
        try {
            const data = await fs.readFile("info.txt", { encoding: "utf-8" })
            console.log("🚀 ~ leerArchivoAsync ~ data:", data) //ctrl alt L para el console rapido
        } catch {
            console.log("hubo un error")
        }
    }


    leerMensajes() {
        fs.readFile("info.txt", { encoding: "utf-8" })
            .then(function (data) {
                console.log(data)
            })
            .catch(function () {
                console.log("hubo un error")
            })
    }
    crearArchivo() {
        fs.writeFile("mensajes.txt", "primer mensaje de prueba")
            .then(function () {
                console.log("Se creo el archivo")
            })
            .catch(function () {
                console.log("hubo un error")
            })

    }
    async crearArchivoAsync() {
        try {
            await fs.writeFile("mensajes.txt", "primer mensaje de prueba")
            console.log("Se creo el archivo")

        } catch {
            console.log("hubo un error")
        }

    }
}

const manager = new MessageManager()
manager.leerMensajesAsync()
manager.leerMensajes()
manager.crearArchivo()
manager.crearArchivoAsync()