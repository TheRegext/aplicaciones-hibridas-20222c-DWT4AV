import express from 'express'
import * as CategoriasController from '../controllers/categorias.controllers.js'

const route = express.Router()

route.route('/categorias')
    .get(CategoriasController.verCategorias)


route.route('/categorias/nuevo')
    .get(CategoriasController.formNuevaCategoria)
    .post(CategoriasController.guardarCategoria)


route.route('/categorias/:idCategoria')
    .get(CategoriasController.verCategoria)

route.route('/categorias/:idCategoria/editar')
    .get(CategoriasController.formEditarCategoria)
    .post(CategoriasController.editarCategoria)

route.route('/categorias/:idCategoria/eliminar')
    .get(CategoriasController.formEliminarCategoria)
    .post(CategoriasController.eliminarCategoria)


export default route
