const dataBtn = 'width:100%;background-color:#e9e9e9;color:black;height:50px;font-size:30px;cursor:pointer';

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    show(){
        alert(`This name inserted is ${this.name} & ${this.age}`);
    }
}

//CRIA O BOTAO
window.onload = () => {
    //COLETA ID
    const divElement = document.querySelector('#app');

    //CREATE BTN
    const btnElement = document.createElement('button');
    const textElement_1 = document.createTextNode('Insert this');

    btnElement.setAttribute('style',dataBtn);

    //APPEND
    btnElement.appendChild(textElement_1);
    divElement.appendChild(btnElement);

    btnElement.addEventListener('click', () => {
        let namePerson = prompt('Insert a name:');
        let agePerson = prompt('Inser an age:');

        const pessoa = new Person(namePerson, agePerson);
        pessoa.show();
    });
}