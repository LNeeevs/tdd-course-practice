//CLASSE CONSTRUTURA + PROMISE(THEN-CATCH)
class Account{
    constructor(log,pas){
        this.log = log;
        this.pas = pas;
    }
    testLog(){
        let trying = new Promise((resolve,reject) => {
            (this.log == 'Lucas') ? this.exec() : reject(`Your name is wrong`)
        });

        trying  
            .then((data) => alert(data))
            .catch((error) => alert(error))
    }
    exec(){
        let tryingPass = new Promise((resolve,reject) => {
            (this.pas == '12345') ? resolve(`You can log with sucess!`) : reject(`Your password it's wrong`)
        });

        tryingPass
            .then((data) => alert(data))
            .catch((error) => alert(error))
    }
}

const initProcess = () => {
    const receptLog = document.querySelector('#myLog').value;
    const receptPas = document.querySelector('#myPas').value;
    
    const person = new Account(receptLog,receptPas);
    person.testLog();
}

//RECEBENDO VALORES EM REST PARAMS
const parameters = (multiplier,...params) => {
    return params.map(params => params*multiplier)
}

console.log(parameters(10,800,450,990,643,24));

//CRIANDO OBJETOS A PARTIR DA CLASSE COM TRY/CATCH
const fetchando = async () => {
    try{
        let fetche = await fetch('https://willianjusten.com.br/search.json');
        let jsonedFetche = await fetche.json();
        let jsonedFetched = await jsonedFetche.map(jsonedFetche => jsonedFetche);

        console.log(`Answer here:`,jsonedFetched);
    }
    catch(error){
        console.error(`Find some errors here...`,error);
    }
}

fetchando();