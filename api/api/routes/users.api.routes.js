import express from 'express'
import * as usersController from '../controllers/users.api.controllers.js'

const router = express.Router()


// /api/account/session
router.route('/api/users/login')
    .post(usersController.login)

router.route('/api/users/logout')
    .post(usersController.logout)


router.route('/api/users')
    .get(usersController.find)
    .post(usersController.create)

router.route('/api/users/:id')
    .delete(usersController.remove)


export default router