//modelo de conexion unica con lib isomorphic-fetch;
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

 let bases = Todos.get().then(x => x.map(url)).catch(e => e.err);
console.log(bases)

