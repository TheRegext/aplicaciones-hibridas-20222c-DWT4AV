import jwt from "jsonwebtoken"
import * as userService from '../services/users.services.js'
import * as tokenService from '../services/token.services.js'

function isLogin(req, res, next) {
    const token = req.headers['auth-token']

    if (!token) {
        return res.status(401).json({ message: 'No se envio un token' })
    }

    try {
        const payload = jwt.verify(token, 'CLAVE_SECRETA')

        tokenService.findByToken(token)
            .then(tokenFound => {
                if (!tokenFound) {
                    return res.status(401).json({ message: 'Token invalido' })
                }

                userService.findById(payload.id)
                    .then(user => {
                        req.user = user
                        next()
                    })
            })
    } catch (err) {
        return res.status(401).json({ message: 'Token invalido' })
    }

    next()
}

function getUser(req, res, next) {
    userService.findById(req.user.id)
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Usuario no encontrado' })
            }
            req.user = user
        })
        .catch(err => {
            return res.status(401).json({ message: 'Usuario no encontrado' })
        })
}


function isAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(401).json({ message: 'No tienes permiso para realizar esta accion' })
    }

    next()
}


export {
    isLogin,
    getUser,
    isAdmin
}