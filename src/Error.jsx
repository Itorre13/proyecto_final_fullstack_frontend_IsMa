import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

function Error() {
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
