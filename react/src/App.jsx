import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProductNewPage from "./pages/ProductNewPage"

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App(){
    // Logica

    return (
        // Visual
        <BrowserRouter>
            
            <nav>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/products/new">Agregar Producto</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductsListPage/>}/>
                <Route path="/products/new" element={<ProductNewPage/>}/>
                <Route path="/products/:id" element={<ProductDetailsPage/>}/>
                <Route path="*" element={<div><h1>404</h1><p>Esta pagina no se encuentra disponible.</p></div>}/>
            </Routes>


        <footer>
            <p>Footer</p>
            <Routes>
                <Route path="/products" element={<p>Todos los PRODUCTOS</p>}/>
            </Routes>
        </footer>

        </BrowserRouter>
    )
}

export default App