const express = require("express");
const app = express();
const PORT = 3000;



//Middleware para poder trabajar con datos JSON
app.use(express.json());

//Array
let usuarios = []

app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})

app.post("/usuarios", (req, res) => {
    const { nombre, edad } = req.body
    const nuevoUsuario = {id: usuarios.length+1, nombre, edad}
    usuarios.push(nuevoUsuario)
    res.status(201).json(nuevoUsuario)
})

app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params
    const { nombre, edad } = req.body
    const usuario = usuarios.find(u => u.id === parseInt(id))
    if (!usuario) return res.status(404).json({ mesaje: "Usuario no encontrado" })
    
    //actualizar datos
    usuario.nombre = nombre || usuario.nombre
    usuario.edad = edad || usuario.edad
    res.json(usuario)
    
    
})


app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params
    usuarios = usuarios.filter(u => u.id !== parseInt(id))
    res.json({mensaje: "Usuario eliminado"})
    
})

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});