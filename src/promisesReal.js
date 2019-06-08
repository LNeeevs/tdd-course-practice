//EXEMPLO FUNCIONAL
/*const analyze = new Promise((resolve,reject) => {
    (false) ? resolve('Hello world!') : reject('Hello mtf...');
});

analyze
    .then((data) => console.log(data))
    .catch((err) => console.log(err))*/

const resultadoColetado = fetch('https://willianjusten.com.br/search.json');

setTimeout(() => {

    resultadoColetado
    .then((data) => data.json())
    .then((data) => {
        data.map((data) => console.log(`${data.tags}`))
    })
    .catch((err) => console.log(err))

}, 10000);



const testando = new Promise((resolve,reject) => {
    (false) ? resolve('Ok!') : reject('Bad :(')
})

testando
    .then((data) => console.log(data))
    .catch((err) => console.log(err))



const testiul = fetch('https://willianjusten.com.br/feed.xml');

setTimeout(() => {
    console.log(testiul);
}, 2000)
