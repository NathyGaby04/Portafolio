import foto from '../assets/mi_Foto.jpg'

function SobreMi() {
    return (
        <div className="SobreMi" id="SobreMi">
            <div className="SobreMi-texto">
                <p>Hola!, soy</p>
                <h1>Nathalie Miranda</h1>
                <h2>Tecnologa en Desarrollo de Software</h2>
                <p>Apasionada por crear experiencias digitales impactantes. 
                    Combino mi experiencia en análisis de datos, desarrollo Front-End y diseño UX/UI con sólidas habilidades blandas como comunicación asertiva,
                    liderazgo y trabajo en equipo. Me caracterizo por mi mentalidad proactiva para resolver problemas y mi capacidad para adaptarme rápidamente 
                    a nuevos entornos tecnológicos, siempre enfocada en la gestión eficiente del tiempo y la entrega de resultados de calidad.</p>
            </div>
            <div className="SobreMi-foto">
                <img src={foto} alt="foto" />
            </div>
        </div>
    )
}

export default SobreMi 