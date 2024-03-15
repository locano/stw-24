function Cuadrado(props) {
    console.log(props);
    return (
        <div id="cuadrado" className="cuadrado">

        </div>
    )
}

function Circulo() {
    return (
        <div id="circulo" className="circulo">

        </div>
    )
}


function Todos(){
    let cuadrados = [];

    function randomNumber()
    {   
        let number = Math.floor(Math.random() * 2);
        return number;
    }

    for(let i = 0; i < randomNumber(); i++){
        cuadrados.push(<Cuadrado key={i} />);
    }

    return cuadrados
}

ReactDOM.render(
    <Todos />,
    document.getElementById('master')
);