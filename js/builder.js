

document.addEventListener('DOMContentLoaded',() => {
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


let Base = crudder('https://jsonplaceholder.typicode.com');
let Todos = Base('photos');  

let bases= fetch('https://jsonplaceholder.typicode.com/photos').then(x => x.json()).then(x =>{
    let element;    
        for ( element of x){
            if (element.id < 4) {//esto podria marcar un limite de muestras o modificarlo desde un evento
                element = {
                    'title': element.title,
                    'url': element.url
                }
            let box = document.querySelector(".box");
            let card = document.createElement("div");
            card.setAttribute('class',element.title);
            console.log(x.title);// nt found 
            let spantitle = document.createElement("span");
            spantitle.setAttribute('class','span-title');
            spantitle.innerHTML=element.title;
            card.appendChild(spantitle);
            let photo = document.createElement("img");
            photo.setAttribute('class','fotito');
            photo.setAttribute('loading','lazy');
            card.appendChild(photo);
            box.appendChild(card);
            photo.setAttribute("src",element.url);
            }
// })
        console.log(element);
    };
    return element;
}) 

});