import {useState, useEffect} from 'react'
import * as ProductServices from '../services/product.services';

import {Link} from 'react-router-dom'

function ProductsListPage() {
    const [products, setProducts] = useState([]);
    /*
        let productsElements = []
    
        for(let i=0 ; i<products.length ; i++){
    
            productsElements.push(
                <li>
                    Nombre: {products[i].name} - Precio: {products[i].price}
                </li>
            )
        }
    */

    useEffect(() => {
        ProductServices.find()
        .then(data => {
            console.log(data)
            setProducts(data) // Actualizo el estado y se vuelve a renderizar el componente
        })
    }, []) // El segundo parámetro es un array de dependencias. 
           // Si está vacío, se ejecuta cuando se monta el componente


    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente')

        return () => {
            console.log('Se ejecuta cuando se desmonta el componente')
        }
    }, [])

    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente y cuando se actualiza el estado')
    })

    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente y cuando se actualiza los productos')
    }, [products])



    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {products.map(({_id, name, price}) =>
                    <li>
                        Nombre: {name} - Precio: ${price} <Link to={`/products/${_id}`}>Ver</Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default ProductsListPage