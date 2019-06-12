function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        return this.age;
    },1000);
}

const person = new Person;

//Testing BIND()
//Todas as funções retornam o mesmo resultado
var motf = 'TRUE'

let tryBase = {
    motf: 'REALLY TRUE'
}

let tryOut = {
    motf: 'FULL TRUE'
}

let tryNegative = {
    motf: 'LITTLE BIT OFFCOURSE'
}

let fun = () => {
    console.log(`What we're talking about? This >> ${this.motf}`);
}

let fun1 = fun;
let fun2 = fun.bind(tryOut);
let fun3 = fun.bind(tryBase);
let fun4 = fun.bind(tryNegative);

fun1();
fun2();
fun3();
fun4();