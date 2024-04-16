import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'

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
      <nav style={{gap:"8px", display:"flex"}}>
        <a href="/list" style={{border:"1px solid black", padding:"8px", borderRadius:"8px"}}>Lista de Tareas</a>
        <a href="/add" style={{border:"1px solid black", padding:"8px", borderRadius:"8px"}} >Agregar Tarea</a>
      </nav>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual} setRoute={setRutaActual}></Router> 
      </div>
    </div>
  )
}

export default App
