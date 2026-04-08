import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma, FaPython, FaPhp } from 'react-icons/fa'
import { SiJavascript, SiVite, SiBootstrap, SiMysql } from 'react-icons/si'

function Habilidades() {

    const habilidades = [
        { nombre: 'HTML', icono: <FaHtml5 />, categoria: 'frontend' },
        { nombre: 'CSS', icono: <FaCss3Alt />, categoria: 'frontend' },
        { nombre: 'JavaScript', icono: <SiJavascript />, categoria: 'frontend' },
        { nombre: 'React', icono: <FaReact />, categoria: 'frontend' },
        { nombre: 'Bootstrap', icono: <SiBootstrap />, categoria: 'frontend' },

        { nombre: 'Python', icono: <FaPython />, categoria: 'backend' },
        { nombre: 'PHP', icono: <FaPhp />, categoria: 'backend' },
        { nombre: 'MySQL', icono: <SiMysql />, categoria: 'backend' },

        { nombre: 'Vite', icono: <SiVite />, categoria: 'tools' },
        { nombre: 'Git', icono: <FaGitAlt />, categoria: 'tools' },
        { nombre: 'Figma', icono: <FaFigma />, categoria: 'tools' },
    ];

    return (
        <div className="Habilidades" id="Habilidades">
            <h2 className="seccion-titulo">Habilidades</h2>

            <div className="Habilidades-categorias">

                <div className="Habilidades-categoria">
                    <h3>Frontend</h3>
                    <div className="Habilidades-grid">
                        {habilidades
                            .filter(h => h.categoria === 'frontend')
                            .map(h => (
                                <div className="Habilidad-card" key={h.nombre}>
                                    <span className="Habilidad-icono">{h.icono}</span>
                                    {h.nombre}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="Habilidades-categoria">
                    <h3>Backend</h3>
                    <div className="Habilidades-grid">
                        {habilidades
                            .filter(h => h.categoria === 'backend')
                            .map(h => (
                                <div className="Habilidad-card" key={h.nombre}>
                                    <span className="Habilidad-icono">{h.icono}</span>
                                    {h.nombre}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="Habilidades-categoria">
                    <h3>Herramientas</h3>
                    <div className="Habilidades-grid">
                        {habilidades
                            .filter(h => h.categoria === 'tools')
                            .map(h => (
                                <div className="Habilidad-card" key={h.nombre}>
                                    <span className="Habilidad-icono">{h.icono}</span>
                                    {h.nombre}
                                </div>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Habilidades;