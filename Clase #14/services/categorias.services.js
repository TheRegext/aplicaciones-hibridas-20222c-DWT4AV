import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_T')
const collection = db.collection('Categorias')

async function traerCategorias() {
    return client.connect()
        .then(async function () {
            return collection.find().toArray()
        })
}

export {
    traerCategorias
}