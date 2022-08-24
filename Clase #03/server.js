const http = require('node:http')
const fs = require('node:fs')
const views = require('./views.js')
// const productos = require('./productos.js');


const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(views.createPage('<p>Alumno: Brian Lara</p>'))
        res.end();
    }
    else if (req.url === '/materia') {
        res.write(views.createPage('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end();
    }
    else if (req.url === '/profesor') {
        res.write(views.createPage('<p>Profesor: Brian Lara</p>'))
        res.end();
    }
    else if (req.url === '/productos') {
        fs.readFile('data/products.json', function (err, data) {
            if (err) {
                res.write(views.createPage('<p>ERROR: No se pudo leer el archivo</p>'))
                res.end();
            }
            else {
                const productos = JSON.parse(data.toString())

                let html = '<ul>'
                for (let i = 0; i < productos.length; i++) {
                    html += `<li>${productos[i].name} - $${productos[i].price}</li>`
                }
                html += '</ul>'

                res.write(views.createPage(html))
                res.end();
            }

        })

    }
    else if (req.url === '/aumento') {
        for (let i = 0; i < productos.length; i++) {
            productos[i].price = parseInt(productos[i].price * 1.1);
        }
        res.write(views.createPage('<p>Se aplico el aumento del 10% a los productos</p>'))
        res.end();


    }
    else {
        res.write(views.createPage('<p>404 not found</p>'))
        res.end();
    }
})

server.listen(2022);