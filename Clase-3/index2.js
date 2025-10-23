

//una clase no deja de ser una funcion

// los objetos se pasan por referencia




/*
class Persona {
    //ATRIBUTOS SE ESCRIBEN ARRIBA, son como cosas tangibles de lo que representa la clase
    //nombre, edad, dni, por ej.

    //metodo constructor, es una funcion interna de una clase, se escribe sin la palabra function al inicio
    constructor() {
        this.nombre = "";
}
    //METODO, son funciones que se pueden hacer, algo mas bien general, todas las instancias pueden hacerlo, todas las personas pueden saludar, comer, etc.
}



const persona_1 = new Persona() //los parentesis son para pasar parametros
const persona_2 = new Persona()

console.log(persona_1) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}
console.log(persona_2) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}

persona_2.nombre = "juan"

console.log(persona_1) //{} - despues de usar this.nombre = "" pasa a ser {nombre: ""}
console.log(persona_2) //  {nombre: juan}
*/


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

