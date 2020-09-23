//import * as R from 'ramda'
const R= require('ramda')
const isEven = x => x % 2 === 0
const filterOutOdd = collection => collection.filter(isEven)

const add = (x, y) => x + y
const sum = collection => collection.reduce(add)

const sumEven = collection => R.compose(sum, filterOutOdd)(collection);

sumEven([1, 2, 3, 4])
console.log(sumEven([1, 2, 3, 4,8]))
//const unary = fn => (...args) => fn(args[0])
console.log(['1', '12', '123'].map(R.unary(parseInt)))






   // let photos = Todos.get().then(x => {
    //     let element;
    //     for (element of x) {
    //         if (element.id < 4) { //esto podria marcar un limite de muestras o modificarlo desde un evento
    //             element = {
    //                 'title': element.title,
    //                 'url': element.url
    //             }
    //           //  createCard(element);
    //         }
    //     };
    //     return element;
    // })
































