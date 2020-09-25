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
    let Photo = Base('photos');
    let Comment = Base('comments')

    Photo.get().then(x => {
        x.filter(res => res.id < 5)
            .map(getElementPhoto => createCard(getElementPhoto));
    });
    Comment.get().then(x => x.filter(res => res.id < 5)
        .map(getElement => createComment(getElement)));


    let createCard = (el) => {
        let box = document.querySelector(".box");
        let card = document.createElement("div");
        card.setAttribute('class', 'card ' + el.title);
        let spantitle = document.createElement("span");
        spantitle.setAttribute('class', 'span-title');
        spantitle.innerHTML = el.title;
        let photo = document.createElement("img");
        photo.setAttribute('class', 'fotito');
        let anchor = document.createElement("a");
        anchor.setAttribute("href", el.url);
        anchor.appendChild(photo);
        anchor.appendChild(spantitle);
        card.appendChild(anchor);
        box.appendChild(card);
        photo.setAttribute("src", el.url);
        let list = document.createElement("ul");
        list.setAttribute('class', 'description' + el.id);
        card.appendChild(list);

    }

    let createComment = (el) => {
        let list = document.querySelector(".description" + el.id);
        let name = document.createElement("li");
        let mail = document.createElement("li");
        let body = document.createElement("li");
        name.innerHTML = el.name;
        mail.innerHTML = el.mail;
        body.innerHTML = el.body;
        list.appendChild(name);
        list.appendChild(mail);
        list.appendChild(body)
    }

    let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', () => {
        overlay.classList.add('active');
        popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });




    // let adminPass = document.querySelector('.btn-abrir-popup');
    // adminPass.addEventListener('click',() =>{
    // /*let createForm = () => {*/
    //     let box = document.querySelector(".contenedor");
    //     let form = document.createElement("form");
    //     form.setAttribute('class', 'formulario');
    //     let input_user = document.createElement("input");
    //     input_user.setAttribute('class', 'input_user');
    //     input_user.setAttribute('placeholder', 'user');
    //     let input_pass = document.createElement("input");
    //     input_pass.setAttribute('class', 'input_pass');
    //     input_pass.setAttribute('placeholder', 'pass');
    //     input_pass.setAttribute('type', 'password');
    //     form.appendChild(input_user);
    //     form.appendChild(input_pass);
    //     let button = document.createElement("button");
    //     button.setAttribute('class', 'btn search');
    //     button.setAttribute('type', 'submit');
    //     button.innerHTML="Login";
    //     form.appendChild(button);
    //     box.appendChild(form);
    // }
    //)



 ///////////////////////////////////////////////////////////////////////////////////////////*  
//  let interval = 5 ;
//  let sumar = () =>{
//     interval = interval + 5; 

//     Photo.get().then(x => {
//         x.filter(res => res.id < interval && res.id < interval+5)
//             .map(getElementPhoto => createCard(getElementPhoto));
//     });
//     Comment.get().then(x => x.filter(res => res.id < interval).filter(res => res.id < interval+5)
//         .map(getElement => createComment(getElement)));



//     console.log(interval)} ;
//  let iterator = () => {
//          interval = setInterval(sumar, 5000);
//          let element = document.querySelector('.box');
//          while (element.firstChild) {
//             element.removeChild(element.firstChild);
//           }
         
//  }

 
//  iterator();
// *///////////////////////////////////////////////////////////////////////////////////////////////











});
// /// Traditional declaration
// const getApiURL = (apiHostname, resourceName = 'users', resourceId = 1) => {
//     return `https://${apiHostname}/api/${resourceName}/${resourceId}`
//   }

//   getApiURL('localhost:3000', 'orders', 2)
//   getApiURL('localhost:3000', 'orders')
//   getApiURL('localhost:3000')

//   // Curried declaration
//   const getApiURLCurried = apiHostname => (resourceName = 'users') => (resourceId = 1) => {
//     return `https://${apiHostname}/api/${resourceName}/${resourceId}`
//   }

//   getApiURLCurried('localhost:3000')('orders')(2)

//   getApiURLCurried('localhost:3000')('orders') // This doesn't work as intended, we need to:
//   getApiURLCurried('localhost:3000')('orders')()

//   getApiURLCurried('localhost:3000') // This doesn't work as intended, we need to:
//   getApiURLCurried('localhost:3000')()()
