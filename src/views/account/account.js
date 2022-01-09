import React from 'react'
import useAuth from '../../auth/useAuth';
import Cookies from 'universal-cookie/';
const Account = () => {
    const cookies = new Cookies()
    const {user} = useAuth()
    return (
        <div className='container'>
           <div className="row mt-4">
               <div className="col-lg-12 text-center">
                   <img className='img-fluid' style={{
                       width: '200px',
                       height: '200px',
                       borderRadius: '50%',
                       objectFit: 'cover'
                   }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" alt="" />
               </div>
               <div className="col mt-4">
                   <div className="card">
                       <p className='text-center'><b>Nombre: </b>{cookies.get('user').nombre}</p>
              
                       <p className='text-center'><b>Rol: </b>{cookies.get('user').role}</p>
                       <button className='btn btn-warning'> Editar cuenta</button>
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Account;
