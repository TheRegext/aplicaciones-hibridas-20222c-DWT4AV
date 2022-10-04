const obj1 = {
    nombre: "Brian",
    apellido: "Lara",
}
/*
let nombre = obj1.nombre
let apellido = obj1.apellido
*/

// destructurar
let { nombre, apellido } = obj1

console.log(nombre, apellido)

const obj2 = {
    ...obj1,
    edad: 40
}
console.log(obj1)
console.log(obj2)


const array = [15, 16, 18]
let [a, b, c] = array
console.log(a, b, c)

const array2 = [...array, 20]
console.log(array)
console.log(array2)


