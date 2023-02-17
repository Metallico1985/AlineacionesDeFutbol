import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

const navigate = useNavigate();    
  return (
    <div>
        <h1>Crear Alineacion</h1>
        <button onClick={()=>navigate("/ingresoTitulares")} >Comenzar</button>
    </div>
  )
}

export default Hero