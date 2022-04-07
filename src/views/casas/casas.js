import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
const Edit = () => {
    const history = useHistory()
    const [property, setProperty] = useState([])

    const deleteProperty = async (id) => {
        swal({
            title: "Eliminar",
            text: "Si decides eliminar, se perdera todo lo relacionado con esta propiedad",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    await axios.delete(`https://logis.live/api/images/${id}`).then((res) => {
                        if (res) {

                            swal("Tu propiedad a sido eliminada correctamente", {
                                icon: "success"
                            })
                        }
                        else {
                            swal("Error", {
                                icon: "danger"
                            })
                        }
                    })
                } else {
                    swal("Tu propiedad esta a salvo");
                }
            });
    }
    useEffect(() => {
        (async () => await axios.get('https://logis.live/api/images').then((res) => setProperty(res.data)).catch((err) => console.log(err)))()
    }, [])


    
    const casasCancun = async()=>{
        await axios.get('https://logis.live/api/images/ubication/Cancun').then((res) => setProperty(res.data)).catch((err) => console.log(err))
    }

    const casasMerida =  async()=>{
        await axios.get('https://logis.live/api/images/ubication/Merida').then((res) => setProperty(res.data)).catch((err) => console.log(err))
    }

    const casasPlaya = async()=>{
        await axios.get('https://logis.live/api/images/ubication/Playa').then((res) => setProperty(res.data)).catch((err) => console.log(err))
    }

    const casasTulum = async ()=>{
        await axios.get('https://logis.live/api/images/ubication/Tulum').then((res) => setProperty(res.data)).catch((err) => console.log(err))


    }
    

    return (
        <div className="d-flex">
            <Menu />

            <div id="page-content-wrapper" className="w-100 bg-light-blue">

                <Nav />
                <div id="content" className="container-fluid p-5 ">
                    <nav class="nav">
                        <p class="nav-link disabled" style={{cursor:"pointer"}} onClick={casasCancun}>Cancún</p>
                        <p class="nav-link disabled" style={{cursor:"pointer"}}  onClick={casasMerida}>Mérida</p>
                        <p class="nav-link disabled" style={{cursor:"pointer"}} onClick={casasTulum} >Tulum</p>
                        <p class="nav-link" style={{cursor:"pointer"}} onClick={casasPlaya}>Playa del carmen</p>
                    </nav>
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
                                                        <i style={{ color: '#47f', cursor: 'pointer' }} onClick={() => history.replace(`/casas/${img._id}`)} className=" icon ion-md-create lead m-4"></i>
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
