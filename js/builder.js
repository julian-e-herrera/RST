import {Todos} from 'conectin.js';
document.addEventListener('DOMContentLoaded',(e) =>{

    function run(){
        console.log("entro")
        let box = document.querySelector(".box");
        let card = document.createElement("div");
        card.setAttribute('class','elemento.title');
        box.appendChild(card);
    }
    //////////////////////////////////////////////////////////////////////////////
    function addElemento(elemento){
        console.log("entro")
        let box = document.querySelector(".box");
        let card = document.createElement("div");
        card.setAttribute('class','elemento.title');
        box.appendChild(card);
    }
        let spantitle = document.createElement("span");
        spantitle.setAttribute('class','span-title');
        spantitle.innerHTML=elemento.title;
        card.appendChild(spantitle);
        let photo = document.createElement("img");
        photo.setAttribute('class','fotito');
        photo.setAttribute('src',elemento.url);
        card.appendChild(photo);

        addElemento(list[0]);
    });
    run();
    console.log("entro")});    