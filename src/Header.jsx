import { Link } from "react-router-dom"

function Header(){

    return(<>
            <nav>
                <ul className="enlaces_header">
                    <li className="enlace_header">
                        <Link to="/formulario">inscripción</Link>
                    </li>
                    <li className="enlace_header">
                        <Link to="/rutas">rutas</Link>
                    </li>
                </ul>
            </nav>
        </>)
    }

export default Header