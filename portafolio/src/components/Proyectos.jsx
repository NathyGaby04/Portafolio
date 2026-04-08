import foto1 from '../assets/proyecto1.png';
import foto2 from '../assets/proyecto2.png';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Proyectos() {

    const proyectos = [
        {
            nombre: 'Portafolio',
            descripcion: 'Mi portafolio personal',
            imagen: foto1,
            github: 'https://github.com/',
            demo: 'https://demo.com/'
        },
        {
            nombre: 'App de tareas',
            descripcion: 'Una app de tareas',
            imagen: foto2,
            github: 'https://github.com/',
            demo: 'https://demo.com/'
        },
    ];

    return (
        <section className="Proyectos" id="Proyectos">
            <h2 className="seccion-titulo">Mis proyectos</h2>

            <div className="Proyectos-grid">
                {proyectos.map(proyecto => (
                    <div className="ProyectoCard" key={proyecto.nombre}>
                        
                        <img 
                            src={proyecto.imagen} 
                            alt={proyecto.nombre} 
                            className="Proyecto-img"
                        />

                        <div className="Proyecto-info">
                            <h3>{proyecto.nombre}</h3>
                            <p>{proyecto.descripcion}</p>

                            <div className="Proyecto-links">
                                <a href={proyecto.github} target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>

                                <a href={proyecto.demo} target="_blank" rel="noreferrer">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Proyectos;