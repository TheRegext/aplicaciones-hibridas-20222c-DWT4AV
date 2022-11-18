
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ProductServices from '../services/product.services';

function ProductDetailsPage(){
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        ProductServices.findById(id)
        .then(data => {
            setProduct(data)
        })
    }, [id])

    return (
        <div>
            <h1>Product Details Page</h1>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Category: {product.category}</p>

            <Link to={`/products/632e0a1cb24b83672e9e36c1`}>Café Americano</Link>
        </div>
    )
}

export default ProductDetailsPage