import * as reviewService from '../../services/reviews.services.js'

function create(req, res) {
    const idProduct = req.params.idProducto
    const review = {
        text: req.body.text,
    }

    reviewService.create(idProduct, review)
        .then(function (result) {
            res.status(201).json(result)
        })
}

function findAll(req, res) {
    const idProduct = req.params.idProducto

    reviewService.findAll(idProduct)
        .then(function (result) {
            res.status(200).json(result)
        })
}

export {
    create,
    findAll
}