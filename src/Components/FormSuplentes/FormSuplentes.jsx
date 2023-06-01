import React from 'react'
import { useState } from 'react';

function FormSuplentes(props) {
    const [posicion, setPosicion] = useState("");
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");

    const handlePosicion = (e) => { setPosicion(e.target.value) }
    const handleNombre = (e) => { setNombre(e.target.value) }
    const handleNumero = (e) => { setNumero(e.target.value) }
    const handleSubmit = (e) => { e.preventDefault(), props.handleSuplentes(suplente) }

    const suplente = {
        nombre: nombre,
        numero: numero,
        posicion: posicion
    }

    return (
        <div className='formContainer'>
{props.lista.length < 7? 
    <div className='formSupContainer'>
            <h1>Ingresar Suplentes</h1>
            <form onSubmit={handleSubmit} className='formIngreso'>
                <input onChange={handleNombre} type="text" placeholder='Nombre' />
                <input onChange={handleNumero} type="text" placeholder='Numero' />
                <select onChange={handlePosicion} name='posiciones'>
                    <option disabled selected >Seleccionar posición</option>
                    <option value="golero">Golero</option>
                    <option value="lateralIzquierdo">lateralIzquierdo</option>
                    <option value="lateralDerecho">lateralDerecho</option>
                    <option value="centralIzquierdo">centralIzquierdo</option>
                    <option value="centralDerecho">centralDerecho</option>
                    <option value="volanteDerecho">volanteDerecho</option>
                    <option value="volanteIzquierdo">volanteIzquierdo</option>
                    <option value="mediocampista">mediocampista</option>
                    <option value="delanteroDerecho">delanteroDerecho</option>
                    <option value="delanteroIzquierdo">delanteroIzquierdo</option>
                </select>
                <button type='submit'>Agregar</button>
            </form>
            </div>:<></>
}
            
           
        </div>
    )
}

export default FormSuplentes