import * as ProductosServices from "../services/productos.services.js"
import * as CategoriasServices from "../services/categorias.services.js"
import * as ReviewServices from "../services/reviews.services.js"

function verTodos(req, res) {
    ProductosServices.traerProductos()
        .then(function (productos) {
            res.render("Productos/Lista", { productos })
        })
}

async function verUno(req, res) {
    const id = req.params.idProducto
    const product = await ProductosServices.traerProductoByID(id)
    if (product) {
        const reviews = await ReviewServices.findAll(id)
        res.render("Productos/Ver", { product, reviews })
    }
    else {
        res.render("404", { message: "Producto no encontrado" })
    }
}

function formNuevo(req, res) {

    CategoriasServices.traerCategorias()
        .then(function (categorias) {
            res.render("Productos/Cargar", { producto: {}, categorias })
        })
}

function guardar(req, res) {
    // armo lo que quiero guardar
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
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

function formEditar(req, res) {
    const id = req.params.idProducto
    let categorias = []

    CategoriasServices.traerCategorias()
        .then(function (todas) {
            categorias = todas
            return ProductosServices.traerProductoByID(id)
        })
        .then(function (producto) {
            if (producto) {
                res.render("Productos/Cargar", { producto, categorias })
            }
            else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })
}


function editar(req, res) {
    const id = req.params.idProducto

    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }


    ProductosServices.editarProducto(id, producto)
        .then(function () {
            res.render("Success", { message: `Se actualizo correctamente` })
        })

}

export {
    verTodos,
    verUno,
    guardar,
    formNuevo,
    formEliminar,
    eliminar,
    formEditar,
    editar
}