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
    let Comment = Base ('comments')

    Photo.get().then(x => {
              //  createCard(element);
              //const getElementPhoto = photo => `${photo.title} ${photo.url}`;
              x.filter(res => res. id < 5)
              .map(getElementPhoto => createCard(getElementPhoto));
            }
    );
     Comment.get().then(x =>   x.filter(res => res.id < 5)
     .map(getElement => createComment(getElement)));
    

    let createCard = (el) => {
        let box = document.querySelector(".box");
        let card = document.createElement("div");
        card.setAttribute('class','card '+ el.title);
        let spantitle = document.createElement("span");
        spantitle.setAttribute('class', 'span-title');
        spantitle.innerHTML = el.title;
        
        let photo = document.createElement("img");
        photo.setAttribute('class', 'fotito');
       // photo.setAttribute('loading', 'lazy');
        let anchor = document.createElement("a");
        anchor.setAttribute("href", el.url);
        anchor.appendChild(photo);
        anchor.appendChild(spantitle);
        card.appendChild(anchor);
        box.appendChild(card);
        photo.setAttribute("src", el.url);

        let list = document.createElement("ul");
        list.setAttribute('class', 'description'+el.id);
        card.appendChild(list);

      
    }

    let createComment = (el) => {
        let list = document.querySelector(".description"+el.id);
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



    
    let adminPass = document.querySelector('.foot');
    adminPass.addEventListener('click',() =>{
    /*let createForm = () => {*/
        let box = document.querySelector(".content");
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
)
    
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


























































