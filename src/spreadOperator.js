//SPREAD OPERATOR COM ARRAYS
const myArray = ['Lucas',28,'Masculino'];
const myArray2 = ['Marcela',24,'Feminino'];
console.log([...myArray, ...myArray2]);

//Separa elemento por elemento
console.log([...'myArray']);

const teste1 = [1,2,3,4];
const teste2 = [5,6,7,8];
const novo = ['contagem'];
console.log([...teste1, ...novo, ...teste2])

//SPREAD OPERATOR COM FUNÇÃO
const myFunction = (bread,cheese,meat,drink) => {
    console.log(`Good morning hanney! Can you give me please a sandwich with ${bread},${cheese},${meat} has been already! Your ${drink} is ready too.`);
}

const pedido = ['Parmezon bread','Gorgonzola Cheese','300gr Rihno Meat','Coca Cola'];
myFunction(...pedido);