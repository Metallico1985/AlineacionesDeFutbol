import React from 'react'
import { useState } from 'react'
import Formacion from '../Formacion/Formacion'
import FormSuplentes from '../FormSuplentes/FormSuplentes'
import FormEquipoTecnico from '../FormEqTec/FormEquipoTecnico'
import './FormIngreso.css'

function FormTitulares() {

  const [posicion, setPosicion] = useState("");
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [titulares, setTitulares] = useState([])

  const handlePosicion = (e) => { setPosicion(e.target.value) }
  const handleNombre = (e) => { setNombre(e.target.value) }
  const handleNumero = (e) => { setNumero(e.target.value) }
  const agregarTitular = (t) => { setTitulares([...titulares, t]) }
  const handleSubmit = (e) => { e.preventDefault(), agregarTitular(titular), console.log(titulares) }

  const [ct, setCt] = useState([])
  const handleCuerpoTecnico = (i) => { setCt([...ct, i]), console.log(ct) }

  const [suplentes, setSuplentes] = useState([])
  const handleSuplentes = (s) => { setSuplentes([...suplentes, s]) }

  const titular = {
    nombre: nombre,
    numero: numero,
    posicion: posicion
  }

  return (
    <div className='mainContainer'>

      {titulares.length < 11 ?
        <div className='formContainer'>
          <h1>Ingresar plantel titular</h1>
          <form onSubmit={handleSubmit} className='formIngreso'>
            <input onChange={handleNombre} type="text" placeholder='Nombre' />
            <input onChange={handleNumero} type="text" placeholder='Numero' />
            <select onChange={handlePosicion} name='posiciones'>
              <option disabled selected >Seleccionar posición</option>
              <option value="golero">Golero</option>
              <option value="lateralIzq">lateralIzquierdo</option>
              <option value="lateralDer">lateralDerecho</option>
              <option value="centralIzq">centralIzquierdo</option>
              <option value="centralDer">centralDerecho</option>
              <option value="volanteDer">volanteDerecho</option>
              <option value="volanteIzq">volanteIzquierdo</option>
              <option value="medioDer">mediocampista Derecho</option>
              <option value="medioIzq">mediocampista Izquierdo</option>
              <option value="delanteroDer">delanteroDerecho</option>
              <option value="delanteroIzq">delanteroIzquierdo</option>
            </select>
            <button type='submit'>Agregar</button>
          </form>
        </div> :
        <div className='leftSideMain'>
          <FormSuplentes handleSuplentes={handleSuplentes} lista={suplentes} />
          <FormEquipoTecnico handleCuerpoTecnico={handleCuerpoTecnico} lista={ct} />
        </div>}
      <Formacion cuerpoTecnico={ct} lista={titulares} suplentes={suplentes} />
    </div>
  )
}

export default FormTitulares