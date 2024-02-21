 
// ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
async function optenerPosts(_data){
    // let data = await fetch('https://jsonplaceholder.typicode.com/posts',
    // {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })    
    let data = _data
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    // console.log("string", JSON.stringify(posts));
    // let new_json = JSON.parse(JSON.stringify(posts));
    // console.log("new_json", new_json);
    return posts;
}

function crearChat(texto, id, nombre){
    let nuevoChat = document.createElement("div");
    nuevoChat.className = "chat";
    nuevoChat.id = id;
    let p = document.createElement("p");
    p.innerText = texto;
    nuevoChat.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText = nombre;
    nuevoChat.appendChild(p2);
    return nuevoChat;
}

async function crearListoDeChats(_misPosts){
    // mando a traer los post dummys a una api con get
    // let misPosts =  await optenerPosts()
    let misPosts = _misPosts
    
    // mando a traer el div donde quiero poner los chats
    let divListados = document.getElementById("listado-chats");
    if(divListados != null){
        // transformamos los dicccionarios a un div de chat
        misPosts.map(post=>{
            let nuevoChat = crearChat(post[1], post[0], post[2]);
            return nuevoChat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            divListados.appendChild(element);
        });
    }

}

