function duplicarNumeros(numeros) {
        
    //Usamos map para crear un nuevo array con los numeros duplicados
    const numerosDuplicados = numeros.map(numero => numero * 2)
    
    //Retornamos el array de numeros duplicados
    return numerosDuplicados

}
    
//Ejemplo de uso
const resultado = duplicarNumeros([1, 2, 3, 4, 5])
    
console.log (resultado)