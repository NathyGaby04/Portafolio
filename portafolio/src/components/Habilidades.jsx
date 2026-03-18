function Habilidades () {
    const habilidades = ['HTML', 'CSS', 'JavaScript', 'React']
    
        return(
        <div className="Habilidades">
            {habilidades.map(habilidad => (
                <div key={habilidad}>{habilidad}</div> 
            ))}
        </div>
    )
}

export default Habilidades