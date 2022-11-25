import {useState} from 'react'
import * as authService from '../services/auth.services'

function LoginPage({onLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function onSubmit(event){
        event.preventDefault()
        authService.login(email, password)
        .then(({user, token}) =>{
            onLogin(user, token)
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <p>{error}</p>
                <label>E-Mail: </label>
                <input type="text"  onChange={onChangeEmail} value={email} />
                <br />
                <label>Contraseña: </label>
                <input type="password" onChange={onChangePassword} value={password} />
                <br />
                <button>Ingresar</button>
            </form>
        </div>)           
}


export default LoginPage
