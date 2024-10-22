import { React } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Inicio() {
    return(<>
        <section className="background">
        <a href="/"><div className="logo_inicio"></div></a>
            <nav>
                    <ul className="enlaces_inicio">
                        <li className="enlace_inicio"><Link to="/formulario">inscripción</Link></li>
                        <li className="enlace_inicio"><Link to="/rutas">rutas</Link></li>
                    </ul>
            </nav>
        </section>
        <Footer />
        </>)
}
export default Inicio
   