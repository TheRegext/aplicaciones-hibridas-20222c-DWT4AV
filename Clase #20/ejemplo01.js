
// i++ -- i+=1 -- i = i + 1
/*
i++
++i

j = 7
*/

// k = j++ // j = 8, k = 7
// k = ++j // j = 8, k = 8


// Paradigma de Programacion - Estructurado

let numeros = [1, 2, 3, 4, 5]
let numeros2 = [5, 6, 8, 2]

let suma = 0, suma2 = 0

let sumaPares = 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}

for (let i = 0; i < numeros2.length; i++) {
    suma2 += numeros2[i]
    if (numeros2[i] % 2 === 0) {
        sumaPares += numeros2[i]
    }
}

console.log(suma, sumaPares, suma2)

