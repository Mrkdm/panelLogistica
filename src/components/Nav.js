import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div >
               <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container">
          <button className="btn btn-primary text-primary" id="menu-toggle">Mostrar / esconder menu</button>

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
                  Diego
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" href="#">Mi perfil</Link>
                  <Link className="dropdown-item" href="#">Suscripciones</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#">Cerrar sesión</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Nav
