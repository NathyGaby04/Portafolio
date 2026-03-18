function Contacto() {
const redes = [ { nombre: 'GitHub', url: '#' },
                { nombre: 'LinkedIn', url: '#' },
                { nombre: 'Correo', url: '#' },]

    return (
        <div className="Contacto">
        {redes.map(red => (
            <a key={red.nombre} href={red.url} target="_blank">
            {red.nombre}
            </a>
        ))}
        </div>
    )}

export default Contacto