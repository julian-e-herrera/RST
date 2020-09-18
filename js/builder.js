document.addEventListener('DOMContentLoaded', () => {
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

    let photos = Todos.get().then(x => {
        let element;
        for (element of x) {
            if (element.id < 4) { //esto podria marcar un limite de muestras o modificarlo desde un evento
                element = {
                    'title': element.title,
                    'url': element.url
                }
              //  createCard(element);
            }
        };
        return element;
    })
    

    let createCard = (el) => {
        let box = document.querySelector(".box");
        let card = document.createElement("div");
        card.setAttribute('class', el.title);
        let spantitle = document.createElement("span");
        spantitle.setAttribute('class', 'span-title');
        spantitle.innerHTML = el.title;
        card.appendChild(spantitle);
        let photo = document.createElement("img");
        photo.setAttribute('class', 'fotito');
        photo.setAttribute('loading', 'lazy');
        card.appendChild(photo);
        box.appendChild(card);
        photo.setAttribute("src", el.url);
    }

    
    let createForm = () => {
        let box = document.querySelector(".box");
        let form = document.createElement("form");
        form.setAttribute('class', 'formulario');
        let input_user = document.createElement("input");
        input_user.setAttribute('class', 'input_user');
        input_user.setAttribute('placeholder', 'user');
        let input_pass = document.createElement("input");
        input_pass.setAttribute('class', 'input_pass');
        input_pass.setAttribute('placeholder', 'pass');
        input_pass.setAttribute('type', 'password');
        form.appendChild(input_user);
        form.appendChild(input_pass);
        let button = document.createElement("button");
        button.setAttribute('class', 'btn search');
        button.innerHTML="Login";
        form.appendChild(button);
        box.appendChild(form);
    }

    
});