//Rest params + padStart e padEnd
const restParams = (multiplier,...args) => {
    return args.map(args => ((multiplier * args) / 100));
};

console.log(restParams(2,2,4,6,8,10)); //OK!
console.log(''.padStart(20,'-'),''.padEnd(20,'*')); //faz ele repetir várias vezes no começo ou no início, alguma coisa que se queira

//Then e Catch === Promises
const promised = new Promise ((resolve,reject) => {
    (false) ? resolve(`The resulted is true!`) : reject(`The resulted isn't true!`)
});

promised
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

//Classes + Constructors + Set/Get
class AbyssalCreatures{
    constructor(name){
        this.name = name;
        this.showName();
        setTimeout(() => {
            this.secretName();
        }, 2000);
    }
    showName(){
        console.log(`This name is ${this.name}`);
    }
    secretName(){
        (this.name === 'Triporfos') ? alert(''.padStart(5,'*') + 'You find the secret name!' + ''.padEnd(5,'*')) : alert(''.padStart(5,'#') + 'Continue searching for...' + ''.padEnd(5,'#'))
    }
};

class charact extends AbyssalCreatures{
    constructor(name,charact){
        super(name);
        this.charact = charact;
        setTimeout(() => {
            this.mostPorwefulCharact();
        }, 10000);
    }
    mostPorwefulCharact(){
        (this.charact == 'Fire') ? alert('Fire monsters its better than all') : alert('Weak monsters...sorry');
    }
};

const d_creature = new charact('Mugral','Ice');
const e_creature = new charact('Bison','Fire');

const a_creature = new AbyssalCreatures('Grossondor');
const b_creature = new AbyssalCreatures('Lorton');
const c_create = new AbyssalCreatures('Triporfos');

//Async e Await + Fetch + setTimeOut
const asyncThis = async () => {
    try{
        //let fetching = await fetch('https://willianjusten.com.br/search.json');
        setTimeout( async () => {
            let fetching = await fetch('https://willianjusten.com.br/search.json');
            let jsonFetch = await fetching.json();
            let finalResult = await jsonFetch.map(jsonFetch => jsonFetch)
            console.log(finalResult);
        },5000);
    }
    catch(errorMsg){
        console.error('Sorry, but have some errors here. Need your attention: -->>>',errorMsg)
    }
};

asyncThis();
