// traer los elementos del DOM sin var
const restar = document.getElementById('restar');
const sumar = document.getElementById('sumar');
const contador = document.getElementById('contador');

let contadorNumero = 0;

// creamos los eventos
sumar.addEventListener('click', () => {
    contador.innerText = ++contadorNumero;
});

restar.addEventListener('click', () => {
    contador.innerText = --contadorNumero;
})
