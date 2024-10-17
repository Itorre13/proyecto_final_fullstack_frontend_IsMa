import { useState } from 'react'

function Participante({id,nombre,apellidos,email,telefono,perro,raza,carrera,actualizarParticipante,borrarParticipante}){

        let [editandoNombre,setEditandoNombre] = useState(false)
        let [editandoPerro,setEditandoPerro] = useState(false)
        let [textoTemporalNombre,setTextoTemporalNombre] = useState(nombre)
        let [textoTemporalApellidos,setTextoTemporalApellidos] = useState(apellidos)
        let [textoTemporalEmail,setTextoTemporalEmail] = useState(email)
        let [textoTemporalTelefono,setTextoTemporalTelefono] = useState(telefono)
        let [textoTemporalNombrePerro,setTextoTemporalNombrePerro] = useState(perro)
        let [textoTemporalRaza,setTextoTemporalRaza] = useState(raza)
        let [inputCarrera,setInputCarrera] = useState(carrera)

    return(<section className="participante">
                <div className="nombre_participante">
                        <h2 className={ !editandoNombre ? "visible" : ""}>{ nombre } { apellidos}</h2>
                        <h2 className={ !editandoNombre ? "visible" : ""}>email: { email } / teléfono: { telefono }</h2>
                        <input  className={ editandoNombre ? "visible" : ""} type="text"
                                        value={ textoTemporalNombre }
                                        onChange= { evento => setTextoTemporalNombre(evento.target.value) } />
                        <button className="boton"
                                        onClick={ () => {
                                        if(editandoNombre){
                                                if(textoTemporalNombre.trim() != "" && textoTemporalNombre.trim() != nombre){
                                                        return fetch("http://localhost:4000/participantes/actualizar/participante/" + id, {
                                                                method : "PUT",
                                                                body : JSON.stringify({ nombre : textoTemporalNombre.trim() }),
                                                                headers : {
                                                                        "Content-type" : "application/json"
                                                                }
                                                        })
                                                        .then(respuesta => respuesta.json())
                                                        .then(({error,resultado}) => {
                                                                if(!error && resultado == "ok"){
                                                                        actualizarParticipante(id,textoTemporalNombre.trim())
                                                                        setTextoTemporalNombre(textoTemporalNombre.trim())
                                                                        return setEditandoNombre(false)
                                                                }
                                                                console.log("...error al actualizar participante")
                                                        })
                                                }
                                                setTextoTemporalNombre(nombre)
                                                setEditandoNombre(false)
                                        }else{
                                                setEditandoNombre(true)
                                        }     
                                        } }
                                >{ editandoNombre ? "guardar" : "editar" }</button>
                </div>
                <div className="nombre_perro">
                        <h2 className={ !editandoPerro ? "visible" : ""}>{ perro }</h2>
                        <h2 className={ !editandoPerro ? "visible" : ""}>Raza:{ raza } / Carrera:{ carrera }</h2>
                        <input  className={ editandoPerro ? "visible" : ""} type="text"
                                        value={ textoTemporalNombre }
                                        onChange= { evento => setTextoTemporalNombre(evento.target.value) } />
                        <button className="boton"
                                        onClick={ () => {
                                        if(editandoPerro){
                                                if(textoTemporalNombre.trim() != "" && textoTemporalNombre.trim() != nombre){
                                                        return fetch("http://localhost:4000/participantes/actualizar/participante/" + id, {
                                                                method : "PUT",
                                                                body : JSON.stringify({ nombre : textoTemporalNombre.trim() }),
                                                                headers : {
                                                                        "Content-type" : "application/json"
                                                                }
                                                        })
                                                        .then(respuesta => respuesta.json())
                                                        .then(({error,resultado}) => {
                                                                if(!error && resultado == "ok"){
                                                                        actualizarParticipante(id,textoTemporalNombre.trim())
                                                                        setTextoTemporalNombre(textoTemporalNombre.trim())
                                                                        return setEditandoPerro(false)
                                                                }
                                                                console.log("...error al actualizar participante")
                                                        })
                                                }
                                                setTextoTemporalNombre(nombre)
                                                setEditandoPerro(false)
                                        }else{
                                                setEditandoPerro(true)
                                        }     
                                        } }
                                >{ editandoPerro ? "guardar" : "editar" }</button>
                </div>
                <button className="boton_borrar"
                        onClick={ () => {
                                fetch("http://localhost:4000/participantes/borrar/" + id, {
                                        method : "DELETE"
                                })
                                .then(respuesta => respuesta.json()
                                        )
                                .then(({error,resultado}) => {
                                        if(!error && resultado == "ok"){
                                                return borrarParticipante(id)
                                        }
                                        console.log("...error al borrar participante")
                                })
                        } }
                >borrar</button>
        </section>)
}

export default Participante