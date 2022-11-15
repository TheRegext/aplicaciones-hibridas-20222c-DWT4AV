import express from 'express'
import * as ReviewsApiController from '../controllers/reviews.api.controllers.js'

const route = express.Router()

route.route('/api/productos/:idProducto/reviews')
    .get(ReviewsApiController.findAll)
    .post(ReviewsApiController.create)

// /api/productos/225658/reviews/4141
//route.route('/api/productos/:idProducto/reviews/:idReview') //--  1


//route.route('/api/reviews/:idProducto') //-- 2


// api/reviews/123456789/1452
//route.route('/api/reviews/:idProducto/:idReview') //-- 2



export default route