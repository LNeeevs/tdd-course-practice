const defer = new Promise((resolve, reject) => {
    (false) ? resolve("It works hanney! Enjoy it ;)") : reject("Don't have any results...")
});

//No momento em que o defer receber a resposta, ele vai dizer, RECEBI então THEN faça alguma coisa com ele. Para um resultado positivo. Se o resultado for negativo, execute o CATCH
defer
    .then((data) => {
        console.log(data);
        return `Yu be a greeeat dev!`
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))