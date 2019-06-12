//Tentei criar um construtor aqui com arrow Function
const Pessoa = (name,type,age) => {
    this.name = name;
    this.type = type;
    this.age = age;
}

const ShowIt = () => {
    const pessoa_1 = new Pessoa('John','Male','34');
    console.log(pessoa_1);
}

ShowIt();

//Ou mesmo que eu faça dessa forma aqui em baixo, ainda assim não estou conseguindo...
const pessoa_2 = new Pessoa('Carey','Female','24');
console.log(pessoa_2);

//Só dá certo se eu fizer assim, aí funciona normal!
function Persona(name,type,age){
    this.name = name;
    this.type = type;
    this.age = age;
}

const persona_1= new Persona('John','Male','34');
console.log(persona_1);