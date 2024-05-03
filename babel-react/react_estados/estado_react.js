// PROPS => VARIABLE QUE TIENE LOS DATOS QUE SE PASAN A UN COMPONENTE
function Banner(props) {

    const [tamanio, setTamanio] = React.useState('200px')

    React.useEffect(() => {
        if (props.tamanio === 'grande') {
            setTamanio('600px')
        } else if (props.tamanio === 'mediano') {
            setTamanio('400px')
        } else if (props.tamanio === 'gigante') {
            setTamanio('800px')
        }
    }, [])
    
   

    return (
        <div style={{
            // valido si viene la variable width de lo contrario un valor por defecto
            width: props.width ? props.width : "400px",
            height: tamanio,
            backgroundColor: props.micolor,
            border: '2px solid black',
            color: 'white'
        }}>
            Hola Estados
        </div>
    );
}

ReactDOM.render(
    <Banner micolor="purple" tamanio='gigante'/>,
    document.getElementById('master')
);
