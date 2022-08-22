console.log("hola mundo")

var nueva = "hola mundo" // variable global

// ECMAscript 6
// Datos simples
const nombre = "Brian" // Varibale inmutable (no se puede cambiar)
let edad = 30 // Variable mutable (se puede cambiar)
let eliminado = true // Variable booleana (true o false)

console.log("Hola " + nombre)

// variables compuestas
const objeto = {
    nombre: "Brian",
    edad: 30
}

// variables dimensionadas
const arreglo = [1, 2, 3, 4, 5]


// Funciones
function multiplicar(a, b) {
    return a * b
}

console.log("Resultado: " + multiplicar(2, 3))
