window.onload = () => {

    let texto = 'Lorem ipsum mefilium nor testamis amus agole';

    //verifica se começa com...
    console.log(texto.startsWith('Lo'));//true

    //verifica se começa com...porém, contando apartir da 2ª casa
    console.log(texto.startsWith('rem', 2));//true

    //verifica se termina com...
    console.log(texto.endsWith('agole'));//true

    //verifica se termina com...porém, contando apenas até a penúltima posição
    console.log(texto.endsWith('agol', 43));//true

    //verifica se o conteúdo existe dentro da variável
    console.log(texto.includes('testami'));//true
    console.log(texto.includes('ipsum mefiliuM'));//false

    //repete um conteúdo várias vezes
    console.log('Frimonha well fumed!'.repeat(10));
}