import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Rutas() { // Función que retorna el enlace a la página de inicio, el header, un div con las rutas (titulo,gif y perfil de ruta) y por último el footer
    return(<>
        <a href="/"><div className="logo_inicio_pages"></div></a>
        <section className="background">
        <Header />
            <div className="rutas">
                <div>
                    <h3>Ruta<br/>· 7 km ·</h3>
                </div>
                <div className="ruta">
                <div className="mapa_ruta_corta"></div>
                    <div className="perfil_ruta_corta"></div>
                </div>
                <div>
                <h3>Ruta<br/>· 15 km ·</h3>
                </div>
                <div className="ruta">
                    <div className="mapa_ruta_larga"></div>
                    <div className="perfil_ruta_larga"></div>
                </div>
            </div>
        </section>
            <Footer />
    </>)
}
export default Rutas
   