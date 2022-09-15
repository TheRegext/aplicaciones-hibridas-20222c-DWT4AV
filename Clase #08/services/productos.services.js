import fs from 'node:fs'

async function traerProductos() {
    return fs.promises.readFile('data/productos.json')
        .then(function (data) {
            return JSON.parse(data.toString())
        })
        .catch(function (err) {
            return []
        })
}

function buscarProducto(id, productos) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            return productos[i]
        }
    }

    return null
}

async function traerProductoByID(id) {
    return traerProductos()
        .then(function (productos) {
            return buscarProducto(id, productos)
        })

}

async function guardarProductos(productos) {
    return fs.promises.writeFile('data/productos.json', JSON.stringify(productos))
}


async function guardarProducto(producto) {
    let productoNuevo
    return traerProductos()
        .then(function (productos) {
            productoNuevo = {
                ...producto,
                id: productos.length == 0 ? 1 : productos[productos.length - 1].id + 1
            }
            productos.push(productoNuevo)

            return guardarProductos(productos)
        })
        .then(function () {
            return productoNuevo
        })
        .catch(function () {
            return null
        })
}


export {
    traerProductos,
    traerProductoByID,
    guardarProducto
}