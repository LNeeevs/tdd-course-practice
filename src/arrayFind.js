const superArray = [
    {
        name: 'Lucas',
        age: 11
    },
    {
        name: 'Maria',
        age: 30
    },
    {
        name: 'Lucas',
        age: 9
    },
    {
        name: 'Lucas',
        age: 10
    }
];

//ARRAY.FIND - vasculha todo o array, procurando pelo resultado que se espera obter
const testaArray = superArray.find(superArray => superArray.name == 'Maria');
console.log(testaArray);

//ARRAY.FIND - faz uma varredura no array, baseado em uma equação e retorna o resultado
const numeric = [10, 20, 30, 5];
const array = numeric.find(teste => teste < 20);
console.log(array);

//ARRAY.OF - cria um array com qualquer conteúdo inserido
const teste = Array.of(1,2,3,'Lucas','João', 'name: João da Silva', 'Idade: 65 anos');
console.log(teste);

//ARRAY.FIND - testando variações da função
const testando = superArray.find(superArray => superArray.name === 'Maria' && superArray.age > 29);
console.log(testando);

//ENCONTRA O OBJETO DENTRO DO ARRAY. SE FOR O QUE SE PROCURA, ALTERA O OBJETO NA PROPRIEDADE DESEJADA
const testing = superArray
    .filter(superArray => superArray.name === 'Lucas' && superArray.age >= 10)
    .map(superArray => superArray.name = 'Yooh')
console.log(superArray);


//ADICIONANDO UMA NOVA PROPRIEDADE DENTRO DO ARRAY JÁ EXISTENTE
const tryAltered = superArray
    .filter(superArray => superArray.name === 'Maria')
    .map(superArray => superArray.sex = 'Feminino');
console.log(superArray);







const teste000 = [
    {
        name: 'Maconha Junior',
        number: 420
    },
    {
        name: 'Maconha Senior',
        age: 4200
    },
    {
        name: 'Marunha',
        age: 42
    }
];

const testoso = teste000.find(teste000 => teste000.name == 'Marunha');
console.log(testoso);

const testeil = teste000.fill('Pablito Escobarzito', 2);
console.log(testeil);

const testinho = [
    {
        name: 'Carlos',
        age: 22
    },
    {
        name: 'Ricardo',
        age: 30
    }
]

const newObjecto = {name: 'Fubatrocis', age: 50, sex: 'undefined'}
const testunindo = testinho.fill(newObjecto);
console.log(testinho);


const var000 = [1,2,3,3,2,1,4,5,1];
const golfinho = var000.find(var000 => var000 == 6);
console.log(golfinho);


const var001 = 'Atecubanos em solenoide potistatis';

console.log(var001.startsWith('Ate', 0)); //true
console.log(var001.endsWith('tis', 34)); //true
console.log(var001.includes('atecubanos')); //false
console.log(var001.repeat(10));


const testiculum = ['tamanho',19,'Peninada'];
const maco = [trofeu,camisola,mexicano] = testiculum;
console.log(maco);