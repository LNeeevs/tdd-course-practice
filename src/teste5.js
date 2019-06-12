/*USING HERE:
    Rest Params, Shorthand Properties, Promises, Classes, Constructors, Template Literals
*/

//INIT WITH: PROMISES
const promised = new Promise ((resolve,reject) => {
    (true) ? resolve('Test ok') : reject('No tested')
});

promised
    .then((result) => console.log(result))
    .catch((fail) => console.log(fail))

//REST PARAMS
const paramsRest = (multiplier,...values) => {
    return values.map(values => multiplier * values)
}

console.log(paramsRest(10,1,2,3,4,5,6,7,8,9,10));

//CLASS + CONSTRUCTOR + SET/GET
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(`Name: ${this.name}`)
    }

    showAge(){
        console.log(`Age: ${this.age}`)
    }

    showBoth(){
        console.log(`Name: ${this.name} & Age: ${this.age}`)
    }
}

const pessoa_1 = new Person('James',76);
const pessoa_2 = new Person('Guilhermo',65);

class type extends Person{
    constructor(name,age,type){
        super(name,age);
        this.type = type;
    }

    showNew(){
        console.log(`Init process: Name: ${this.name} | Age: ${this.age} | Type: ${this.type}`);
    }
}

const typePerson_1 = new type('Gulia',25,'Nego');