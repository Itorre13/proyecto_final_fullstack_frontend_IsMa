import Footer from './Footer.jsx'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'

function Error() { // Función que nos devuelve una sección con un mensaje al usuario en caso de error 404. Para mostrarle una página nueva, manteniendo la cabecera y el footer para poder acceder a los enlaces.
 return(<>
         <section className="background">
            <a href="/"><div className="logo_inicio_pages"></div></a>
            <Header />
            <section className="error">
               <h2>Error 404: NOT FOUND</h2>
               <div className="sad_dog"></div>
               <h3>Página no encontrada</h3>
            </section>
         </section>
         <Footer />
 </>)
}
export default Error
