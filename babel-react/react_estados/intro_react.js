
// ESCENARIO 1: BANNER CON TEXTO Y COLOR
let banner = document.createElement('div');
banner.style.width = "400px";
banner.style.height = "200px";
banner.style.backgroundColor = "red";
banner.innerText = "Hola Mundo";

let master = document.getElementById('master');
master.appendChild(banner);

// ESCENARIO 2: BANNER  CON TEXTO Y COLOR -- CON REACT
// NUEVO COMPONENTE LLAMADO BANNER QUE REGRESA UN HTML
function Banner(){
    return(
        <div style={{width: "400px", height: "200px", backgroundColor: "blue"}}>
            Hola Mundo
        </div>
    );
}

ReactDOM.render(
    // COMPONENTE BANNER
   <Banner/>,
    document.getElementById('master')
);
