class Creatures{
    constructor(name,type,age){
        this.name = name;
        this.type = type;
        this.age = age;
    }

    showCreature(){
        console.log(`It's the creature you're looking for: name:${this.name}, type:${this.type}, age:${this.age}`)
    }

    transformCreature(){
        let newCreature = prompt('Insert separeted by comma, the name, the type and the age, without spaces please:');
        let arrayCreature = [] = newCreature.split(",");

        (arrayCreature[0] != this.name) ? this.name = arrayCreature[0] : console.log(`Name is not changed!`);
        (arrayCreature[1] != this.type) ? this.type = arrayCreature[1] : console.log(`Type is not changed!`);
        (arrayCreature[2] != this.age) ? this.age = arrayCreature[2] : console.log(`Age is not changed!`);
        
        this.showCreature();
    }
}

const poshibobo = new Creatures('Poshibobo','Fluuf','184 years old');




//
co