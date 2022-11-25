import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_T')
const users = db.collection('users')


async function login(userLogin) {
    await client.connect()

    const user = await users.findOne({ email: userLogin.email })

    if (!user) {
        throw new Error('No existe el usuario')
    }

    const isMatch = await bcrypt.compare(userLogin.password, user.password)

    if (!isMatch) {
        throw new Error('Contraseña incorrecta')
    }

    return user

}


async function find(filter) {
    await client.connect()

    const usersCollection = await users.find(filter).toArray()

    return usersCollection
}

async function findById(id) {
    await client.connect()

    const user = await users.findOne({ _id: ObjectId(id) })

    return user
}

async function create(user) {
    const newUser = { ...user }

    await client.connect()

    const userExist = await users.findOne({ email: newUser.email })

    if (userExist) {
        throw new Error('El email ya existe')
    }

    const salt = await bcrypt.genSalt(10)

    newUser.password = await bcrypt.hash(newUser.password, salt)

    await users.insertOne(newUser)

    return newUser
}

async function remove(id) {
    await client.connect()

    await users.deleteOne({ _id: ObjectId(id) })
}

export {
    find,
    findById,
    create,
    remove,
    login

}

