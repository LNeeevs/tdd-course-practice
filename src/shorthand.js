window.onload = () => {
    const divElementDisplay = document.querySelector('#app');
    const btnElement = document.createElement('button');
    const btnText = document.createTextNode('Click me!');
    btnElement.appendChild(btnText);
    divElementDisplay.appendChild(btnElement);

    //cria-se o conteúdo para as variáveis
    let name = 'Lucas';
    let age = 28;
    let state = 'São Paulo';
    let sex = 'Masculino';

    //cria-se o objeto pessoa. A linguagem irá automaticamente linkar os conteúdos
    const pessoa = {
        name,
        age,
        state,
        sex
    }

    const pessoa_2 = {
        name: 'John',
        age: 27,
        state,
        sex
    }

    const mostraPessoa = () => {console.log(pessoa_2)}

    btnElement.onclick = mostraPessoa;
}

