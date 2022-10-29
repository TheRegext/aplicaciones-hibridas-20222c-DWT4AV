import express from 'express'
import * as ProductosApiController from '../controllers/productos.api.controllers.js'

const route = express.Router()

route.route('/api/productos')
    .get(ProductosApiController.findAll)
    .post(ProductosApiController.create)

//route.route('/api/productos/nuevo') // very mal!

route.route('/api/productos/:idProducto')
    .get(ProductosApiController.findById)
    .patch(ProductosApiController.editById)
    .put(ProductosApiController.replaceById)
    .delete(ProductosApiController.deleteById)

export default route