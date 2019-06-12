console.log('Oi');

const resulting = async () => {
    try{
        //let resulted = await fetch('https://willianjusten.com.br/search.json');
        let resulted = await fetch('https://willianjustensdfsdf.com.br/search.json');
        let newResulted = await resulted.json();
        let finalResult = newResulted.map(newResulted => newResulted); 
        
        console.log(finalResult);
    }
    catch(err){
        let msgError = 'No motf...U find an error here...';
        console.error(msgError,err);
    }
}

resulting();

//TO EXCEL
const awaitResult = async () => {
    try{
        //let contentFetch = await fetch('https://willianjusten.com.br/search.json');
        let contentFetch = await fetch('https://willianjusdfsten.com.br/search.json');
        let jsonedContent = await contentFetch.json();
        let finalResulted = jsonedContent.map(jsonedContent => jsonedContent.title);
        console.log(finalResulted);
    }
    catch(error){
        console.error('ERROR FINDED: PLEASE CHECK THE CODE! -->',error);
    }
}
awaitResult();