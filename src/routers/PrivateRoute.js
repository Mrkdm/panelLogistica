import React from 'react'
import { useLocation } from 'react-router-dom';

import routes from '../helpers/routes'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth';
const PrivateRoute = ({hasRole: role, ...rest}) => {
    const {isLogged, hasRole} = useAuth();
    if(role && !hasRole(role)) return <Redirect to={routes.home} />
    if(!isLogged()) return <Redirect to={routes.login} />

    return  <Route {...rest}/>
      
    
        
}

export default PrivateRoute
