
// paradigma funcional

function esPar(n) {
    return n % 2 === 0
}
/// callback
function sumar(array, criterio) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += criterio(array[i])
    }

    return suma
}

let numeros = [1, 2, 3, 4, 5]

// sumar todos
let suma = sumar(numeros, function (valor) {
    return valor;
})

let sumaPares = sumar(numeros, function (valor) {
    return (esPar(valor)) ? valor : 0
})
let sumaImpares = sumar(numeros, function (valor) {
    return (!esPar(valor)) ? valor : 0
})

console.log(suma, sumaPares, sumaImpares)