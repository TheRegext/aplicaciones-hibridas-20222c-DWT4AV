let numeros = [1, 2, 3, 4, 5]

let suma = numeros.reduce((prev, valor) => (prev + valor), 0)
let sumaPares = numeros.reduce((prev, valor) => (prev + ((valor % 2 === 0) ? valor : 0)), 0)
let sumaImpares = numeros.reduce((prev, valor) => (prev + ((valor % 2 !== 0) ? valor : 0)), 0)

console.log("La suma es:", suma)
console.log("La suma de los pares es:", sumaPares)
console.log("La suma de los impares es:", sumaImpares)