// import fs from "fs/promises"

// const data = await fs.readFile("mensajes.txt", {encoding : "utf-8"})
// console.log(data)

// fs.writeFile("mensajes.txt", "mensaje de prueba")

import http from "http"
//npm install express! 

//para abrir el puerto
const servidor = http.createServer() //este es mi servidor
const PORT = 8080;

/*     

servidor.addListener("request", () => { // cuando el servidor recibe un "request", por ejemplo desde el navegador
        console.log("solicitud recibida") 
    })
 */
//la version resumida de el de arriba es el de abajo:

servidor.on("request", (req, res) => { // cuando el servidor recibe un "request", por ejemplo desde el navegador - req : solicitud res: respose
    
    console.log(req.url)
    console.log(req.method)
    console.log("solicitud recibida") 
    res.end("Hola culo!") //end es un metodo disponible, por el manual (?), sirve para terminar la solicitud/conexion
    })

servidor.listen(PORT, () => {//el puerto estandar de http es 80, abre solo si tiene permisos de administrador, node no viene con permisos de administrador, debemos elegir otro, superior al 1024 porque de ahi para abajo estan ocupados, al iniciar el puerto la terminal queda bloqueada, debo usar otra terminal si quiero seguir usando, o ctrl+c para apagar el servidor
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}) 

