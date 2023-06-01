import React from 'react'
import { useState } from 'react';

function FormEquipoTecnico(props) {

  const [nombre, setNombre] = useState("");
  const [funcion, setFuncion] = useState("");

  const handleFuncion = (e) => { setFuncion(e.target.value) }
  const handleNombre = (e) => { setNombre(e.target.value) }
  const handleSubmit = (e) => { e.preventDefault(), props.handleCuerpoTecnico(integrante)}
 
  const integrante = {
    nombre: nombre,
    funcion: funcion,

  }

  return (
    <div className='formContainer'>
      {props.lista.length <3?
       <div className='cuerpoTecContainer'>
       <h1>Ingresar cuerpo tecnico</h1>
       <form onSubmit={handleSubmit} className='formIngreso'>
         <input onChange={handleNombre} type="text" placeholder='Nombre' />
         <select onChange={handleFuncion} name='posiciones'>
           <option disabled selected >Seleccionar posición</option>
           <option value="directorTecnico">Director Tecnico</option>
           <option value="ayudanteTecnico">Ayudante Tecnico</option>
           <option value="preparadorFisico">Preparador Fisico</option>
         </select>
         <button type='submit'>Agregar</button>
       </form>
     </div>
     :<></>
      }
     

    </div>
  )
}

export default FormEquipoTecnico