// funciones


// nombradas
function nombre(param1, param2) {
    console.log('Funcion Nombrada')
    return 0
}

nombre();

let k = true

let j = nombre()


// anonima - expresiones funcionales
let funcion = function (p, s) {
    console.log('Funcion Anonima')
    return 0
}

funcion()

    /// IIFE
    (function () {

        console.log('SOY IIFE')
    })()


// flecha no tienen contexto
// funciones lambda

const nombres = (param1, param2) => {
    return 0
}

const k = (elemento) => {
    return elemento * 2
}

const k = (elemento) => elemento * 2

const k = elemento => elemento * 2

nombres(1, 2)