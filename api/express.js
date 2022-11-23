import express from 'express'
import cors from 'cors'
import ProductosRoute from './routes/productos.routes.js'
import CategoriasRoute from './routes/categorias.routes.js'
import ProductosApiRoute from './api/routes/productos.api.routes.js'
import CategoriasApiRoute from './api/routes/categorias.api.routes.js'
import ProdfavsApiRoute from './api/routes/prodfavs.api.routes.js'
import UsersApiRoute from './api/routes/users.api.routes.js'

const app = express()
app.set("view engine", "ejs")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // para poder leer el body de las peticiones (middleware)

app.use('/', express.static('public'))

app.use('/', ProductosRoute)
app.use('/', CategoriasRoute)
app.use('/', ProductosApiRoute)
app.use('/', CategoriasApiRoute)
app.use('/', ProdfavsApiRoute)
app.use('/', UsersApiRoute)


app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})