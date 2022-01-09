import React, { useState } from 'react'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import axios from 'axios'

import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const UploadHome = () => {
    const [images, setImages] = useState([])
    //Ver vista previa de imagenes  
    const [imgPreview, setImgPreview] = useState([null])
    var fileObj = []
    var fileArray = []

    const uploadMultipleImages = (e)=>{
       setImages(e.target.files)
       fileObj.push(e.target.files)
       for (let i = 0; i < fileObj[0].length; i++) {
         fileArray.push(URL.createObjectURL(fileObj[0][i]))
       }
       setImgPreview(fileArray)
    } 

  
    //Estados de los datos de la propiedad

    const [type, setType] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [typeOperation, setTypeOperation] = useState(null)
    const [rooms, setRooms] = useState(null)
    const [bathRooms, setBathRooms] = useState(null)
    const [halfBathrooms, setHalfBathrooms] = useState(null)
    const [parking, setParking] = useState(null)
    const [mtsConstruction, setMtsConstruction] = useState(null)
    const [mtsTerrain, setMtsTerrain] =  useState(null)
    const [longTerrain, setLongTerrain] = useState(null)
    const [frontTerrain, setFrontTerrain] = useState(null)
    const [yearConstruction, setYearConstruction] = useState(null)
    const [floorNumber, setFloorNumber] = useState(null)
    const [numberOfFloors, setNumberFloors] = useState(null)
    const [maintenance, setMaintenance] = useState(null)
    const [internalKey, setInternalKey] = useState(null)
    const [keyOfKey, setKeyOfKey] = useState(null)
    const [ubication,setUbication] = useState(null)


    const [status, setStatus] = useState('')

    const Upload = async (e)=>{
        e.preventDefault()
        var formData = new FormData()
        for(const img of images){
            formData.append('files',img)
            console.log(img)
        }
        formData.append('title', title)
        formData.append('description', description)
        formData.append('typeOperation', typeOperation)
        formData.append('rooms', rooms)
        formData.append('bathRooms', bathRooms)
        formData.append('halfBathrooms',halfBathrooms)
        formData.append('parking', parking)
        formData.append('mtsConst', mtsConstruction)
        formData.append('mtsTerr', mtsTerrain)
        formData.append('longTerrain', longTerrain)        
        formData.append('frontTerrain', frontTerrain)
   
        formData.append('floorNumber',floorNumber)
        formData.append('numberOfFloors', numberOfFloors)
        formData.append('maintenance',maintenance)  
        formData.append('internalKey',internalKey)
        formData.append('keyOfKey',keyOfKey)
        formData.append('ubication', ubication)
        await axios.post('https://logis.live/api/images/upload',formData).then((res)=>{
            setStatus(res.data)
            swal("Se a agregado correctamente la propiedad",{
                icon:"success"
            })
        }).catch((err)=>{
            console.log(err)
            console.log(formData)
        })
    }

    return (
        <div className="d-flex">
            <Menu/>
             <div id="page-content-wrapper" className="w-100 bg-light-blue">
    
    <Nav/>

    <div id="content" className="container-fluid p-5">
        <div className="bg-blue w-100">
            <h3 className="text-white p-2">Crear propiedad</h3>
        </div>
        <section className="py-3">
            <div className="row">
                <div className="col-xl-6 col-lg-6">

                    <form >
                       

                        <div className="p-3">
                            <h3>Agregar imagenes</h3>
                            <div class="file-select" id="src-file1" >
                                <input type="file" onChange={uploadMultipleImages} multiple  aria-label="Archivo"/>
                            </div>

                      
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Titulo del anuncio</label>
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="" className="form-control" />
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Descripción del anuncio</label>
                            <textarea name=""  onChange={(e)=>setDescription(e.target.value)} id="" cols="30" rows="5" style={{ maxHeight: 170 }} className="form-control"></textarea>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Tipo de operación</label>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio1" onChange={(e)=>setTypeOperation(e.target.value)} value="Venta" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadio1">Venta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" onChange={(e)=>setTypeOperation(e.target.value)} value="Renta" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadio2">Renta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3" onChange={(e)=>setTypeOperation(e.target.value)} value="Renta temporal" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadio3">Renta temporal</label>
                            </div>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Recamaras</label>
                            <select onChange={(e)=>setRooms(e.target.value)} className="form-control" name="" id="">
                                <option value="0">Ninguno</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Baños</label>
                            <select onChange={(e)=>setBathRooms(e.target.value)} className="form-control" name="" id="">
                                <option value="0">Ninguno</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Medios baños</label>
                            <select onChange={(e)=>setHalfBathrooms(e.target.value)} className="form-control" name="" id="">
                                <option value="0">Ninguno</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Estacionamientos</label>
                            <select onChange={(e)=>setParking(e.target.value)} className="form-control" name="" id="">
                                <option value="0">Ninguno</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Construcción</label>
                            <div class="input-group">
                                <input onChange={(e)=>setMtsConstruction(e.target.value)} type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                <div class="input-group-append">
                                    <span class="input-group-text">m²</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Terreno</label>
                            <div class="input-group">
                                <input type="text" onChange={(e)=>setMtsTerrain(e.target.value)} class="form-control" aria-label="Amount (to the nearest dollar)" />
                                <div class="input-group-append">
                                    <span class="input-group-text">m²</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Largo del terreno</label>
                            <div class="input-group">
                                <input type="number" onChange={(e)=>setLongTerrain(e.target.value)} class="form-control" aria-label="Amount (to the nearest dollar)" />
                                <div class="input-group-append">
                                    <span class="input-group-text">m</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Frente del terreno</label>
                            <div class="input-group">
                                <input type="number" onChange={(e)=>setFrontTerrain(e.target.value)} class="form-control" aria-label="Amount (to the nearest dollar)" />
                                <div class="input-group-append">
                                    <span class="input-group-text">m</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <label htmlFor="">Año de construcción</label>
                            <input onChange={(e)=>yearConstruction(e.target.value)} className="form-control" type="text" />
                        </div>

                        <div className="p-3">
                            <label htmlFor="">Piso en el que se encuentra</label>
                            <input  type="text" onChange={(e)=>setFloorNumber(e.target.value)} className="form-control" />
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Cantidad de pisos en el edificio</label>
                            <input type="text" onChange={(e)=>setNumberFloors(e.target.value)} className="form-control" />
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Mantenimiento mensual</label>
                            <input type="text" onChange={(e)=>setMaintenance(e.target.value)} className="form-control" />
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Clave interna</label>
                            <input type="text" onChange={(e)=>setInternalKey(e.target.value)} className="form-control" placeholder="EJ. DPTO123" />
                        </div>
                        <div className="p-3">
                            <label htmlFor="">Clave de la llave</label>
                            <input type="text" onChange={(e)=>setKeyOfKey(e.target.value)} className="form-control" placeholder="Ej.C123" />
                        </div>

                        <h3 className="p-3">Ubicación</h3>
                        <div className="p-3">
                            <label htmlFor="">Selecciona la Ubicación</label>
                            <select onChange={(e)=>setUbication(e.target.value)} className="form-control" >
                                <option value="Merida">Merida</option>
                                <option value="Cancun">Cancun</option>
                                <option value="Playa del carmen">Playa del carmen</option>
                            </select>
                        </div>

                   

                        <div className="p-4 d-flex">
                            <button onClick={Upload} className="btn btn-blue rounded-0">Agregar propiedad</button>
                           
                        </div>


                    </form>
                </div>
                <div className="col-xl-6 col-lg-6">
                    {
                        imgPreview.map(url =>(
                           <div className="row">
                               <div className="col-lg-12 p-3">
                               <img src={url} className="img-fluid" alt="" />
                               </div>
                           </div>
                        ))
                    }
                </div>

            </div>




        </section>
    </div>
</div>
        </div>
    )
}

export default UploadHome
