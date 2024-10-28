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

        let regexNombre = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
        let regexApellidos = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
        let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let regexTelefono = /^[0-9]{9}$/
        let regexNombrePerro = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
        let regexRaza = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+(( |\-)[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?(( |\-)[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
        let regexCarrera = /^(corta|larga)$/

        

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
                </div>     
                <div className="botones">
                        <button className="boton_editar" 
                                onClick={ () => {
                                        if(editandoNombre || editandoApellidos || editandoEmail || editandoTelefono || editandoPerro || editandoRaza || editandoCarrera){
                                                if(textoTemporalNombre.trim() != "" && regexNombre.test(textoTemporalNombre) && textoTemporalNombre != nombre || textoTemporalApellidos.trim() != "" && regexApellidos.test(textoTemporalApellidos) && textoTemporalApellidos != apellidos || textoTemporalEmail.trim() != "" && regexEmail.test(textoTemporalEmail) && textoTemporalEmail != email || textoTemporalTelefono.trim() != "" && regexTelefono.test(textoTemporalTelefono) && textoTemporalTelefono != telefono || textoTemporalNombrePerro.trim() != "" && regexNombrePerro.test(textoTemporalNombrePerro) && textoTemporalNombrePerro != perro || textoTemporalRaza.trim() != "" && regexRaza.test(textoTemporalRaza) && textoTemporalRaza != raza || inputCarrera.trim() != "" && regexCarrera.test(inputCarrera) && inputCarrera != carrera){
                                                        return fetch("https://proyecto-final-fullstack-backend-isma.onrender.com/participantes/actualizar/participante/" + id, {
                                                                method : "PUT",
                                                                body : JSON.stringify({ 
                                                                        nombre : textoTemporalNombre.trim(),
                                                                        apellidos : textoTemporalApellidos.trim(), 
                                                                        email : textoTemporalEmail.trim(), 
                                                                        telefono : textoTemporalTelefono.trim(),
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
                                                                        actualizarParticipante(id,textoTemporalNombre.trim(),textoTemporalApellidos.trim(),textoTemporalEmail.trim(),textoTemporalTelefono.trim(),textoTemporalNombrePerro.trim(),textoTemporalRaza.trim(),inputCarrera.trim())

                                                                        setTextoTemporalNombre(textoTemporalNombre.trim())
                                                                        setTextoTemporalApellidos(textoTemporalApellidos.trim())
                                                                        setTextoTemporalEmail(textoTemporalEmail.trim())
                                                                        setTextoTemporalTelefono(textoTemporalTelefono.trim())
                                                                        setTextoTemporalNombrePerro(textoTemporalNombrePerro.trim())
                                                                        setTextoTemporalRaza(textoTemporalRaza.trim())
                                                                        setInputCarrera(inputCarrera.trim())

                                                                        setEditandoNombre(false)
                                                                        setEditandoApellidos(false)
                                                                        setEditandoEmail(false)
                                                                        setEditandoTelefono(false)
                                                                        setEditandoPerro(false)
                                                                        setEditandoRaza(false)
                                                                        
                                                                        return setEditandoCarrera(false)
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

                                                setTextoTemporalNombrePerro(perro)
                                                setEditandoPerro(false)

                                                setTextoTemporalRaza(raza)
                                                setEditandoRaza(false)
                                                
                                                setInputCarrera(carrera)
                                                setEditandoCarrera(false)
                                        }else{
                                                setEditandoNombre(true)
                                                setEditandoApellidos(true)
                                                setEditandoEmail(true)
                                                setEditandoTelefono(true)
                                                setEditandoPerro(true)
                                                setEditandoRaza(true)
                                                setEditandoCarrera(true)
                                        }     
                                        } }
                                >{ editandoNombre || editandoApellidos || editandoEmail || editandoTelefono || editandoPerro || editandoRaza || editandoCarrera ? <i className="fa-regular fa-floppy-disk"><span>guardar</span></i> : <i className="fa-regular fa-pen-to-square"><span>editar</span></i> }
                        </button>
                        <button className="boton_borrar"
                                onClick={ () => {
                                        fetch("https://proyecto-final-fullstack-backend-isma.onrender.com/participantes/borrar/" + id, {
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
                                <i className="fa-regular fa-trash-can"><span>borrar</span> </i>           
                        </button>
                </div>

        </section>)
}

export default Participante