// traer los elementos del DOM sin var
function createCounter(elementParent) {
    const restar = document.createElement('button');
    const sumar = document.createElement('button');
    const contador = document.createElement('label');
    let contadorNumero = 0;

    restar.innerText = '-';
    sumar.innerText = '+';
    contador.innerText = contadorNumero;

    // creamos los eventos
    sumar.addEventListener('click', () => {
        contador.innerText = ++contadorNumero;
    });

    restar.addEventListener('click', () => {
        contador.innerText = --contadorNumero;
    })

    // creamos los elementos
    elementParent.appendChild(restar);
    elementParent.appendChild(contador);
    elementParent.appendChild(sumar);
}

createCounter(document.getElementById('contador'));
createCounter(document.getElementById('contador2'));