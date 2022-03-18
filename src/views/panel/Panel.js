import React, { useEffect, useState } from 'react'
import './bootstrap.min.css'

import './app.css'

import axios from 'axios'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'






const Panel = () => {


  const [status, setStatus] = useState(false)
  const [propiedad, setPropiedad] = useState(false)

  const receivedProp = async (id) => {
    await axios.get(`https://logis.live/api/images/${id}`).then((res) => { setPropiedad(res.data) }).catch((err) => console.log(err))
  }

  const [clientQuestion, setClientQuestion] = useState([])
  const [clientConsult, setClientConsult] = useState([])
  useEffect(() => {

    (async () => {
      await axios.get('https://logis.live/api/messageConsult/').then((res) => {
        setClientConsult(res.data)
        console.log(res)
      }).catch(err => console.log(err))
    })();
    (async () => {
      await axios.get('https://logis.live/api/messageQuestion/').then((res) => { setClientQuestion(res.data) }).catch(err => console.log(err))
    })();

  }, [setStatus])



  return (

    <div className="d-flex" id="content-wrapper">

      <Menu />
      <div id="page-content-wrapper" className="w-100 bg-light-blue">

        <Nav />

        <div id="content" className="container-fluid p-5">
          <section className="py-3">



            <div className="row mb-3">

             

              <div className="col-xl-9 col-lg-12">
                <div className="card mb-5 shadow-sm border-0 shadow-hover">
                  <div className="card-header bg-light border-0 pt-3 pb-0">
                    <h6 className="mb-0">Contactalos</h6>
                  </div>
                  <div className="card-body">
                    <div className="list-group">
                      <div className="list-group-item d-flex justify-content-between align-items-center">
                        Mensajes de propiedad
                        <span className="badge badge-dark badge-pill">{clientQuestion.count}</span>

                      </div>
                      <div className="list-group-item d-flex justify-content-between align-items-center">
                        Mensajes de consulta
                        <span className="badge badge-dark badge-pill">{clientConsult.count}</span>

                      </div>
                    </div>




                    <div className="text-center pt-3">
                      <button className="btn btn-secondary" onClick={() => setStatus(true)} ><small>Ver todos los mensajes</small></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>



            {
              status

                ? <table class="table table-bordered table">

                  <thead>
                    <tr>
                      <span onClick={() => setStatus(false)} className='btn btn-danger'><i className="icon ion-md-close-circle "></i></span>
                    </tr>
                    <tr>       <hr />
                      <h3>Mensajes de propiedad</h3></tr>
                    <tr>
                      <th scope="col">#ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Numero</th>
                      <th scope="col">Mensaje</th>
                      <th scope="col">Propiedad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      clientQuestion.userQuestion.map(user => {
                        return (
                          <tr>
                            <th scope="row">{user._id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.tel}</td>
                            <td>{user.message}</td>
                            <td><button type="button" onClick={() => receivedProp(user.idProp)} className="btn btn-dark border-0" data-toggle="modal" data-target=".bd-example-modal-lg">Ver..</button>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
                : <div className=""></div>
            }

            {status
              ?
              <table class="table table-bordered table">

                <thead>
                  <tr>
                    <hr />
                    <h3>Mensajes de Consulta</h3>
                  </tr>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Numero</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    clientConsult.userConsult.map(user => {
                      return (
                        <tr>
                          <th scope="row">{user._id}</th>
                          <td>{user.name + ' ' + user.lastname}</td>
                          <td>{user.email}</td>
                          <td>{user.tel}</td>


                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
              : <div className=""></div>


            }
            {
              propiedad ?
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                      <h1 class="modal-title">{propiedad.title}</h1>
                      <div className="modal-body">
                        <img src={propiedad.url[0]} className='img-fluid' alt="" />
                      </div>
                    </div>
                  </div>

                </div> : <div></div>
            }

          </section>
        </div>
      </div>
    </div>


  )
}

export default Panel
