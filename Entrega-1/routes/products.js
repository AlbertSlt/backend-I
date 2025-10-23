// routes/products.js
import { Router } from "express";
import fs from "fs/promises";

const router = Router(); 


    
 const PRODUCTS = "./data/products.json"; // Ruta relativa al archivo

// Función auxiliar para leer el archivo JSON
async function readProductsFile() {
    try {
        // 1. Lee el contenido del archivo como texto (utf8)
        const data = await fs.readFile(PRODUCTS, 'utf8');
        // 2. Convierte la cadena JSON en un objeto JavaScript
        return JSON.parse(data); 
    } catch (error) {
        console.error("Error al leer el archivo de productos:", error);
        // Devuelve un array vacío si hay un error (ej. el archivo no existe)
        return []; 
    }
}

//ENDPOINT: GET 
router.get("/", async (req, res) => {
   
    //llamamos la funcion
    const products = await readProductsFile();

    //respuesta con el array de productos json
    res.status(200).json({
        success: true,
        data:products
    });

});

// DEBES usar 'export default'
export default router;