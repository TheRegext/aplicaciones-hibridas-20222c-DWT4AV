import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(async function () {
        console.log("Connected to MongoDB")
        const db = client.db("DB_T") //  use DB_T
        console.log(db.databaseName)

        const Alumnos = db.collection("Alumnos") // db.Alumnos

        const AlumnosList = await Alumnos.find().toArray()

        console.log("Lista de alumnos")
        console.table(AlumnosList)

        const AlumnosFiltro = await Alumnos.find({ nota: 7 }).toArray()

        console.log("Lista de alumnos con nota 7")
        console.table(AlumnosFiltro)

        const AlumnosOrdenados = await Alumnos.find().sort({ name: -1 }).toArray()

        console.log("Lista de alumnos ordenados por nombre")
        console.table(AlumnosOrdenados)

        const Alumno = await Alumnos.findOne({ _id: new ObjectId("6324e28e46ead9daae28093c") })

        console.log("Alumno con id 6324e28e46ead9daae28093c")
        console.table(Alumno)

        // Insertar un alumno

        const AlumnoNuevo = {
            name: "Juan",
            nota: 8
        }

        // side effect por que es una funcion impura
        /*
            for (let i = 0; i < 100; i++) {
                const result = await Alumnos.insertOne({ ...AlumnoNuevo })
                console.log("Alumno insertado")
                console.log(AlumnoNuevo)
                console.log(result)
    
            }
        */


        // eliminar un alumno

        //const result = await Alumnos.deleteOne({ _id: new ObjectId("632a259debe5723351ba48ff") })
        /*
        const result = await Alumnos.deleteMany({ name: "Juan" })
        console.log("Alumno eliminado")
        console.log(result)
        */

        // actualizar un alumno
        const result = await Alumnos.updateOne({
            _id: new ObjectId("6324e28e46ead9daae28093c")
        }, {
            $unset: { email: '' }
        })

        console.log("Alumno actualizado")
        console.log(result)

        // reemplazar un alumno

        const result2 = await Alumnos.replaceOne({
            _id: new ObjectId("6324e28e46ead9daae28093c")
        }, {
            name: "Juan",
            nota: 8
        })

        console.log("Alumno reemplazado")   
        console.log(result2)





    })
    .catch(function (err) {
        console.log(err)
    })