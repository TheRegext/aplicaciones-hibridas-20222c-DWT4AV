
// paradigma procedural

function esPar(n) {
    return n % 2 === 0
}

function sumar(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }

    return suma
}

function sumarPares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (esPar(array[i])) ? array[i] : 0
    }

    return suma
}

function sumarImpares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (!esPar(array[i])) ? array[i] : 0
    }

    return suma
}


let numeros = [1, 2, 3, 4, 5]
let numeros2 = [5, 6, 8, 2]

let suma = sumar(numeros)
let suma2 = sumar(numeros2)

let sumaPares = sumarPares(numeros)
let sumaImpares = sumarImpares(numeros)

console.log(suma, suma2, sumaPares, sumaImpares)