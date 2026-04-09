import { useState } from "react"
import Navbar from './components/Navbar'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
function App() {
  //Estado
const [valorInput, setValorInput] = useState('')

  //Ciclo de Vida

  //jsx
  return (
    
    <>
      <Navbar />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Experiencia />
      <hr className="divisor" />
      <Contacto />
      <Footer />
    </>
  )
}

export default App

