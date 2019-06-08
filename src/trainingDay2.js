//PROMISES
const defering = new Promise((resolve,reject) => {
    (false) ? resolve(`Ok`) : reject(`No`);
});

defering
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


//REST PARAMS
const arrayArgs = [];

const result = (m,...args) => {
    return args.map(args => m*args)
}

const verifyArgs = (...args) => {
    return args.map(args => arrayArgs = [args])
}

console.log(result(5,5,10,15,20,25,30))

console.log(verifyArgs(10,20,30,40))




