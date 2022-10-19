import express from 'express'
import ProductosRoute from './routes/productos.routes.js'
import CategoriasRoute from './routes/categorias.routes.js'
import ProductosApiRoute from './api/routes/productos.api.routes.js'
import CategoriasApiRoute from './api/routes/categorias.api.routes.js'

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // para poder leer el body de las peticiones (middleware)

app.use('/', express.static('public'))

app.use('/', ProductosRoute)
app.use('/', CategoriasRoute)
app.use('/', ProductosApiRoute)
app.use('/', CategoriasApiRoute)



app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})