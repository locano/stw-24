// Recibe la ruta y renderiza el componente

import Card from "../view/card"
import Contact from "../view/contact"
import Home from "../view/home"
import Info from "../view/info"

function Router({ ruta }) {
    switch (ruta) {
        case "/home":
            return <Home></Home>
        case "/info":
            return <Info></Info>
        case "/contact":
            return <Contact></Contact>
        case "/images":
            return <Card />
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router