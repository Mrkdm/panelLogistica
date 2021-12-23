import React from 'react'
import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <div id="sidebar-container" className="bg-light border-right">
      <div className="logo">
        <h4 className="font-weight-bold mb-0">Cargar</h4>
      </div>
      <div className="menu list-group">
          <Link to="/" className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-apps lead mr-2"></i> Tablero</Link>
    
        <Link to="/upload" className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-cloud-upload lead mr-2"></i> Crear propiedad</Link>
        <Link to="/edit" className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-person lead mr-2"></i>Ver propiedades</Link>
    

        <Link href="#" className="list-group-item list-group-item-action text-muted bg-light p-3 border-0"><i
            className="icon ion-md-person lead mr-2"></i> Perfil</Link>
    
      </div>
    </div>
    )
}

export default Menu
