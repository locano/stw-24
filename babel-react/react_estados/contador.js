function Contador() {
    const [contador, setContador] = React.useState(0);

    function decrementar(){
        setContador(contador -1)
    }
    function incrementar(){
        setContador(contador +1)
    }


    return (
        <div>
            <button onClick={()=>{
                setContador(contador -1)
            }}  >-</button>

            <h1>{contador}</h1>

            <button onClick={incrementar}>+</button>
        </div>
    )
}