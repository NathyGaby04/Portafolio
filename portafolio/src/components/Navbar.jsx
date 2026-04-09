import logo from '../assets/MiLogo.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <ul className="Nav-Links">
                <li><a href="#SobreMi">Sobre Mi</a></li>
                <li><a href="#Habilidades">Habilidades</a></li>
                <li><a href="#Proyectos">Proyectos</a></li>
                <li><a href="#Experiencia">Experiencia</a></li>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;