import * as ProductosServices from "../services/productos.services.js"

function verTodos(req, res) {
    ProductosServices.traerProductos()
        .then(function (productos) {
            res.render("Productos/Lista", { productos })
        })
}

function verUno(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render("Productos/Ver", { producto })
            } else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })
}

function formNuevo(req, res) {
    res.render("Productos/Nuevo")
}

function guardar(req, res) {
    // armo lo que quiero guardar
    const producto = {
        name: req.body.name,
        price: req.body.price
    }

    // guardo el producto
    ProductosServices.guardarProducto(producto)
        .then(function (nuevoProducto) {
            res.render("Success", { message: `El producto se guardo con exito <a href="/productos">Ver Productos</a>` })
        })
        .catch(function (err) {
            res.render("Error", { message: err.message })
        })
}

function formEliminar(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render("Productos/Eliminar", { producto })
            } else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })
}

function eliminar(req, res) {
    const id = req.params.idProducto

    ProductosServices.eliminarProducto(id)
        .then(function () {
            res.render("Success", { message: `El producto se elimino con exito <a href="/productos">Ver Productos</a>` })
        })
        .catch(function (err) {
            res.render("Error", { message: err.message })
        })
}


export {
    verTodos,
    verUno,
    guardar,
    formNuevo,
    formEliminar,
    eliminar
}