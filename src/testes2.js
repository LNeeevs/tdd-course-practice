//REST PARAMS
const restParam = (multiplicator,...args) => {
    return args.map(args => multiplicator*args)
};

console.log(restParam(5,10,20,30,40,50,60,70,80,90,100));

//CONSTRUCTOR
function Animal(name,type){
    this.name = name;
    this.type = type;

    return console.log(name,type);
}

const dog = new Animal('Peter','Giraffa');

//CLASS WITH CONSTRUCTOR WITH SET-GET
class Person{
    constructor(name){
        this.name = name;
    }

    setName(name){
        this.name = name;
        this.show();
    }

    getName(){
        let name = prompt('Insert a new name: ');
        this.setName(name);
    }

    show(){
        console.log(`This name is ${this.name}`)
    }
}

const pessoa = new Person('Joshua');
pessoa.getName();

//.THEN / .CATCH: PROMISES
const promised = new Promise((resolve,reject) => {
    (false) ? resolve(`It's ok hanney!`) : reject(`I can't see anything here...`)
});

promised
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


//CLASS WITH EXTENDS
class Fruits{
    constructor(type){
        this.type = type;
    }

    show(){
        console.log(`This type is ${this.type}`);
    }
}

class Citric extends Fruits{
    constructor(type,acid){
        super(type);
        this.acid = acid;
    }

    showThis(){
        console.log(`This fruit is a ${this.type} and this acid is ${this.acid}`)
    }
}

const grape = new Fruits('Grape');
const lemon = new Fruits('Lemon');

const no_acid = new Citric(grape.type, 'No acid');
const ultra_acid = new Citric(lemon.type, 'Ultra acid');

ultra_acid.showThis();

