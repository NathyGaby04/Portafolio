import foto1 from '../assets/proyecto1.png';
import foto2 from '../assets/proyecto2.png';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Proyectos() {

    const proyectos = [
        {
            nombre: 'Portafolio',
            descripcion: 'Mi portafolio personal',
            imagen: foto1,
            github: 'https://github.com/NathyGaby04/Portafolio.git',
            demo: 'https://portafolio-d4z18qjeh-nathalie-mirandas-projects.vercel.app/'
        },
        {
            nombre: 'SanBox Tigo',
            descripcion: 'Biblioteca de componentes Front-End con la metodología de Atomic Design y hecho con Bootstrap, enfocada en la modularidad y la agilidad del desarrollo web.',
            imagen: foto2,
            github: 'https://github.com/NathyGaby04/SanBox-Test.git',
            demo: 'https://san-box-test.vercel.app/index.html'
        },
    ];

    return (
        <section className="Proyectos" id="Proyectos">
            <h2 className="seccion-titulo">Mis proyectos</h2>

            <div className="Proyectos-grid">
                {proyectos.map(proyecto => (
                    <div className="ProyectoCard" key={proyecto.nombre}>
                    <a href={proyecto.demo} target="_blank" rel="noreferrer" className="Proyecto-link-wrapper">
                        <img src={proyecto.imagen} alt={proyecto.nombre} className="Proyecto-img" />
                        
                        <div className="Proyecto-cuerpo">
                            <h3>{proyecto.nombre}</h3>
                            <p>{proyecto.descripcion}</p>
                        </div>
                    </a>

                    <div className="Proyecto-footer">
                        <div className="Proyecto-links">
                            <a href={proyecto.github} target="_blank" rel="noreferrer" className="github-link">
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