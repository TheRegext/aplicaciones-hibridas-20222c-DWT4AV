function Counter(container) {
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

    this.buttons.sub.addEventListener('click', () => {
        this.restar()
    })

    this.buttons.add.addEventListener('click', () => {
        this.sumar()
    })

    this.sumar = () => {
        this.value++
        console.log(this)
        this.display.innerHTML = this.value
    }

    this.restar = () => {
        this.value--
        this.display.innerHTML = this.value
    }

    this.getValue = () => {
        return this.value
    }
}


const contador1 = new Counter(document.getElementById('contador1'))
const contador2 = new Counter(document.getElementById('contador2'))