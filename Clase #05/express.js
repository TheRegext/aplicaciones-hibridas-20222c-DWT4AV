import express from 'express'
import fs from 'node:fs'
import { createPage } from './views.js'

const app = express()
// cada vez que llega un body con urlencoded lo parsea
app.use(express.urlencoded({ extended: true }))

//app.use(express.static('public'))
app.use('/', express.static('public'))
/*
app.get('/productos', (req, res) => {
    res.sendFile(path.resolve('data/productos.json'))
})
*/
app.get('/productos', (req, res) => {
    fs.readFile('data/productos.json', function (err, data) {
        if (err) {
            res.send(createPage('<p>Error al leer el archivo</p>'))
        } else {
            const productos = JSON.parse(data.toString())
            let html = '<ul>'
            for (let i = 0; i < productos.length; i++) {
                html += `<li><a href="/productos/${productos[i].id}">${productos[i].name}</a></li>`
            }
            html += '</ul>'
            res.send(createPage(html))
        }
    })
})

// query params
app.get('/productos/ver', function (req, res) {
    res.json(req.query)
})

// route params
// path params
app.get('/productos/:idProducto', function (req, res) {
    const id = parseInt(req.params.idProducto)
    fs.readFile('data/productos.json', function (err, data) {
        if (err) {
            res.send(createPage('<p>Error al leer el archivo</p>'))
        } else {
            const productos = JSON.parse(data.toString())
            let producto = null

            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === id) {
                    producto = productos[i]
                    break
                }
            }


            if (producto) {
                res.send(createPage(`
                    <h2>${producto.name}</h2>
                    <p>Precio: $${producto.price}</p>
                `))
            } else {
                res.send(createPage('<p>Producto no encontrado</p>'))
            }
        }
    })

})


app.post('/nuevo', function (req, res) {
    //console.log(req.body)
    // res.json(req.body)
    const producto = {
        name: req.body.name,
        price: req.body.price
    }


})


app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})