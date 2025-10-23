// //uso de modulo nativo "fs" o sea, file sistem

// //importo el modulo fs
// const fs = require("fs")
 
// //1. Crear y escribir contenido en un archivo
// //writeFileSync requiere dos parametros, 1: el nombre del archivo y 2: el contenido
// fs.writeFileSync('example.txt', 'Este es el contenido incial del archivo')
// console.log('Archivo creado y contenido escrito')

// //2. Leer el contenido del archivo
// const contenido = fs.readFileSync('example.txt', 'utf-8')
// console.log('Contenido del archivo:', contenido)

// //3. Agregar contenido al archivo
// // \n es una nueva linea
// fs.appendFileSync('example.txt', '\nEste es el contenido adicional')
// console.log('Contenido adicional agregado')

// //4. Eliminar el archivo
// fs.unlinkSync('example.txt')
// console.log('Archivo eliminado exitosamente')

//-----------------fs con callbacks y promesas---------------

const fs = require('fs').promises

async function writeFile() {
    const data = 'Contenido para escribir en el archivo'

    try {
        await fs.writeFile('archivo.txt', data)
        console.log('Archivo escrito correctamente')
    } catch (error) {
        console.error("error al escribir el archivo", error)
    }
    
}


async function appendFile() {
    const data = ' - Datos adicionales'

    try {
        await fs.appendFile('archivo.txt', data)
        console.log('Archivo modificado correctamente')
    } catch (error) {
        console.error("error al modificar el archivo", error)
    }
    
}


async function unlikFile() {
    
    try {
        await fs.unlink('archivo.txt')
        console.log('Archivo eliminado correctamente')
    } catch (error) {
        console.error("error al eliminar el archivo", error)
    }
    
}



writeFile()
appendFile()
unlikFile()
