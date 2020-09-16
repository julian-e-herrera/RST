
//modelo de conexion unica con lib isomorphic-fetch;
//import 'isomorphic-fetch';

require('isomorphic-fetch');


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

Todos.get().then(x => console.log(x)).catch(e => e.err);
function crea(res) {
    res.forEach(element => {
        lento = {
            'title': element.title,
            'url': element.url
        }
    });
}

let list = Todos.get().then(x => crea(x));
console.log(list[0]);
