/*const myFunction = (multiplicator, ...args) => {
    return args.map(args => multiplicator * args);
}

console.log(myFunction(10,1,2,3,4,5));*/


//OBJETO DA FRUTARIA
const fruteria = [
    {
        name: 'Maça',
        valor: 4.20
    },
    {
        name: 'Uva',
        valor: 9.50
    },
    {
        name: 'Banana',
        valor: 2.45
    },
    {
        name: 'Morango',
        valor: 5.80
    }
];

//VARIAVEL QUE IRA RECEBER CADA VALOR DE DENTRO DO OBJETO FRUTERIA
const fruits = [];

//LOOP PARA INSERIR CADA VALOR EM UMA POSIÇÃO NO NOVO OBJETO FRUITS
for(x in fruteria){
    fruits[x] = fruteria[x].valor;
}

//FUNCAO QUE MULTIPLICA O VALOR DE CADA FRUTA PELO MULTIPLICADOR DEFINIDO
const discountManager = (multiplicator, ...args) => {
    return args.map(args => multiplicator * args)
}

//EXECUTA A FUNCAO DISCOUNTMANAGEM E ENVIA UM MULTIPLICADOR, 2 NO CASO E TAMBEM NO OBJETO FRUITS COM ... (ISSO SIGNIFICA QUE CADA POSICAO SERA ENVIADA SEPARADAMENTE, PERMITINDO A CONTABILIDADE)
console.log(discountManager(2,...fruits));
