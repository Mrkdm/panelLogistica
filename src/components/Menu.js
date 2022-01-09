import React from 'react'
import {Link} from 'react-router-dom'
import routes from '../helpers/routes'
import logo from '../imgs/Logo-Logistica.png'
const Menu = () => {


  
    return (
        <div id="sidebar-container" className="bg-light border-right">
      <div className="logo">
        
        <img className='img-fluid' style={{width: "150px"}} src={logo} alt="" />
      </div>
      <div className="menu list-group">
          <Link to={routes.home} className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-apps lead mr-2"></i> Tablero</Link>
    
        <Link to={routes.upload} className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-cloud-upload lead mr-2"></i> Crear propiedad</Link>
        <Link to={routes.casas} className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-person lead mr-2"></i>Ver propiedades</Link>
    

    
      </div>
    </div>
    )
}

export default Menu
