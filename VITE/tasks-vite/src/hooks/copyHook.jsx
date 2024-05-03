import { useEffect, useState } from 'react'

function copyHook(valor, nombre) {
    const [misDatos, setMisDatos] = useState(valor)

    function limpiar() {
        setMisDatos(valor)
    }

    useEffect(() => {
        console.log("Se ha utilizado desde ", nombre);
        console.log("El valor es ", valor);
    }, [valor, nombre])

    return limpiar;
}

export default copyHook