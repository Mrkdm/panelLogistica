import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import 'react-awesome-slider/dist/styles.css'
import AwesomeSlider from 'react-awesome-slider'
import swal from 'sweetalert'

const CasaIdEdit = () => {
    const history = useHistory()
    const { id } = useParams()
    const [casa, setCasa] = useState(null)
    const [images, setImages] = useState([])
    const [imagesPreview, setImagesPreview] = useState([null])

    var fileObj = []
    var fileArray = []
    useEffect(() => {
        (async () => {
            await axios.get(`https://logis.live/api/images/${id}`).then((res) => setCasa(res.data)).catch(err => console.log(err))

        })()
    }, [])
    const newData = {
        ubication: "Merida"
    }

    const uploadMultipleImages = (e) => {
        setImages(e.target.files)
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setImagesPreview(fileArray)
    }



    const updateData = async (id) => {


            const formData = new FormData()
        for (const img of images) {
            formData.append('files', img)
            console.log(img)
        }
  



        await axios.put(`https://logis.live/api/images/update/${id}` , newData  ).then((res) => {
            swal("se actualizado correctamente", {
                icon: "success"
            })
            setImages(null)

        }).catch(err => console.log(err))
        await axios.put(`https://logis.live/api/images/update/${id}` , formData )


    }


    return (
        <div className='d-flex '>

            <div id="page-content-wrapper" className="w-100 bg-light-blue">

                <div id="content" className="container ">
                    <h1 className='mt-5 bg-primary'>Editar propiedad</h1>

                    <hr />
                    <div className="py-3">
                        <div className="row m-4">
                            <div className="col-lg-12 ">

                                <h3 className='text-dark'>Actual</h3>


                                {casa
                                    ? <div className="row">

                                        <div className="col-lg-6">
                                            <h5>Titulo:</h5>
                                            <input className='form-control' type="text" onChange={(e) => {
                                                newData.title = e.target.value

                                            }} defaultValue={casa.title} />
                                            <h5>Metros de construcción:</h5>
                                            <input className='form-control' onChange={(e) => {
                                                newData.mtsConst = e.target.value
                                            }} defaultValue={casa.mtsConst} />
                                            <h5>Metros de Terreno:</h5>
                                            <input className='form-control' onChange={(e) => {
                                                newData.mtsTerr = e.target.value
                                            }} defaultValue={casa.mtsTerr} />
                                            <h5>Tipo de operación:</h5>
                                            <input className='form-control' onChange={(e) => {
                                                newData.typeOperation = e.target.value
                                            }} defaultValue={casa.typeOperation} />
                                            <h5>Habitaciones:</h5>
                                            <input className='form-control' onChange={(e) => {
                                                newData.rooms = e.target.value
                                            }} defaultValue={casa.rooms} />
                                            <h5>Baños:</h5>
                                            <input className='form-control' onChange={(e) =>
                                                newData.bathRooms = e.target.value
                                            } defaultValue={casa.bathRooms} />
                                            <h5>Baños:</h5>
                                            <input className='form-control' onChange={(e) => {
                                                newData.parking = e.target.value
                                            }} defaultValue={casa.parking} />
                                            <h5>Ubicación:</h5>
                                            <select onChange={(e) => {
                                                newData.ubication = e.target.value
                                            }} className='form-control' name="" id="">
                                                <option selected="selected" value="Merida">Merida</option>
                                                <option value="Cancun">Cancun</option>
                                                <option value="Playa del carmen">Playa del carmen</option>
                                            </select>

                                            <h5>Descripción:</h5>
                                            <textarea rows="10" className='form-control' onChange={(e) => {
                                                newData.description = e.target.value
                                            }} defaultValue={casa.description} />

                                        </div>
                                        <div className="col-lg-6 ">

                                            <AwesomeSlider bullets={false}>
                                                {
                                                    casa.url.map((imgs) => (


                                                        <div key={imgs} >

                                                            <img className="img-fluid" loading="lazy" src={imgs} alt="" />



                                                        </div>






                                                    ))
                                                }
                                            </AwesomeSlider>: <div className=""></div>
                                            <div className="mb-4">

                                                <div className="d-flex">
                                                    <div class="file-select m-5" id="src-file1" >
                                                        <input type="file" onChange={uploadMultipleImages} multiple aria-label="Archivo" />
                                                    </div>
                                                    
                                                    <div className="m-5">
                                                        <button onClick={() => updateData(casa._id)} className="btn btn-success border border-0 m">Guardar Cambios</button>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6">
                                                    {
                                                        imagesPreview.map(url => (
                                                            <div className="row">
                                                                <div className="col-lg-12 p-3">
                                                                    <img src={url} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>

                                        </div>
                                    </div> : <div className=""></div>

                                }



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasaIdEdit
