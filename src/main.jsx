import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Inicio from './Inicio.jsx'
import App from './App.jsx'
import Rutas from './Rutas.jsx'
import Error from './Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element : <Inicio />,
    errorElement : <Error />
  },
  {
    path: "/formulario",
    element : <App />
  },
  {
    path: "/rutas",
    element : <Rutas />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
