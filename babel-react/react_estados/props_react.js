// PROPS => VARIABLE QUE TIENE LOS DATOS QUE SE PASAN A UN COMPONENTE
function Banner(props) {

    console.log(props)
    // si trato de modificar el valor de una variable que viene en props nos dara error porque son solo de lectura
    // props.micolor = "red"

    return (
        <div style={{
            // valido si viene la variable width de lo contrario un valor por defecto
            width: props.width ? props.width : "400px",
            height: props.height ? props.height : "200px",
            backgroundColor: props.micolor,
            border: '2px solid black',
            color: 'white'
        }}>
            Hola PROPS
        </div>
    );
}

ReactDOM.render(
    <Banner micolor="orange"/>,
    document.getElementById('master')
);
