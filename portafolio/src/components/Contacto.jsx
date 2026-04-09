import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacto() {

    const redes = [
        { nombre: 'GitHub', url: 'https://github.com/NathyGaby04', icono: <FaGithub />, tipo: 'social' },
        { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/nathalie-gabriela-miranda-rej%C3%B3n/', icono: <FaLinkedin />, tipo: 'social' },
        { nombre: 'Correo', url: 'mailto:nathalie040904@gmail.com', icono: <FaEnvelope />, tipo: 'contacto' },
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