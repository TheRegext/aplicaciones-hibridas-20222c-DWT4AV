import * as ProductosServices from '../../services/productos.services.js';

function findAll(req, res) {
    ProductosServices.traerProductos()
        .then(function (productos) {
            res.status(200).json(productos)
        })
}

function create(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    ProductosServices.guardarProducto(producto)
        .then(function (newProduct) {
            res.status(201).json(newProduct)
        })
}

function findById(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.status(200).json(producto)
            } else {
                res.status(404).json({ message: "Producto no encontrado" })
            }
        })
}

function editById(req, res) {
    const id = req.params.idProducto
    const produto = {}

    if (req.body.name) {
        produto.name = req.body.name
    }

    if (req.body.price) {
        produto.price = req.body.price
    }

    if (req.body.category) {
        produto.category = req.body.category
    }

    ProductosServices.editarProducto(id, produto)
        .then(function (producto) {
            if (producto) {
                res.status(200).json({ message: "Producto editado con exito" })
            } else {
                res.status(404).json({ message: "Producto no encontrado" })
            }
        })
}

function deleteById(req, res) {
    const id = req.params.idProducto

    ProductosServices.eliminarProducto(id)
        .then(function (producto) {
            if (producto) {
                res.status(200).json({ message: "Producto eliminado con exito" })
            } else {
                res.status(404).json({ message: "Producto no encontrado" })
            }
        })
}

function replaceById(req, res) {
    const id = req.params.idProducto

    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    ProductosServices.reemplazarProducto(id, producto)
        .then(function (producto) {
            if (producto) {
                res.status(200).json({ message: "Producto reemplazado con exito" })
            } else {
                res.status(404).json({ message: "Producto no encontrado" })
            }
        })
}


export {
    findAll,
    create,
    findById,
    editById,
    deleteById,
    replaceById
}