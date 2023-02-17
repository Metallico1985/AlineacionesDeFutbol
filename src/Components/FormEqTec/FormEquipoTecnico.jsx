import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FormEquipoTecnico() {

  const [nombre, setNombre] = useState("");
  const [funcion, setFuncion] = useState("");
  const [cuerpoTec, setCuerpoTec] = useState([])

  const handleFuncion = (e) => { setFuncion(e.target.value) }
  const handleNombre = (e) => { setNombre(e.target.value) }
  const agregar = (t) => { setCuerpoTec([...cuerpoTec, t]) }
  const handleSubmit = (e) => { e.preventDefault(), agregar(integrante) }

  const integrante = {
    nombre: nombre,
    funcion: funcion,

  }

  return (
    <div className='formContainer'>
      {cuerpoTec.length <7?
       <div className='cuerpoTecContainer'>
       <h1>Ingresar cuerpo tecnico</h1>
       <form onSubmit={handleSubmit} className='formIngreso'>
         <input onChange={handleNombre} type="text" placeholder='Nombre' />
         <select onChange={handleFuncion} name='posiciones'>
           <option disabled selected >Seleccionar posición</option>
           <option value="directorTecnico">Director Tecnico</option>
           <option value="ayudanteTecnico">Ayudante Tecnico</option>
           <option value="preparadorFisico">Preparador Fisico</option>
           <option value="utilero">Utilero</option>
         </select>
         <button type='submit'>Agregar</button>
       </form>
     </div>:<></>
    }
     

    </div>
  )
}

export default FormEquipoTecnico