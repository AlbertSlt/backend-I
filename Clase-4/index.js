//me traigo la libreria express
import express from "express" //lo que va en comillas es identico a la carpeta de node_modules, es la direccion
import fs from "fs/promises"
//creo mi servidor

const servidor = express()

const PORT = 8080



//---hasta aca igual al serv nativo---


//Ruta
//miServidor.METODO("RUTA", callback)
servidor.get("/", (req, res) => {
    console.log("Ruta1")
    //res.end("Hola culo GET") //end solo envia texto plano
    res.send("Hola culo GET") //send de EXPRESS, lo que escriba, dependiendo el formato, al navegador le llega de una manera u otra y p/ej: content-type HTML, ya no texto plano
    //res.json()
})


servidor.post("/", (req,res) => {
    console.log("Ruta2")
    res.end("Hola culo POST")
})


servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})