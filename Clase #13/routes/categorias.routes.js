import express from 'express'
import * as CategoriasController from '../controllers/categorias.controllers.js'

const route = express.Router()

route.get('/categorias', CategoriasController.verCategorias)

export default route
