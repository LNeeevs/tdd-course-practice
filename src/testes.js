/*const database = [
    {
        name: 'Luis',
        age: 55,
        sex: 'M',
        test: () => {
            (database.age > 18) ? console.log('Maior de 18') : console.log('Mama tetas')
        }
    },
    {
        name: 'Fernanda',
        age: 24,
        sex: 'F'
    },
    {
        name: 'Ricardo',
        age: 45,
        sex: 'M'
    },
    {
        name: 'Priscila',
        age: 90,
        sex: 'F'
    }
];

const meuArrai = [1,2,3,4,5];
const testando = () => meuArrai
    .filter(meuArrai => meuArrai >= 2)
    .map((meuArrai) => `Olá`);
    
console.log(testando());

for(db in database){
    console.log(db.name);
    alert('oi');
}


//mostra o nome com MAP()
const teste = () => database.map((database) => database.name = `Name = ${database.name}`);
console.log(teste());

//encontra uma pessoa com FILTER()
const encontre = database
    .filter(database => database.name === 'Fernanda')
    .map(database => database.name = `O nome encontrado foi ${name}`)

console.log(encontre);*/

const arrayOne = [1,2,3,4];
const ArrayTwo = [5,6,7,8];

const executa = () => {
    return [...arrayOne,...ArrayTwo]
}

const execute = () => {return [...arrayOne,(arrayOne[3]*ArrayTwo[3]),...ArrayTwo]}

console.log(execute());

console.log(...'teste');
console.log([...'teste']);

const testando = [
    {
        valor: 20.50
    },
    {
        valor: 45.90
    },
    {
        valor: 1566.90
    }
];

const received = [];

const mostraValores = (somator, ...args) => {
    //args.map(args => console.log(somator + args))
    return args.map(args => somator + args);
}

for(x in testando){
    received[x] = testando[x].valor;
}

console.log(received);
console.log(mostraValores(1000,...received));

const templateLiterals = `
    testando um template literals

    EI PERAÍ! FAZ AI 10 + 10... 
    Ta faziiido meu rei...

    SEGUE O BOND
    .
    .
    .
`;

console.log(templateLiterals);


const var000 = [1,2,3,4,5,6,7,8];
var000.fill('Maconha',5);
console.log(var000);


const myObject = [1,2,'Lucas'];              
const teste3 = [num1, num2, pessoa] = myObject;
console.log([pessoa]);




const myFunctionA = (typePerson, ...pessoas) => {
    return pessoas.map(pessoas => `${typePerson}${pessoas}`);
}
console.log(myFunctionA('Sr.','Lucas','Julio','Junior'));  