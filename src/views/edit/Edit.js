import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
const Edit = () => {
    const [property, setProperty] = useState([])
    useEffect(() => {
        (async () => await axios.get('http://68.183.16.45/api/images').then((res) => setProperty(res.data)).catch((err) => console.log(err)))()
    }, [])

    const deleteProperty = async (id) => {
        axios.delete(`http://68.183.16.45/api/images/${id}`)

    }
    return (
        <div className="d-flex">
<Menu/>

            <div id="page-content-wrapper" className="w-100 bg-light-blue">

                <nav className="navbar navbar-expand-lg navbar-light border-bottom">
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
            <div id="content" className="container-fluid p-5">
                <div className="bg-blue w-100">
                    <h3 className="text-white p-2">Inmuebles</h3>
                </div>
                <section className="py-3">

                    <div className="row">
                        {
                            property.map(img => {
                                return (
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img className="img-fluid" style={{ height: 230 }} src={img.url[0]} alt="" />
                                            </div>
                                            <div className="col-lg-3">
                                                <h3>{img.title}</h3>
                                                <p className="text-muted">{img._id}</p>
                                                <div className="d-flex">
                                                    <i className="icon ion-md-bed lead m-2"></i>
                                                    <p className=" lead m-2"> {img.rooms}</p>
                                                </div>
                                                <div className="d-flex">
                                                    <i className="icon ion-md-home lead m-2"></i>
                                                    <p className=" m-2"> {img.ubication}</p>
                                                </div>
                                                <div className="d-flex">
                                                    <i style={{ color: '#47f', cursor: 'pointer' }} className=" icon ion-md-create lead m-4"></i>
                                                    <i style={{ color: '#f47', cursor: 'pointer' }} onClick={() => deleteProperty(img._id)} className="icon ion-md-trash lead m-4"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )






                            })
                        }
                    </div>
                

                </section>
            </div>
</div>
        </div>
    )
}

export default Edit
