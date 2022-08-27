import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('public')) // Contenido estático

// Contenido dinámico

let cantidad = 0

app.get('/materia', function (req, res) {
    res.send("<p>Materia: Aplicaciones Hibridas</p>")
})

app.get('/contar', function (req, res) {
    cantidad++
    res.send(`<p>La cantidad de visitas es: ${cantidad}</p>`)
})

app.get('/productos', function (req, res) {

    res.sendFile(path.resolve('data/products.json'))
})

app.get('/datos', function (req, res) {
    const nombre = req.query.nombre

    //res.send(JSON.stringify(req.query))
    res.json(req.query)

})


app.listen(2022, function () {
    console.log('server started')
})