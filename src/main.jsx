import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import FormEquipoTecnico from './Components/FormEqTec/FormEquipoTecnico'
// import FormSuplentes from './Components/FormSuplentes/FormSuplentes'
// import Formacion from './Components/Formacion/Formacion'
import FormTitulares from './Components/FormTitulares/FormTitulares'
import Hero from './Components/Hero'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Hero/>
  },
  {
    path:"/ingresoTitulares",
    element: <FormTitulares/>
  },
  // {
  //   path:"/ingresoSuplentes",
  //   element: <FormSuplentes/>
  // },
  // {
  //   path:"/ingresoCuerpoTec",
  //   element: <FormEquipoTecnico/>
  // },
  // {
  //   path:"/formacion",
  //   element: <Formacion/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
