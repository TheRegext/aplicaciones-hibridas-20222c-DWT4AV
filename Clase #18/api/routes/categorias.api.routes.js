import express from 'express'
import * as CategoriasController from '../controllers/categorias.api.controllers.js'
const route = express.Router()

route.route('/api/categorias')
    .get(CategoriasController.findAll)

route.route('/api/categorias/:id')
    .get(CategoriasController.findById)


export default route
