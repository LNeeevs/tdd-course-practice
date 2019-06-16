//ASYNC E AWAIT
const resultado = async () => {
    try{
        let fetching = await fetch('https://willianjusten.com.br/search.json');
        let jsonFetched = await fetching.json();
        let finalFetch = await jsonFetched
            .map(jsonFetched => jsonFetched.title);

        console.log(finalFetch);
    }
    catch(errorLog){
        console.error('Have same errors here. Please, need you attention ->>>',errorLog);
    }
}

resultado();

//REST PARAMS
const restingParams = (m,...values) => {
    values,ues
}