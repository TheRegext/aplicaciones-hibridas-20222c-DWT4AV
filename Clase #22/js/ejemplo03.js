/// Que compone al objeto de un contador
// una variable que almacena el valor
// componentes visuales
// 1. Boton de restar
// 2. Boton de sumar
// 3. Label que muestra el numero
// 4- contenedor de los elementos

// acciones
// sumar 
// restar
// obtener el valor
class Counter {
    constructor(container) {
        this.value = 0

        // creamos los elementos
        this.buttons = {
            add: document.createElement('button'),
            sub: document.createElement('button')
        }

        this.display = document.createElement('label')

        this.container = container

        // configuramos los elementos

        this.buttons.add.innerHTML = '+'
        this.buttons.sub.innerHTML = '-'
        this.display.innerHTML = this.value

        // agregamos los elementos al contenedor
        this.container.appendChild(this.buttons.sub)
        this.container.appendChild(this.display)
        this.container.appendChild(this.buttons.add)

        this.buttons.sub.addEventListener('click', this.restar.bind(this))

        this.buttons.add.addEventListener('click', () => {
            this.sumar()
        })

    }

    sumar() {
        this.value++
        this.display.innerHTML = this.value
    }

    restar() {
        this.value--
        this.display.innerHTML = this.value
    }

    getValue() {
        return this.value
    }
}


const contador1 = new Counter(document.getElementById('contador1'))
const contador2 = new Counter(document.getElementById('contador2'))