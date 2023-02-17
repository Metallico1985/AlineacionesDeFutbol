import React from 'react'
import './Formacion.css'
import {IoMdShirt} from 'react-icons/all'

function Formacion(props) {

  return (
    <div className='mainFormacion'>
      <div className='ctYsup'>
      <div className='suplentes'></div>
      <div className='cuerpotecnico'></div>
      </div>
      <div className='cancha'>
      <div className='gridCancha'>
{props.lista.map((item)=>(
  <>
  <div className= {`${item.posicion} posicion`}> 
  <div><IoMdShirt /></div>
  <div>{item.nombre}</div> 
  <div>{item.numero}</div> 
  
  
  </div>
  </>
))}
      </div>
      </div>
    </div>
  )
}

export default Formacion