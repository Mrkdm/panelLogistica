import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes';
import Cookies from 'universal-cookie';
const Nav = () => {
  const cookies = new Cookies()
  const {logout} = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
                <Link className="nav-link text-dark" href="#">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {cookies.get('user').nombre}
                </Link>
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
