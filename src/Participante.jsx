import { useState } from 'react'

function Participante({id,nombre,apellidos,email,telefono,perro,raza,carrera,actualizarParticipante,borrarParticipante}){

        let [editandoNombre,setEditandoNombre] = useState(false)
        let [editandoApellidos,setEditandoApellidos] = useState(false)
        let [editandoEmail,setEditandoEmail] = useState(false)
        let [editandoTelefono,setEditandoTelefono] = useState(false)

        let [editandoPerro,setEditandoPerro] = useState(false)
        let [editandoRaza,setEditandoRaza] = useState(false)
        let [editandoCarrera,setEditandoCarrera] = useState(false)

        let [textoTemporalNombre,setTextoTemporalNombre] = useState(nombre)
        let [textoTemporalApellidos,setTextoTemporalApellidos] = useState(apellidos)
        let [textoTemporalEmail,setTextoTemporalEmail] = useState(email)
        let [textoTemporalTelefono,setTextoTemporalTelefono] = useState(telefono)

        let [textoTemporalNombrePerro,setTextoTemporalNombrePerro] = useState(perro)
        let [textoTemporalRaza,setTextoTemporalRaza] = useState(raza)
        let [inputCarrera,setInputCarrera] = useState(carrera)

    return(<section className="participante">
                <div className="nombre_participante">
                        <h2 className={ !editandoNombre ? "visible" : ""}>{ nombre } { apellidos }</h2>
                        <h3 className={  !editandoApellidos || !editandoEmail || !editandoTelefono  ? "visible" : ""}>{ email } <b>/</b> { telefono }</h3>
                        <input  className={ editandoNombre ? "visible" : ""}
                                type="text"
                                value={ textoTemporalNombre }
                                onChange= { evento => setTextoTemporalNombre(evento.target.value) }
                                />
                        <input  className={ editandoApellidos ? "visible" : ""}
                                type="text"
                                value={ textoTemporalApellidos }
                                onChange= { evento => setTextoTemporalApellidos(evento.target.value) }
                                />
                        <input  className={ editandoEmail ? "visible" : ""}
                                type="text"
                                value={ textoTemporalEmail }
                                onChange= { evento => setTextoTemporalEmail(evento.target.value) }
                                /> 
                        <input  className={ editandoTelefono ? "visible" : ""}
                                type="text"
                                value={ textoTemporalTelefono }
                                onChange= { evento => setTextoTemporalTelefono(evento.target.value) }
                                />     
                        <button className="boton" 
                                onClick={ () => {
                                        if(editandoNombre || editandoApellidos || editandoEmail || editandoTelefono){
                                                if(textoTemporalNombre.trim() || textoTemporalApellidos.trim() || textoTemporalEmail.trim() || textoTemporalTelefono.trim() != "" && textoTemporalNombre.trim() != nombre && textoTemporalApellidos.trim() != apellidos && textoTemporalEmail.trim() != email && textoTemporalTelefono.trim() != telefono){
                                                        return fetch("http://localhost:4000/participantes/actualizar/participante/" + id, {
                                                                method : "PUT",
                                                                body : JSON.stringify({ 
                                                                        nombre : textoTemporalNombre.trim(),
                                                                        apellidos : textoTemporalApellidos.trim(), 
                                                                        email : textoTemporalEmail.trim(), 
                                                                        telefono : textoTemporalTelefono.trim() 
                                                                        }),
                                                                headers : {
                                                                        "Content-type" : "application/json"
                                                                }
                                                        })
                                                        .then(respuesta => respuesta.json())
                                                        .then(({error,resultado}) => {
                                                                if(!error && resultado == "ok"){
                                                                        actualizarParticipante(id,textoTemporalNombre.trim(),textoTemporalApellidos.trim(),textoTemporalEmail.trim(),textoTemporalTelefono.trim())

                                                                        setTextoTemporalNombre(textoTemporalNombre.trim()) + setTextoTemporalApellidos(textoTemporalApellidos.trim()) + setTextoTemporalEmail(textoTemporalEmail.trim()) + setTextoTemporalTelefono(textoTemporalTelefono.trim())
                                                                        return setEditandoNombre(false) + setEditandoApellidos(false) + setEditandoEmail(false) + setEditandoTelefono(false)
                                                                }
                                                                console.log("...error al actualizar participante")
                                                        })
                                                }
                                                setTextoTemporalNombre(nombre)
                                                setEditandoNombre(false)
                                                setTextoTemporalApellidos(apellidos)
                                                setEditandoApellidos(false)
                                                setTextoTemporalEmail(email)
                                                setEditandoEmail(false)
                                                setTextoTemporalTelefono(telefono)
                                                setEditandoTelefono(false)
                                        }else{
                                                setEditandoNombre(true)
                                                setEditandoApellidos(true)
                                                setEditandoEmail(true)
                                                setEditandoTelefono(true)
                                        }     
                                        } }
                                >{ editandoNombre || editandoApellidos || editandoEmail || editandoTelefono ? <i className="fa-regular fa-floppy-disk"><span>guardar</span></i> : <i className="fa-regular fa-pen-to-square"><span>editar</span></i> }
                        </button>
                </div>
                <div className="nombre_perro">
                        <h2 className={ !editandoPerro ? "visible" : ""}>{ perro }</h2>
                        <h3 className={ !editandoRaza || !editandoCarrera ? "visible" : ""}>Raza: { raza } / Carrera: { carrera }</h3>
                        <input  className={ editandoPerro ? "visible" : ""} type="text"
                                value={ textoTemporalNombrePerro }
                                onChange= { evento => setTextoTemporalNombrePerro(evento.target.value) }
                                />
                        <input  className={ editandoRaza ? "visible" : ""} type="text"
                                value={ textoTemporalRaza }
                                onChange= { evento => setTextoTemporalRaza(evento.target.value) }
                                />
                        <input  className={ editandoCarrera ? "visible" : ""} type="text"
                                value={ inputCarrera }
                                onChange= { evento => setInputCarrera(evento.target.value) }
                                />

                        <button className="boton"
                                onClick={ () => {
                                        if(editandoPerro || editandoRaza || editandoCarrera){
                                                if(textoTemporalNombrePerro.trim() && textoTemporalRaza.trim() && inputCarrera.trim() != "" && textoTemporalNombrePerro.trim() != perro && textoTemporalRaza.trim() != raza && inputCarrera.trim() != carrera){
                                                        return fetch("http://localhost:4000/participantes/actualizar/participante/" + id, {
                                                                method : "PUT",
                                                                body : JSON.stringify({
                                                                        perro : textoTemporalNombrePerro.trim(),
                                                                        raza : textoTemporalRaza.trim(),
                                                                        carrera : inputCarrera.trim()
                                                                        }),
                                                                headers : {
                                                                        "Content-type" : "application/json"
                                                                }
                                                        })
                                                        .then(respuesta => respuesta.json())
                                                        .then(({error,resultado}) => {
                                                                if(!error && resultado == "ok"){
                                                                        actualizarParticipante(id,textoTemporalNombrePerro.trim(),textoTemporalRaza.trim(),inputCarrera.trim())

                                                                        setTextoTemporalNombrePerro(textoTemporalNombrePerro.trim()) + setTextoTemporalRaza(textoTemporalRaza.trim()) + setInputCarrera(inputCarrera.trim())
                                                                        return setEditandoPerro(false) + setEditandoRaza(false) + setEditandoCarrera(false)
                                                                }
                                                                console.log("...error al actualizar participante")
                                                        })
                                                }
                                                setTextoTemporalNombrePerro(perro)
                                                setEditandoPerro(false)

                                                setTextoTemporalRaza(raza)
                                                setEditandoRaza(false)
                                                
                                                setInputCarrera(carrera)
                                                setEditandoCarrera(false)
                                        }else{
                                                setEditandoPerro(true)
                                                setEditandoRaza(true)
                                                setEditandoCarrera(true)
                                        }     
                                        } }
                                >{ editandoPerro || editandoRaza || editandoCarrera  ? <i className="fa-regular fa-floppy-disk"><span>guardar</span></i> : <i className="fa-regular fa-pen-to-square"><span>editar</span></i> }
                        </button>
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
                        >
                        <span>borrar</span>
                        <i className="fa-regular fa-trash-can"></i>
                </button>

        </section>)
}

export default Participante