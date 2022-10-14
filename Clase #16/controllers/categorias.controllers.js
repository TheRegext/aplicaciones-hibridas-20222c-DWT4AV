import * as  CategoriasServices from '../services/categorias.services.js'


function verCategorias(req, res) {
    CategoriasServices.traerCategorias()
        .then(function (categorias) {
            res.render('Categorias/Lista', { categorias })
        })
}

function formNuevaCategoria(req, res) {
    res.render('Categorias/Cargar', { categoria: {} })
}

function guardarCategoria(req, res) {
    const categoria = {
        name: req.body.name
    }

    CategoriasServices.guardarCategoria(categoria)
        .then(function (nuevaCategoria) {
            res.render('Success', { message: `La categoria se guardo con exito <a href="/categorias">Ver Categorias</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: err.message })
        })
}

function verCategoria(req, res) {
    const id = req.params.idCategoria

    CategoriasServices.traerCategoriaByID(id)
        .then(function (categoria) {
            if (categoria) {
                res.render('Categorias/Ver', { categoria })
            } else {
                res.render('404', { message: 'Categoria no encontrada' })
            }
        })
}

function formEditarCategoria(req, res) {
    const id = req.params.idCategoria

    CategoriasServices.traerCategoriaByID(id)
        .then(function (categoria) {
            if (categoria) {
                res.render('Categorias/Cargar', { categoria })
            } else {
                res.render('404', { message: 'Categoria no encontrada' })
            }
        })
}

function editarCategoria(req, res) {
    const id = req.params.idCategoria

    const categoria = {
        name: req.body.name
    }

    CategoriasServices.editarCategoria(id, categoria)
        .then(function (categoriaEditada) {
            res.render('Success', { message: `La categoria se edito con exito <a href="/categorias">Ver Categorias</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: err.message })
        })
}

function formEliminarCategoria(req, res) {
    const id = req.params.idCategoria

    CategoriasServices.traerCategoriaByID(id)
        .then(function (categoria) {
            if (categoria) {
                res.render('Categorias/Eliminar', { categoria })
            } else {
                res.render('404', { message: 'Categoria no encontrada' })
            }

        })
}

function eliminarCategoria(req, res) {
    const id = req.params.idCategoria

    CategoriasServices.eliminarCategoria(id)
        .then(function (categoriaEliminada) {
            res.render('Success', { message: `La categoria se elimino con exito <a href="/categorias">Ver Categorias</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: err.message })
        })
}

export {
    verCategorias,
    formNuevaCategoria,
    guardarCategoria,
    verCategoria,
    formEditarCategoria,
    editarCategoria,
    formEliminarCategoria,
    eliminarCategoria

}