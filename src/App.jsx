import Formulario from './Formulario.jsx'
import Participante from './Participante.jsx'
import { useState,useEffect } from 'react'


function App() { // Funcion con las principales funciones para interactuar con la base de datos y que retorna el formulario y la lista de participantes

  let [participantes,setParticipantes] = useState([]) // Variable de estado Participantes con su función para modificarla. Inicialmente estará vacía

  useEffect(() => {
    fetch("https://canicross-entresierras-backend.onrender.com/participantes") // Llamada a la base de datos para obtener la información
    .then(respuesta => respuesta.json()) // Pasamos la respuesta por .json para convertirla
    .then(participantes => setParticipantes(participantes)) // En la respuesta tendremos los participantes que se los pasaremos a la función de nuestra variable de estado
  },[])

  
  function agregarParticipante(participante){ // Función para agragar participantes pasándole el participante
    setParticipantes([...participantes,participante]) // Concaqueta el nuevo participante a los ya existentes
  }

  
  function borrarParticipante(id){ // Función para eliminar participante pasándole el id
    setParticipantes(participantes.filter( participante => participante.id != id)) // // 'Dibuja' los participantes y filtra el que tenga un id distinto
  }

  function actualizarParticipante(id,nombre,apellidos,email,telefono,perro,raza,carrera){ // Función para actualizar participante pasándole el id, nombre, apellidos, email, telefono, perro, raza y carrera
    setParticipantes(participantes.map( participante => { // Hace un map para modificar los datos e introducir el dato nuevo en cada uno de los apartados.
      if(participante.id == id){
        participante.nombre = nombre,
        participante.apellidos = apellidos,
        participante.email = email,
        participante.telefono = telefono,
        participante.perro = perro,
        participante.raza = raza,
        participante.carrera = carrera
      }
      return participante // Retorna el participante acualizado
     }))
  }

  // Retorna el Formulario con la función para agragar participantes. Un div con las flechas y un titular para indicar que a partir de ahí está la lista de participantes. Y una sección con cada uno de los participantes con cada uno de sus campos y las funciones actualizar y borrar

  return (
    <>
    <Formulario agregarParticipante={agregarParticipante} />
    <div className="lista_participantes">
        <div className="arrow_1"></div>
        <h2>Lista Participantes</h2>
        <div className="arrow_2"></div>
    </div>
    <section className="participantes">      
      { participantes.map( ({id,nombre,apellidos,email,telefono,perro,raza,carrera}) => < Participante
                                                                                          key={id}
                                                                                          id={id}
                                                                                          nombre={nombre}
                                                                                          apellidos={apellidos}
                                                                                          email={email}
                                                                                          telefono={telefono}
                                                                                          perro={perro}
                                                                                          raza={raza}
                                                                                          carrera={carrera}
                                                                                          actualizarParticipante={actualizarParticipante}
                                                                                          borrarParticipante={borrarParticipante}
                                                                                           /> )}
    </section>
    </>
  )
}

export default App
