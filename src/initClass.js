class Animal{
    constructor(name){
        this.name = name;
    }

    show(){
        console.log(`This animal is ${this.name}`)
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super(name);
        this.sound = sound;
    }

    urf(){
        console.log(`It's name is ${this.name} and it's sound is ${this.sound}`)
    }
}

//CRIANDO OS ELEMENTOS
const rhino = new Animal('Rhinoceront');

const dog = new Dog('Eve','Fuuííííííííííííí');

const toupeira = new Dog('Toperirbs','Yaaaaaaaaaaicc');