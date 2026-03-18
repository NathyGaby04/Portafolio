import { useState } from "react"
import Navbar from './components/Navbar'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'
function App() {
  //Estado
const [valorInput, setValorInput] = useState('')

  //Ciclo de Vida

  //jsx
  return (
    <>
      <Navbar />
      <SobreMi />\
      <Proyectos />
      <Habilidades />
      <Contacto />
    </>
  )
}

export default App

