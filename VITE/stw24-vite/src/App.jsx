import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'
import Card from './view/card'

function App() {

  
  const [rutaActual, setRutaActual] = useState("app")

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location);

  }, [])

  return (
    <div className='sitio-web'>
      <div className='header'>
        <button onClick={() => { setRutaActual("/home") }}>Home</button>
        <button onClick={() => { setRutaActual("/info") }}>Info</button>
        <button onClick={() => { setRutaActual("/contact") }}>Contact</button>
        <button onClick={() => { setRutaActual("/images") }}>Imagen</button>
        <a href="/home">Home por ruta</a>
        <a href="/images">Imagen por ruta</a>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  )
}

export default App
