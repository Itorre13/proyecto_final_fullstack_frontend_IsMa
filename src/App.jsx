import Formulario from './Formulario';
import Participante from './Participante';
import { useState,useEffect } from 'react';


function App() {

  let [participantes,setParticipantes] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/participantes")
    .then(respuesta => respuesta.json())
    .then(participantes => setParticipantes(participantes))
  },[])

  
  function agregarParticipante(participante){
    setParticipantes([...participantes,participante])
  }

  
  function borrarParticipante(id){
    setParticipantes(participantes.filter( participante => participante.id != id))
  }

  function actualizarParticipante(id,texto){
    setParticipantes(participantes.map( participante => {
      if(participante.id == id){
        participante.nombre = texto
      }
      return participante
     }))
  }

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
