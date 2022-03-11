import React from 'react'
import { useState } from 'react/cjs/react.development'
import useAuth from '../../auth/useAuth'



const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null);
    const userCredentials = {
        username,
        password
    }
  const {login} = useAuth()
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-lg-6 p-3 m-4 border border-2">
                    <div className="text-center"><h4>Login</h4></div>
                    <label className='h6'  htmlFor="Email">Usuario</label>
                    <div className="input-group mr-1">
                        <input onChange={(e)=> setUsername(e.target.value)} type="text" className='form-control' name="" id="" />
                    </div>
                    <label className='h6'  htmlFor="Email">Contraseña</label>
                    <div className="input-group mr-1 mb-4">
                        <input type="password" onChange={(e)=> setPassword(e.target.value)} className='form-control' name="" id="" />
                    </div>
                    <button onClick={()=> login(userCredentials)} className='btn btn-dark'>Iniciar sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Login
