import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes';
const Nav = () => {
  const {logout} = useAuth();
    return (

               <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container">
        
      <div>



      </div>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link text-dark" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
              
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={routes.account}>Mi perfil</Link>
            
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item " onClick={logout}>Cerrar sesión</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default Nav
