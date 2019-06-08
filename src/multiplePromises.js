//PROMISE 1: cria um array
const promiseA = new Promise((resolve,reject) => {
    console.log({name: 'Lucas', value: 'billions'})
});

//PROMISE 2: cria um objeto
const promiseB = new Promise((resolve,rejected) => {
    console.log(['Person','Value'])
});

Promise
    .all([promiseA,promiseB])
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

//EXECUTA AS PROMISES
/*promiseA
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

promiseB
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


setTimeout(() => {
    alert('Time: 1000 miliseconds')
}, 1000)
//Time: 1000 miliseconds*/