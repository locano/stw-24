
// console.log("hola inicio")

// NODO RAIZ
DOM = document;
// console.log("DOM", DOM);

// variable del scope
let div1;
// variable que no se puede cambiar
const div2 = 1;
// variable global
var div3;

// crea un elemento
div1 = DOM.createElement("div");
div1.innerText = "Hola mundo";
// console.log("div1", div1);

// agrega un un body
DOM.body.appendChild(div1);

// cambiar propiedades del div
div1.style.width = "300px";
div1.style.height = "300px";
div1.style.border = "1px solid black";
div1.style.backgroundColor = "red";
div1.style.padding = "10px";
div1.style.color = 'white';
div1.style.fontSize = '40px';
div1.id = "div1";


function crearDiv(width, height, color, text, fontSize) {
    // crea un elemento
    let divx = DOM.createElement("div");
    divx.innerText = text;
    console.log("div1", div1);

    // agrega un un body
    DOM.body.appendChild(div1);

    // cambiar propiedades del div
    divx.style.width = width;
    divx.style.height = height;
    divx.style.border = "1px solid black";
    divx.style.backgroundColor = color;
    divx.style.padding = "10px";
    divx.style.color = 'white';
    divx.style.fontSize = fontSize;
    return divx;
}

let div1_1 = crearDiv("100px", "100px", "blue", "Hola mundo 2", "10px");
// console.log("div1_1", div1_1);

let div1_encontrado = document.getElementById("div1");
if (div1_encontrado) {
    div1_encontrado.appendChild(div1_1);
}




// DATA TYPES

let booleano_texto = 'true';
// console.log(booleano_texto);
console.log(typeof (Boolean(booleano_texto)));
// console.log(Boolean(booleano_texto));


let data1 = '1';
let data2 = 2;

console.log(data2 + Number(data1));

let data3 = ''
if (data1 == '1') {
    data3 = 1;
} else {
    data3 = 0;
}


data3 = data1 == 'Pedro' ? 1 : data1 == 'Juan' ? 2 : 0;


// CREAR OBJETOS
let carro = 'audi'
let edad = 29
let soltero = true
let saludar = () => {
    return 'hola'
}

let mi_nuevo_objeto = {
    carro,
    edad,
    soltero,
    saludar
};

console.log(mi_nuevo_objeto)
console.log(mi_nuevo_objeto.carro)
console.log(mi_nuevo_objeto.edad)
console.log(mi_nuevo_objeto.soltero)
console.log(mi_nuevo_objeto.saludar())

mi_nuevo_objeto.rayo = 'crack';
mi_nuevo_objeto['objeto2'] = {
    "nombre": "STW",
    "salon": 'CIT215'
};
console.log(mi_nuevo_objeto)

// DESTRUCTURING
let { nombre, salon } = mi_nuevo_objeto.objeto2
console.log(nombre)
console.log(salon)


// OBJECT SPREAD

let usuario1 = {
    "nombre": "Juan",
    "edad": 30,
    "universidad": "Del Valle"
}

let info1 = {
    "direccion": "Guatemala",
    "zona": 2,
    "universidad": "Landivar"
}
// COPIA Y CONCATENA LOS OBEJTOS MANTENIENDO LAS PROPIEDADES UNICAS 
// Y DEJA LA PROPIEDAD REPETIDAD DEL ÚLTIMO ELEMENTO
let resumen = { ...info1, ...usuario1 }
console.log(resumen)



// ARREGLOS
let clases = ["STW", "Ciencias", "Sociales", "Idioma"]
// console.log(clases)
// clases.push("Ciencias")
// clases.push("Social")
// console.log(clases)
clases.pop()
// console.log(clases)
// console.log(clases.length)

// FIND INDEX
let indice_sociales = clases.findIndex(element=>{
    return element == "Sociales"
})

console.log(indice_sociales)
// FILTER
let filtrado_datos = clases.filter(elemento=>{
    return elemento.length >5
})


// MAP
let calificaciones = [
    {
        "calificacion": 100,
        "clase" : "Sociales"
    },
    {
        "calificacion": 70,
        "clase" : "Ciencias"
    },
    {
        "calificacion": 61,
        "clase" : "Mate"
    },
    {
        "calificacion": 55,
        "clase" : "Compu"
    },
    {
        "calificacion": 68,
        "clase" : "Arte"
    }
]

let nuevas_calificaciones = calificaciones.map(elemento =>{
    let nuevo_el = {
        "clase": elemento.clase
    }
    if(elemento.calificacion > 65){
        nuevo_el.gano = true
    }else{
        nuevo_el.gano = false
    }
    return nuevo_el
})
console.log(nuevas_calificaciones)
