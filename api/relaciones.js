// Referenciar

const { ObjectId } = require("mongodb")

// carrera_id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c')
const alumnos = [
    {
        nombre: 'Juan',
        edad: 23,
        // Relacion con carrera 1 a 1
        carrera_id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'), // referenciar la coleccion de carreras
        // Relacion con materias 1 a N
        materias: [
            ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
            ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
            ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
        ]
    }
]

// filter: carrera._id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c')
// Embeber
const alumnos = [
    {
        nombre: 'Juan',
        edad: 23,
        // Relacion 1 a 1
        carrera: {
            _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
            nombre: 'Ingenieria en Sistemas',
            duracion: 5
        },
        // Relacion 1 a N
        materias: [
            {
                _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
                nombre: 'Matematica',
                creditos: 4
            },
            {
                _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
                nombre: 'Fisica',
                creditos: 4
            },
        ]
    }
]


const carreras = [{
    _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    nombre: 'Ingenieria en Sistemas',
    duracion: 5
}]

// un producto tiene una categoria

// PRODUCTO      CATEGORIA
// CATEGORIA      PRODUCTO

const categorias = [{
    _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    name: 'Infusion',
    description: 'Infusiones de hadas'
}]

// modelando
const productos = [{
    _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    name: "Cafe",
    price: 350,
    category: "Infusion",
}]


/// A los productos les vamos a agregarles reviews/opiniones
const reviews = [{
    producto_id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    text: "Muy bueno",
}]


const ususarios = [{
    _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    name: "Juan",
    password: "1234",
    email: "juan@gmailc.om",
}]

// modelar los productos favoritos
const prodfav = [{
    product: {},
    user: {}
}]

const prodfav = [{
    user_id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    products: [product_id]
}]
