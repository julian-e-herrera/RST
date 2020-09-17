//import {fotos} from './conection.js';
//import * as con from './conection.js';
//import './node_modules/isomorphic-fetch';
//require('../node_modules/isomorphic-fetch');


const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`
    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
            .catch(e => console.log(e))
    })
}


let Base = crudder('https://jsonplaceholder.typicode.com')
let Todos = Base('photos')

let con = Todos.get().then(x => console.log(x)).catch(e => e.err);

document.addEventListener('DOMContentLoaded',(e) =>{
     //con.fotos.then(x => console.log(x)).catch(e => e.err);
     console.log("entro")
     console.log("entro")
    let box = document.querySelector(".box");
    let card = document.createElement("div");
    card.setAttribute('class','elemento.title');
    box.appendChild(card);
    });


    
    //////////////////////////////////////////////////////////////////////////////
   
        
    run();
    console.log("entro");   

function run(){
    console.log("entro")
    let box = document.querySelector(".box");
    let card = document.createElement("div");
    card.setAttribute('class','elemento.title');
    box.appendChild(card);
}
function addElemento(elemento){
    console.log("entro")
    let box = document.querySelector(".box");
    let card = document.createElement("div");
    card.setAttribute('class','elemento.title');
    box.appendChild(card);

    let spantitle = document.createElement("span");
        spantitle.setAttribute('class','span-title');
        spantitle.innerHTML=elemento.title;
        card.appendChild(spantitle);
        let photo = document.createElement("img");
        photo.setAttribute('class','fotito');
        photo.setAttribute('src',elemento.url);
        card.appendChild(photo);

        addElemento(list[0]);
}