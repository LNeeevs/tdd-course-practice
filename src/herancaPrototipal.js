function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//FUNÇÃO PROTOTYPE: permite configurar várias ações para um array
Person.prototype.hello = function() {
    console.log(`A pessoa chamada ${this.name} possui hoje ${this.age} anos e é do sexo ${this.sex}`)
}

Person.prototype.mapeando = function() {
    /*if(this.name == 'Buia'){console.log('SIM!')}
    else{console.log('Nããão!')}*/
    (this.name == 'Buia') ? `Encontramos a ${this.name}` : `Onde esta a safada da ${this.name}?`
}

const pessoa1 = new Person('Piruá',29,'Masculino');
const pessoa2 = new Person('Buia',24,'Feminino');



//Dá pra criar com argumentos também
/*function Persona(...args){
    this.name = args[0];
    this.number = args[1];
}

const novaPessoa = new Persona('Lucas',2000);
console.log(novaPessoa);*/
