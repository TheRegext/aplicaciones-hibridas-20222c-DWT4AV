import * as CategoryService from '../../services/categorias.services.js'

function findAll(req, res) {
    CategoryService.traerCategorias()
        .then(function (categorias) {
            res.status(200).json(categorias)
        })
}

function findById(req, res) {
    const id = req.params.id

    CategoryService.traerCategoriaByID(id)
        .then(function (categoria) {
            res.status(200).json(categoria)
        })
}

export {
    findAll,
    findById
}

