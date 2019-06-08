/*function Animal(kind,sound) {
    this.kind = kind;
    this.sound = sound;
}*/

//console.log(giraffa,rihno,butterfly)

const myArray = [];

class Animal{
    constructor(name,kind,sound){
        this.name = name;
        this.kind = kind;
        this.sound = sound;

        myArray.push([name,kind,sound]);
    }

    showMe(){
        console.log(giraffa,rihno,butterfly);
    }
}



const giraffa = new Animal('Giraffa','Pescocis Cumpridus','Ptuííííí');
const rihno = new Animal('Rihno','Narizis Puntudis','Nhôôôn');
const butterfly = new Animal('Butterfly','Larvínea Voadorium','Ffffffff');

console.log(myArray);
console.log(Object.keys(myArray));

const analisando = () => {
    const result = prompt('Input animal:')

    myArray
        .filter(myArray => myArray.name == result)
        .map(myArray => myArray = console.log(`O animal encontrado aqui foi o ${name}, em latim ${kind} e faz um som assim ${sound}`))
}

analisando();