function Footer(){ // Función que nos devuelve un div con la información básica de la organización. Incluye los enlaces a su email y al teléfono
    return(<>
            <div className="footer">
            <div>
                <a href="mailto:canicrossentresierras@gmail.com">canicrossentresierras@gmail.com</a>
            </div>
            <div>
                <i className="fa-regular fa-copyright"></i>
                <h3>2024 · Canicross-Entresierras</h3>
            </div>
            <div>
                <a href="tel:600000000">600 000 000</a>
            </div>
            </div>
        </>)
}

export default Footer