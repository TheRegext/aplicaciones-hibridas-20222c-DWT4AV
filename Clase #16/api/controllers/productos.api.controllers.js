import * as ProductosServices from '../../services/productos.services.js';

function findAll(req, res) {
    ProductosServices.traerProductos()
        .then(function (productos) {
            res.status(200).json(productos)
        })
}

export {
    findAll
}