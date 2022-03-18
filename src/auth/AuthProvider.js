
import React from 'react'
import {createContext} from 'react'
import Cookies from 'universal-cookie'
import roles from '../helpers/roles'
import user from '../helpers/users'
import swal from 'sweetalert'


export  const AuthContext = createContext()



export default function AuthProvider({children}) {
    
const cookies = new Cookies()




    const hasRole = (role) =>  cookies.get('user')?.role === role ;

    const isLogged = () => !!cookies.get('user');

    const login = (userCredentials)=> {
        if(userCredentials.username && userCredentials.username === user.usuario){
            cookies.set('user', {role:roles.admin, nombre:"Josias"}, {path: "/" , maxAge: 1000000},)
            window.location.reload();
        }else{
           swal("Usuario incorrecto",{icon:"error"})
            return false;
        }

    }
    const logout = () => {cookies.remove('user')
    window.location.reload();}

   const contextValue = {
        
        isLogged,
        hasRole,
        login,
        logout
      
    }

    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}


