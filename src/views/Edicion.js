import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


import axios from 'axios'
import swal from 'sweetalert'
const Edicion = () => {
const { id } = useParams()

const [casa, setCasa] = useState([])
const [images, setImages] = useState([])
const [imagesPreview, setImagesPreview] = useState([])

var fileObj = []
var fileArray = []
useEffect(() => {
    (async () => {
        await axios.get(`https://logis.live/api/images/${id}`).then((res) => setCasa(res.data)).catch(err => console.log(err))

    })()
}, [id])

console.log(casa)

  return (
    <>
        {
       
        }
    </>
  )
}

export default Edicion