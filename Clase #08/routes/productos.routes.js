import express from 'express'
import * as ProductosController from '../controllers/productos.controllers.js'

const route = express.Router()

route.get('/productos', ProductosController.verTodos)
route.get('/productos/:idProducto', ProductosController.verUno)
route.post('/nuevo', ProductosController.guardar)

export default route