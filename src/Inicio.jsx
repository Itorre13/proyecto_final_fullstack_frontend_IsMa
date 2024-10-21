import { React } from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
    return(<>
        <section className="inicio">
        <a href="/"><div className="logo_inicio"></div></a>
            <nav>
                    <ul className="enlaces_inicio">
                        <li className="enlace_inicio"><Link to="/formulario">inscripción</Link></li>
                        <li className="enlace_inicio"><Link to="/rutas">rutas</Link></li>
                        <li className="enlace_inicio"><Link to="/contacto">contacto</Link></li>
                    </ul>
            </nav>
        </section>
        <div className="copyright">
            <i className="fa-regular fa-copyright"></i>
            <h3>2024 · Canicross-Entresierras</h3>
        </div>
        </>)
}
export default Inicio
   