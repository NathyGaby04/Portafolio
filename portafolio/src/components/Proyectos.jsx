function Proyectos() {
    const proyectos = [ { nombre: 'Portafolio', descripcion: 'Mi portafolio personal' },
                        { nombre: 'App de tareas', descripcion: 'Una app de tareas' },]

    return (
        <div className="Proyectos">
        {proyectos.map(proyecto => (
            <div key={proyecto.nombre}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            </div>
        ))}
        </div>
    )}
    
export default Proyectos