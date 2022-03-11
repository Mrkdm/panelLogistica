import React from 'react'
import {Link} from 'react-router-dom'
import routes from '../helpers/routes'
import logo from '../imgs/Logo-Logistica.png'
import './App.css'
const Menu = () => {



    return (
        <div id="sidebar-container"  className="bg-light border-right">
      <div className="logo">
        <div className=""><i onClick={()=>{
          document.getElementById('sidebar-container').classList.toggle('active')
        }} className='icon ion-md-apps lead mr-2' style={{float:'right', fontSize:"30px", cursor:'pointer'}}></i></div>
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
