// CommonJS module
// const http = require('node:http')
// const fs = require('node:fs')
// const views = require('./views.js')

// ECMAScript 2015 module
import http from 'node:http'
import fs from 'node:fs'
import { createPage } from './views.js'
// import createPage from './views.js'

// un alias a todas las funciones
// import * as views from './views.js'



const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(createPage('<p>Alumno: Brian Lara</p>'))
        res.end();
    }
    else if (req.url === '/materia') {
        res.write(createPage('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end();
    }
    else if (req.url === '/profesor') {
        res.write(createPage('<p>Profesor: Brian Lara</p>'))
        res.end();
    }
    else if (req.url === '/productos') {
        fs.readFile('data/products.json', function (err, data) {
            if (err) {
                res.write(createPage('<p>ERROR: No se pudo leer el archivo</p>'))
                res.end();
            }
            else {
                const productos = JSON.parse(data.toString())

                let html = '<ul>'
                for (let i = 0; i < productos.length; i++) {
                    html += `<li>${productos[i].name} - $${productos[i].price}</li>`
                }
                html += '</ul>'

                res.write(createPage(html))
                res.end();
            }

        })

    }
    else if (req.url === '/aumento') {
        fs.readFile('data/products.json', function (err, data) {
            if (err) {
                res.write(createPage('<p>ERROR: No se pudo leer el archivo</p>'))
                res.end();
            }
            else {
                const productos = JSON.parse(data.toString())
                for (let i = 0; i < productos.length; i++) {
                    productos[i].price = parseInt(productos[i].price * 1.1);
                }

                fs.writeFile('data/products.json', JSON.stringify(productos), function (err) {

                    if (err) {
                        res.write(createPage('<p>ERROR: No se pudo escribir el archivo</p>'))
                        res.end();
                    }
                    else {
                        res.write(createPage('<p>Se aplico el aumento del 10% a los productos</p>'))
                        res.end();
                    }
                })
            }
        })
    }
    else if (req.url === '/about.html') {
        fs.readFile('public/about.html', function (err, data) {
            if (err) {
                res.write(createPage('<p>ERROR: No se pudo leer el archivo</p>'))
                res.end();
            }
            else {
                res.write(data.toString())
                res.end();
            }
        })
    }
    else if (req.url === '/img/logo.png') {
        fs.readFile('public/img/logo.png', function (err, data) {
            if (err) {
                res.write(createPage('<p>ERROR: No se pudo leer el archivo</p>'))
                res.end();
            }
            else {
                res.write(data)
                res.end();
            }
        })
    }
    else {
        res.write(createPage('<p>404 not found</p>'))
        res.end();
    }
})

server.listen(2022);