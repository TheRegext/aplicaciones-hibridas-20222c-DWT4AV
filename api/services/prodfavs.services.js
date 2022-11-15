import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_T')
const prodfavs = db.collection('prodfavs')

async function getProductFavs(user_id) {
    return client.connect()
        .then(function () {
            return prodfavs.findOne({ user_id })
        })
}
/*
async function addProductFavs(user_id, product_id) {

    return client.connect()
        .then(function () {
            return prodfavs.findOne({ user_id })
        })
        .then(function (productFav) {
            if (productFav) {
                return prodfavs.updateOne({ user_id }, { $addToSet: { products: new ObjectId(product_id) } })
            } else {
                return prodfavs.insertOne({ user_id, products: [new ObjectId(product_id)] })
            }
        })
}
*/


async function addProductFavs(user_id, product_id) {

    return client.connect()
        .then(function (productFav) {
            return prodfavs.updateOne({ user_id }, { $addToSet: { products: new ObjectId(product_id) } })
        })
        .then(function (resuilt) {
            if (resuilt.modifiedCount === 0) {
                return prodfavs.insertOne({ user_id, products: [new ObjectId(product_id)] })
            }
        })
}

async function removeProductFavs(user_id, product_id) {

    return client.connect()
        .then(function () {
            return prodfavs.updateOne({ user_id }, { $pull: { products: new ObjectId(product_id) } })
        })
}

export {
    getProductFavs,
    addProductFavs,
    removeProductFavs
}