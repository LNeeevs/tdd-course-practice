const btnElement = document.querySelector('#exec');

const myFunction = (name, surname, age = 30) => {
    console.log(`
        Nome gerado: ${name}
        - Sobrenome: ${surname}
        - Idade: ${age}
    `);
}

btnElement.onclick = myFunction('Lucas');