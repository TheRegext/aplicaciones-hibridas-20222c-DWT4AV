import express from 'express'
import * as ProductosController from '../controllers/productos.controllers.js'

const route = express.Router()


route.get('/productos', ProductosController.verTodos)

route.route('/productos/nuevo')
    .get(ProductosController.formNuevo)
    .post(ProductosController.guardar)


route.route('/productos/:idProducto/eliminar')
    .get(ProductosController.formEliminar)
    .post(ProductosController.eliminar)

route.route('/productos/:idProducto/editar')
    .get(ProductosController.formEditar)
    .post(ProductosController.editar)


route.get('/productos/:idProducto', ProductosController.verUno)

export default route