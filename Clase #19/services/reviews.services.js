import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_T')
const reviews = db.collection('reviews')

async function create(id, review) {
    const newReview = {
        ...review,
        product_id: new ObjectId(id)
    }

    return client.connect()
        .then(async function () {
            return reviews.insertOne(newReview)
        })
        .then(function (result) {
            return newReview
        })
}

async function findAll(id) {
    const filter = {
        product_id: new ObjectId(id)
    }
    return client.connect()
        .then(async function () {
            return reviews.find(filter).toArray()
        })
}

export {
    create,
    findAll
}


