import {useState, useEffect} from 'react'
import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProductNewPage from "./pages/ProductNewPage"
import LoginPage from "./pages/LoginPage"
import * as authService from "./services/auth.services"

import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'


function RoutePrivate( {isAutenticate, children}){
    return (
        <>
            {isAutenticate? children : <Navigate to="/login" />}
        </>
    )
}


function App() {
    const navigate = useNavigate()
    const [isAutehnticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
    }, [])


    useEffect(() => {
        if(!isAutehnticated){
            navigate('/login')
        }   
        else
        {
            navigate('/')
        }

    }, [isAutehnticated])

    function onLogin(user, token){
        
        setIsAuthenticated(true)
        localStorage.setItem('token', token)
        navigate('/')
    }

    function onLogout(){
        authService.logout()
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        navigate('/login')
    }


    // Logica
    return (
        // Visual
        <>
            <nav>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/products/new">Agregar Producto</Link> {isAutehnticated && <>| <a onClick={onLogout}>Logout</a> </>}
            </nav>

            <Routes>
                <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
                <Route path="/" element={<RoutePrivate isAutenticate={isAutehnticated}><HomePage /></RoutePrivate>} />
                <Route path="/products" element={<RoutePrivate isAutenticate={isAutehnticated}><ProductsListPage /></RoutePrivate>} />
                <Route path="/products/new" element={<RoutePrivate isAutenticate={isAutehnticated}><ProductNewPage /></RoutePrivate>} />
                <Route path="/products/:id" element={<RoutePrivate isAutenticate={isAutehnticated}><ProductDetailsPage /></RoutePrivate>} />
                <Route path="*" element={<div><h1>404</h1><p>Esta pagina no se encuentra disponible.</p></div>} />
            </Routes>


            <footer>
                <p>Footer</p>
                <Routes>
                    <Route path="/products" element={<p>Todos los PRODUCTOS</p>} />
                </Routes>
            </footer>

        </>
    )
}

export default App