const myArray = {
    name: 'Lucas',
    surname: 'Neves',
    socials: {
        facebook: 'www.facebook.com.br',
        instagram: 'www.instagram.com.br'
    },
    phones: {
        cellphone: '+5512997763210',
        number: 'Dont have anyone'
    }
}

//ADICIONANDO NOVOS CONTEÚDOS DENTRO DE SOCIAL
myArray['chinelos'] = 'maionese';

console.log(myArray);
console.log(myArray.socials);

//INICIANDO A VARREDURA
const teste = {facebook, instagram} = myArray.socials;
const {name, surname} = myArray;

//EM SOCIAIS - o objeto teste foi transformado em um array com o Object.keys()
console.log(`
    Iniciando a contagem: \n
    Sociais: ${Object.keys(teste)} \n 
    Nome: ${name} \n
    Sobrenome: ${surname}
`);