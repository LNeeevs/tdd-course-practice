const pessoa = {0: 'Lucas', 1: 'Myke'}
console.log(Object.entries(pessoa));

//para que agora exista, para cada posição do objeto, uma KEY e um VALOR
let newResult = new Map(Object.entries(pessoa));

console.log(newResult);

console.log(newResult.size); //2
console.log(newResult.has('0')); //true
console.log(newResult.has('Myke')); //false