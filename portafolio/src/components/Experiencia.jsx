import foto from '../assets/Tigo-Oficinas.jpg'

function Experiencia() {
    return (
        <div className="Experiencia" id="Experiencia">
            <h2 className="seccion-titulo">Experiencia</h2>
            <div className="experiencia-contenido">
                <div className="Experiencia-foto">
                    <img src={foto} alt="foto" />
                </div>
                <div className="Experiencia-texto">
                    <h2>Practicante en Tigo Colombia</h2>
                    <p>
                        Durante mis prácticas, integré el análisis de datos con el desarrollo Front-End bajo principios de Atomic Design. 
                        Diseñé y codifiqué un sistema de componentes basado en Bootstrap, organizando la arquitectura en niveles (átomos a templates). 
                        Mi enfoque principal fue mejorar la agilidad del equipo de desarrollo, entregando bloques de código modulares y documentados que facilitaron 
                        la implementación directa en producción.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experiencia;