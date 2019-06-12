const teste = new Map();

teste.set('Lucas',28);
teste.set('Marcela',24);
teste.set('Boi',5);

console.log(`Teste == ${teste}`);

let x = teste.map(teste => teste);

console.log(x);