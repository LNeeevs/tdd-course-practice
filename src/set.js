//INITING SET
let teste = new Set(['Lucas',28,'Masculino',55997763210]);

teste.add('João');
teste.add(25);
teste.add('Masculinu');

console.log(teste);
let pos = teste.entries('Pedro');

console.log(pos);

//INITING PROXY
let teste2 = new Proxy = (target,...args) => {
    return args.map((args) => console.log(args))
}

teste2(1,2,3,4,5)

