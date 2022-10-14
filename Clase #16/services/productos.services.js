import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerProductos() {
    return client.connect()
        .then(async function () {
            const db = client.db('DB_T')
            return db.collection('Productos').find().toArray()
        })
}

async function traerProductoByID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('DB_T')
            return db.collection('Productos').findOne({ _id: new ObjectId(id) })
        })

}

async function guardarProducto(producto) {
    const nuevoProducto = {
        ...producto
    }

    return client.connect()
        .then(function () {
            return client.db('DB_T').collection('Productos').insertOne(nuevoProducto)
        })
        .then(function (result) {
            return nuevoProducto
        })
}

async function eliminarProducto(id) {
    return client.connect()
        .then(function () {
            return client.db('DB_T').collection('Productos').deleteOne({ _id: new ObjectId(id) })
        })
        .then(function () {
            return true
        })

}

async function editarProducto(id, producto) {
    return client.connect()
        .then(function () {
            return client.db('DB_T').collection('Productos').updateOne({ _id: new ObjectId(id) }, { $set: producto })
        })

}


export {
    traerProductos,
    traerProductoByID,
    guardarProducto,
    eliminarProducto,
    editarProducto
}