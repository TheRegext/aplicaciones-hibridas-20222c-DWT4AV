import * as prodfavsService from '../../services/prodfavs.services.js'


export async function getProductFavs(req, res) {
    const user_id = req.params.user_id
    const prodfavs = await prodfavsService.getProductFavs(user_id)
    res.json(prodfavs)
}

export async function addProductFav(req, res) {
    const user_id = req.params.user_id
    const product_id = req.body.product_id

    const prodfavs = await prodfavsService.addProductFavs(user_id, product_id)

    res.json({ message: 'Producto agregado a favorito con exito' })
}


export async function removeProductFav(req, res) {

    const user_id = req.params.user_id
    const product_id = req.params.product_id

    const prodfavs = await prodfavsService.removeProductFavs(user_id, product_id)

    res.json({ message: 'Producto quitado de favorito con exito' })
}