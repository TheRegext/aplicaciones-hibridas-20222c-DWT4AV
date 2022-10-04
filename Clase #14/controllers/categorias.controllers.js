import * as  CategoriasServices from '../services/categorias.services.js'


function verCategorias(req, res) {
    CategoriasServices.traerCategorias()
        .then(function (categorias) {
            res.render('Categorias/Lista', { categorias })
        })
}

export {
    verCategorias
}