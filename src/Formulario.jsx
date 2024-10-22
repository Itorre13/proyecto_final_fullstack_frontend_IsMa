import { useState } from 'react';
import Participante from './Participante.jsx'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header.jsx';

function Formulario({agregarParticipante}){

    const input = document.querySelectorAll("input");

    let [textoTemporalNombre,setTextoTemporalNombre] = useState("")
    let [textoTemporalApellidos,setTextoTemporalApellidos] = useState("")
    let [textoTemporalEmail,setTextoTemporalEmail] = useState("")
    let [textoTemporalTelefono,setTextoTemporalTelefono] = useState("")
    let [textoTemporalNombrePerro,setTextoTemporalNombrePerro] = useState("")
    let [textoTemporalRaza,setTextoTemporalRaza] = useState("-")
    let [inputCarrera,setInputCarrera] = useState("")


    let [participante,setParticipante] = useState([])

    let regexNombre = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
    let regexApellidos = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let regexTelefono = /^[0-9]{9}$/
    let regexNombrePerro = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?( [A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/
    let regexRaza = /^[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+(( |\-)[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?(( |\-)[A-ZÀÈÌÒÙÑ][a-záéíóúñ]+)?$/

    return (<>
            <a href="/"><div className="logo_inicio_pages"></div></a>
            <section className="background_datos">
            <Header />
                <form className="datos" onSubmit={ evento => {
                            evento.preventDefault()

                            if(regexNombre.test(textoTemporalNombre) != "" && regexApellidos.test(textoTemporalApellidos) != "" && regexEmail.test(textoTemporalEmail) != "" && regexTelefono.test(textoTemporalTelefono) != "" && regexNombrePerro.test(textoTemporalNombrePerro) != "" && regexRaza.test(textoTemporalRaza) != ""){
                                fetch("http://localhost:4000/participantes/nuevo", {
                                    method : "POST",
                                    body : JSON.stringify({ 
                                        nombre : textoTemporalNombre,
                                        apellidos : textoTemporalApellidos,
                                        email : textoTemporalEmail,
                                        telefono : textoTemporalTelefono,
                                        perro : textoTemporalNombrePerro,
                                        raza : textoTemporalRaza,
                                        carrera : inputCarrera 
                                    }),
                                    headers : {
                                        "Content-type" : "application/json"
                                    }
                                })
                                .then(respuesta => respuesta.json())
                                .then(({id}) => {
                                    agregarParticipante({
                                        id,
                                        nombre : textoTemporalNombre,
                                        apellidos : textoTemporalApellidos,
                                        email : textoTemporalEmail,
                                        telefono : textoTemporalTelefono,
                                        perro : textoTemporalNombrePerro,
                                        raza : textoTemporalRaza,
                                        carrera : inputCarrera
                                    })
                                    setTextoTemporalNombre =("")
                                    setTextoTemporalApellidos =("")
                                    setTextoTemporalEmail =("")
                                    setTextoTemporalTelefono =("")
                                    setTextoTemporalNombrePerro =("")
                                    setTextoTemporalRaza =("-")
                                    setInputCarrera =("")
                                })
                            }else{
                                console.log("error en el registro de datos - revisa que todos los datos sean correctos")
                            }
                        } }>
                            <section className="datos_persona">
                                <div>
                                    <span>Nombre</span>
                                    <input type="text" placeholder="Primera letra Mayusc." value={textoTemporalNombre} onChange={ evento => setTextoTemporalNombre(evento.target.value) }></input>
                                </div>
                                <div>
                                    <span>Apellidos</span>
                                    <input type="text" placeholder="Primera letra Mayusc." value={textoTemporalApellidos} onChange={ evento => setTextoTemporalApellidos(evento.target.value) }></input>
                                </div>
                                <div>
                                    <span>email</span>
                                    <input type="text" placeholder="email@mail.com" value={textoTemporalEmail} onChange={ evento => setTextoTemporalEmail(evento.target.value) }></input>
                                </div>
                                <div>
                                    <span>teléfono</span>
                                    <input type="text" placeholder="sin espacios, ni guiones" value={textoTemporalTelefono} onChange={ evento => setTextoTemporalTelefono(evento.target.value) }></input>
                                </div>
                            </section>
                            <section className="datos_perro">
                                <div>
                                    <span>Nombre perro/a</span>
                                    <input type="text" placeholder="Primera letra Mayusc." value={textoTemporalNombrePerro} onChange={ evento => setTextoTemporalNombrePerro(evento.target.value) }></input>
                                </div>
                                <div>
                                    <span>Raza</span>
                                        <select nombre="raza" value={ textoTemporalRaza } onChange={ evento => setTextoTemporalRaza(evento.target.value) }>
                                            <option value="-"></option>
                                            <option value="Pastor Alemán">Pastor Alemán</option>
                                            <option value="Galgo">Galgo</option>
                                            <option value="Setter Inglés">Setter inglés</option>
                                            <option value="Labrador Retriever">Labrador Retriever</option>
                                            <option value="Golden Retriever">Golden Retriever</option>
                                            <option value="Pit Bull">Pit Bull</option>
                                            <option value="Beagle">Beagle</option>
                                            <option value="Dalmata">Dálmata</option>
                                            <option value="Perro Agua">Perro de Agua</option>
                                            <option value="Border Collie">Border Collie</option>
                                        </select>
                                        <input type="text" placeholder="Otra Raza" value={ textoTemporalRaza } onChange={ evento => setTextoTemporalRaza(evento.target.value)}/>
                                </div>
                            </section>
                            <section className="carrera">
                                <label htmlFor="carrera_corta" className="corta">carrera corta - 7 km.</label>
                                    <input type="radio" name="carrera" value="corta" onChange={ evento => setInputCarrera(evento.target.value) } id="carrera_corta" />
                                <label htmlFor="carrera_larga">carrera larga - 15 km.</label>
                                    <input type="radio" name="carrera" value="larga" onChange={ evento => setInputCarrera(evento.target.value) } id="carrera_larga" />
                            </section>
                            <input className="inscribirse" type="submit" value="INSCRIBIRSE"/>
                            <Link to="/"><div className="logo"></div></Link>
                </form>
            </section>
            <Footer />
            </>)
}

export default Formulario