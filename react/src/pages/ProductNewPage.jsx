import {useEffect, useState} from 'react'
import * as productsService from '../services/product.services'
import * as categoriesService from '../services/category.services'

import {useNavigate} from 'react-router-dom'


function ProductNewPage(){
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])


    useEffect(() => {
        categoriesService.find()
        .then((data)=>{
            setCategories(data)
            setCategory(data[0].name)
        })
    }, [])

    function changeName(e){
        setName(e.target.value)
    }

    function changePrice(e){
        setPrice(e.target.value)
    }

    function changeCategory(e){
        setCategory(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        productsService.create({name, price, category})
        .then(()=>{
            navigate("/products") // redirecciona a la ruta /products
        })
    }

    return (
        <div>
            <h1>Product New Page</h1>
            <form onSubmit={onSubmit}>
                <label>Nombre</label>
                <input type="text" onChange={changeName} value={name} />
                <br />
                <label>Precio</label>
                <input type="number" onChange={changePrice} value={price} />
                <br />
                <label>Categoria</label>
                <select onChange={changeCategory} value={category}>
                    {categories.map((category)=>{
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    })}

                </select>
                
                <br />
                <button>Guardar</button>
            </form>
        </div>
    )
}

export default ProductNewPage