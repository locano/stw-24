function ListadoPokem() {
    const [listadoPokemon, setListadoPokemon] = React.useState([])


    function getColor(name){
        console.log("getColor", name);

        if(name === "bulbasaur") return "green"
        if(name === "charmander") return "red"
        if(name === "squirtle") return "blue"
        if(name === "caterpie") return "brown"
        return "black"
    }

    function decirPokemon(name){
        alert("Elegiste a " + name)
    }
    

    async function llamarAPI() {
        let poke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        let mis_pokemon = await poke.json()
        setListadoPokemon(mis_pokemon.results)
    }

    React.useEffect(() => {
        llamarAPI()
    }, [])

    return (
        <div>
            <h1>Listado Pokemon</h1>
            <ul>
                {listadoPokemon.map(elemento => {
                    return <li 
                    onClick={()=>{decirPokemon(elemento.name)}}
                    style={{fontSize:'24px', fontWeight:'bold', color:getColor(elemento.name)}}>
                        {elemento.name}
                    </li>
                })}
            </ul>
        </div>

    )
}