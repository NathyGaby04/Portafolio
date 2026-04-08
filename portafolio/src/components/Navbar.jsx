import logo from '../assets/MiLogo.png'

function Navbar() {
    return (
        <nav className="Navbar">
        <img src={logo} alt="logo" />
        <ul className="Nav-Links">
            <li><a href="#SobreMi">Sobre Mi</a></li>
            <li><a href="#Habilidades">Habilidades</a></li>
            <li><a href="#Proyectos">Proyectos</a></li>
            <li><a href="#Contacto">Contacto</a></li>
        </ul>
        </nav>
    )}

export default Navbar
