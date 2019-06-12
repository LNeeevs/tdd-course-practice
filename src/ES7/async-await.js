getResult = async () => {
    let content = await fetch('https://willianjusten.com.br/search.json');

    let newContent = await content.json();

    console.log(newContent);
    //content.map(content => console.log(content.title));
}

getResult();

getNewResults = async () => {
    const resultado = await fetch('https://willianjusten.com.br/search.json');
    const novoResultado = await resultado.json();

    const tryThis = async () => {
        await novoResultado
            .filter((novoResultado) => novoResultado == 'react')
            .map(novoResultado => console.log(novoResultado.title))
    }

    tryThis();
}

getNewResults();


//FETCH AND ASYNC AWAIT TO EXCEL
const newFetch = async () => {
    let resultGenerated = await fetch('https://willianjusten.com.br/search.json');
    let jsonResult = await resultGenerated.json();
    console.log('New FETCH:', jsonResult);
}
newFetch();