import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'
import Inicio from './Inicio.jsx'
import App from './App.jsx'
import Rutas from './Rutas.jsx'
import Error from './Error.jsx'


const router = createHashRouter([ // Constante con las rutas a cada una de las páginas. En lugar de usar url normales, usará la parte numerica (#) de la url para administrar la 'url de la aplicación'
  {
    path: "/", // Ruta
    element : <Inicio />, // Mostrará el fichero Inicio.jsx
    errorElement : <Error /> // En caso de error mostrará el fichero erro.jsx
  },
  {
    path: "/formulario", // Ruta
    element : <App /> // Mostrará el fichero App.jsx
  },
  {
    path: "/rutas", // Ruta
    element : <Rutas /> // Mostrará el fichero Rutas.jsx
  }
])

createRoot(document.getElementById('root')).render( // Coge el elemento raíz y lo renderiza pasándole el enrutador de datos con las diferentes rutas.
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
