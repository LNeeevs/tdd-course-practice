//Transforma o conteúdo em array para que seja permitido utilizar as funções de array
window.onload = () => {

    const texto = 'teste de texto';

    //separa as palavras por espaço em 1 só array
    console.log(Array.from(texto).join(' '));

    //inverte o texto
    console.log(Array.from(texto).reverse(texto));

    //mostra o ultimo caractere
    console.log(Array.from(texto).slice(1));

    console.log(Array.from(texto).concat('mifrue is life'));

    console.log(Array.from(texto).entries());

    //troca cada posição no array pelo novo resultado
    console.log(Array.from(texto).fill('macrunhaa'));
}