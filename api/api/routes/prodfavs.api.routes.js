import express from 'express';
import * as prodfavsController from '../controllers/prodfavs.api.controllers.js'

const router = express.Router();

/*
router.route('/api/products/favs')

router.route('/api/products/:product_id/favs')


/// /api/5/prodfavs
router.route('/api/:user_id/favs')
*/

/// /api/users/5/prodfavs
router.route('/api/users/:user_id/prodfavs')
    .get(prodfavsController.getProductFavs)
    .post(prodfavsController.addProductFav)

router.route('/api/users/:user_id/prodfavs/:product_id')
    .delete(prodfavsController.removeProductFav)



export default router;