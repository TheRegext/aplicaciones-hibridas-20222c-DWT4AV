import express from 'express'
import ProductosRoute from './routes/productos.routes.js'

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('public'))

app.use('/', ProductosRoute)


app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})