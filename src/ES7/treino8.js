//CLASS WITH EXTENDS E REST PARAMS
class Person{
    constructor(name,...values){
        this.name = name;
        values.map(values => this.values = values)
    }
    showThis(){
        console.log(`That's a name of this first person like than ${this.name} and the values are ${this.values}`);
    }
}

const person_1 = new Person('Lucas',[1,2,3,4,5,6,7,8,9]);
person_1.showThis();

class Color extends Person{
    constructor(name,color,...preferNumbers){
        super(name);
        this.color = color;
        preferNumbers.map(preferNumbers => this.preferNumbers = preferNumbers)
    }
    showThat(){
        console.log(`Gonna see this: Name = ${this.name} | Color = ${this.color} | Numbers prefered = ${this.preferNumbers}`)
    }
}

const person_2 = new Color('Marcela','Branquíssima',[26,78,34,90]);
person_2.showThat();

const defering = async () => {
    try{
        let fetchedArguments = await fetch('https://willianjusten.com.br/search.json');
        let jsoned = await fetchedArguments.json();
        let final = await jsoned.map(jsoned => jsoned.url);

        console.log(final);
    }
    catch(errorLog){
        console.error(errorLog);
    }
}

defering();

const promisedThings = new Promise((resolve,reject) => {
    (true) ? resolve(`It's okay hanney!`) : reject(`Don't have any results here...`)
});

promisedThings
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


//TRY TO DO SOMETHING IN ARRAYS
const newArray = [1,2,3,4,5];
const newArray2 = [6,7,8,9,10];

console.log(newArray.concat(newArray2));
console.log(newArray.fill(10));

//TRY TO DO SOMETHING IN OBJECTS