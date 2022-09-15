import * as ProductosServices from "../services/productos.services.js"

function verTodos(req, res) {
    ProductosServices.traerProductos()
        .then(function (productos) {
            res.render("ListaProductos", { productos })
        })
}

function verUno(req, res) {
    const id = parseInt(req.params.idProducto)

    ProductosServices.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render("VerProducto", { producto })
            } else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })

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
            res.render("Success", { message: `El producto se guardo con exito <a href="/productos/${nuevoProducto.id}">Ver Producto</a>` })
        })
        .catch(function (err) {
            res.render("Error", { message: err.message })
        })
}

export {
    verTodos,
    verUno,
    guardar
}