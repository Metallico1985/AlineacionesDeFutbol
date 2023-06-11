import React from 'react'
import './Formacion.css'
import { IoMdShirt } from 'react-icons/all'

function Formacion(props) {

  return (
    <div className='mainFormacion'>
      <div className='cancha'>
        <div className='gridCancha'>
          {props.lista.map((item) => (
            <>
              <div className={`${item.posicion} posicion`}>
                <div><IoMdShirt size={50} color='' /></div>
                <div>{item.nombre}</div>
                <div>{item.numero}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className='ctYsup'>
        <h2>Suplentes</h2>
        <div className='suplentes'>
          {props.suplentes.map((item) => (
            <>
              <div className='txtSuplentes'>
                <div className='supNumero txtColor'>{item.numero}</div>
                <div className=' txtColor'>{item.nombre}</div>
              </div>

            </>
          ))}
        </div>
        <h2>Cuerpo Técnico</h2>
        <div className='cuerpoTecnico'>
          {props.cuerpoTecnico.map((item) => (
            <>
              <div className='ctFuncion txtColor'>{item.funcion}</div>
              <div className=' txtColor'>{item.nombre}</div>

            </>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Formacion