const database = [
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

console.log(encontre);