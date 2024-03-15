function ListadoUsuarios() {
    const [data, setData] = React.useState([])

    const [info, setInfo] = React.useState("variable fija")

    async function llamarAPI() {
        let chats = await fetch('http://uwu-guate.site:3000/messages')
        let mis_chats = await chats.json()
        console.log(mis_chats);
        setData(mis_chats)
    }

    React.useEffect(() => {
        llamarAPI()
    }, [])

    return (
        <div>
            <h1>Listado Usuarios</h1>
            <ul>
                {data.map(elemento => {
                    return <li>{elemento.username}</li>
                })}
            </ul>
        </div>

    )
}