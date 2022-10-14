import express from 'express'
import * as ProductosApiController from '../controllers/productos.api.controllers.js'

const route = express.Router()

route.route('/api/productos')
    .get(ProductosApiController.findAll)

export default route