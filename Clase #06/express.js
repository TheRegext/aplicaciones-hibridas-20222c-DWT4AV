import express from 'express'
import { REFUSED } from 'node:dns'
import fs from 'node:fs'
import { createPage } from './views.js'

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.get('/productos', (req, res) => {
    fs.readFile('data/productos.json', function (err, data) {
        if (err) {
            res.send(createPage('<p>Error al leer el archivo</p>'))
        } else {
            const productos = JSON.parse(data.toString())
            res.render("ListaProductos", { productos })
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
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send(createPage('<p>Error al leer el archivo</p>'))
        }
        else {
            const productos = JSON.parse(data.toString())
            const producto = {
                // id: productos.length + 1,
                id: productos[productos.length - 1].id + 1,
                name: req.body.name,
                price: req.body.price
            }
            productos.push(producto)
            fs.writeFile('./data/productos.json', JSON.stringify(productos), function (err) {
                if (err) {
                    res.send(createPage('<p>Error al escribir el archivo</p>'))
                }
                else {
                    res.send(createPage('<p>Producto agregado</p>'))
                }
            })

        }
    })
})


app.get('/cualquiera', function (req, res) {
    res.render('hola', { nombre: "<strong>Brian Lara</strong>" })

})


app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})