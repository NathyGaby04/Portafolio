import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacto() {

    const redes = [
        { nombre: 'GitHub', url: 'https://github.com/', icono: <FaGithub />, tipo: 'social' },
        { nombre: 'LinkedIn', url: 'https://linkedin.com/', icono: <FaLinkedin />, tipo: 'social' },
        { nombre: 'Correo', url: 'mailto:tuemail@gmail.com', icono: <FaEnvelope />, tipo: 'contacto' },
    ];

    return (
        <section className="Contacto" id="Contacto">
            <h2 className="seccion-titulo">Contacto</h2>

            <div className="Contacto-grid">
                {redes.map(red => (
                    <a 
                        key={red.nombre} 
                        href={red.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="Contacto-card"
                    >
                        <span className="Contacto-icono">{red.icono}</span>
                        <span>{red.nombre}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contacto;