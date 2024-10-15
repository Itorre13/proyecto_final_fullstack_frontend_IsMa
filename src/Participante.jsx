
function Participante({id,nombre,apellidos,email,telefono,perro,raza,carrera}){

    return(<>
                <li>{ id }</li>
                <li>{ nombre }</li>  
                <li>{ apellidos }</li>  
                <li>{ email }</li>  
                <li>{ telefono }</li>  
                <li>{ perro }</li>  
                <li>{ raza }</li>  
                <li>{ carrera }</li>    
        </>)
}

export default Participante