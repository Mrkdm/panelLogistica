import React, {useEffect, useState} from 'react'
import './bootstrap.min.css'
import './app.css'

import { Link } from 'react-router-dom'
import axios from 'axios'
import Menu from '../../components/Menu'




const Panel = () => {
  const [client, setClient] = useState([])
    useEffect(()=>{
      (async()=>{
        axios.get('http://68.183.16.45/api/message/').then((res)=>setClient(res.data))
      })()
    },[])
    console.log(client)
    return (

        <div className="d-flex" id="content-wrapper">

 <Menu/>
    <div id="page-content-wrapper" className="w-100 bg-light-blue">

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
                <Link className="nav-link text-dark" href="/panel">Inicio</Link>
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

      <div id="content" className="container-fluid p-5">
        <section className="py-3">
      
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              <div className="card mb-5 shadow-sm border-0 shadow-hover">
                <div className="card-body d-flex">
                  <div>
                    <div className="circle rounded-circle bg-primary align-self-center d-flex mr-3">
                      <i className="icon ion-md-trending-up text-primary align-self-center mx-auto lead"></i>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h5 className="mb-0">3200</h5>
                    <small className="text-muted">Ventas totales</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card mb-5 shadow-sm border-0 shadow-hover">
                <div className="card-body d-flex">
                  <div>
                    <div className="circle rounded-circle bg-primary align-self-center d-flex mr-3">
                      <i className="icon ion-md-stats text-primary align-self-center mx-auto lead"></i>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h5 className="mb-0">13,200</h5>
                    <small className="text-muted">Visitas al sitio</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card mb-5 shadow-sm border-0 shadow-hover">
                <div className="card-body d-flex">
                  <div>
                    <div className="circle rounded-circle bg-primary align-self-center d-flex mr-3">
                      <i className="icon ion-md-people text-primary align-self-center mx-auto lead"></i>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h5 className="mb-0">1345</h5>
                    <small className="text-muted">Usuarios nuevos</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card mb-5 shadow-sm border-0 shadow-hover">
                <div className="card-body d-flex">
                  <div>
                    <div className="circle rounded-circle bg-primary align-self-center d-flex mr-3">
                      <i className="icon ion-md-cash text-primary align-self-center mx-auto lead"></i>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h5 className="mb-0">$22,150</h5>
                    <small className="text-muted">Ingresos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
    

          <div className="row mb-3">

            <div className="col-xl-7 col-lg-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th colspan="2"><small className="font-weight-bold">Usuarios</small></th>
                      <th scope="col"><small className="font-weight-bold">Estatus</small></th>
                      <th scope="col"><small className="font-weight-bold">Configuración</small></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shadow-sm">
                      <td><img src="https://th.bing.com/th/id/R.65be7e5c33302fdf7504bd1c5e7aa3fa?rik=6ATvzPMAeecl6w&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBTaroLj5c.png&ehk=zlhXM0KtVH2afSWz1FHYmg%2f%2fb2hHsCKcTz2SQL%2fEDZg%3d&risl=&pid=ImgRaw&r=0" className="img-fluid rounded-circle avatar"
                          alt="https://generated.photos/" /></td>
                      <td><span className="d-block">Cristian</span><small className="text-muted">cristian@templune.com</small>
                      </td>
                      <td className="align-middle"><span className="badge badge-primary text-primary">Activo</span></td>
                      <td className="align-middle"><span className="badge badge-secondary">Editar <i
                            className="icon ion-md-settings ml-2"></i></span></td>
                    </tr>
                    <tr className="shadow-sm">
                      <td><img src="https://th.bing.com/th/id/R.65be7e5c33302fdf7504bd1c5e7aa3fa?rik=6ATvzPMAeecl6w&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBTaroLj5c.png&ehk=zlhXM0KtVH2afSWz1FHYmg%2f%2fb2hHsCKcTz2SQL%2fEDZg%3d&risl=&pid=ImgRaw&r=0" className="img-fluid rounded-circle avatar"
                          alt="https://generated.photos/" /></td>
                      <td><span className="d-block">Diego</span><small className="text-muted">diego@templune.com</small></td>
                      <td className="align-middle"><span className="badge badge-primary text-primary">Activo</span></td>
                      <td className="align-middle"><span className="badge badge-secondary">Editar <i
                            className="icon ion-md-settings ml-2"></i></span></td>
                    </tr>
                    <tr className="shadow-sm">
                      <td><img src="https://th.bing.com/th/id/R.65be7e5c33302fdf7504bd1c5e7aa3fa?rik=6ATvzPMAeecl6w&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBTaroLj5c.png&ehk=zlhXM0KtVH2afSWz1FHYmg%2f%2fb2hHsCKcTz2SQL%2fEDZg%3d&risl=&pid=ImgRaw&r=0" className="img-fluid rounded-circle avatar"
                          alt="https://generated.photos/" /></td>
                      <td><span className="d-block">Irina</span><small className="text-muted">irina@templune.com</small></td>
                      <td className="align-middle"><span className="badge badge-primary text-primary">Activo</span></td>
                      <td className="align-middle"><span className="badge badge-secondary">Editar <i
                            className="icon ion-md-settings ml-2"></i></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      
            <div className="col-xl-5 col-lg-12">
              <div className="card mb-5 shadow-sm border-0 shadow-hover">
                <div className="card-header bg-light border-0 pt-3 pb-0">
                  <h6 className="mb-0">Contactalos</h6>
                </div>
                <div className="card-body">
                  {
                    client.map((cl)=>{
                      return(
                        <div className="d-flex border-bottom py-3">
                        <div className="mr-3">
                          <img src="https://th.bing.com/th/id/OIP.cXsBN_yOXR4GCur3dUl0aAHaIM?w=154&h=180&c=7&r=0&o=5&pid=1.7" className="img-fluid rounded-circle avatar"
                            alt="https://generated.photos/" />
                        </div>
                        <div>
                          <div className="">
                            <p className="mb-0">{cl.name}/{cl.lastname}</p>
                            <a href="">{cl.email}</a>
                          </div>
                          
                        </div>
                      </div>
                      )
                    })
                  }

                  

                  <div className="text-center pt-3">
                    <Link href=""><small>Ver todos los mensajes</small></Link>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

         
         <div className="row">
           <div className="col-lg-12">
                  
           </div>
         </div>
    

        </section>
      </div>
    </div>
  </div>


    )
}

export default Panel
