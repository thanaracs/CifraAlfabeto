/*PROGRAMA DE CIFRA ALFABETO - usuário digita a chave e a palavra
a palavra é separada no tamanho da chave e comparada letra por letra com a letra da chave
*/
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function separandoPalavras() {
    var palavra = document.getElementById('palavra').value;
    var chave = document.getElementById('chave').value;
    var palavrasDivididas = [];
    var contador = 0;
    var concatenadorDeLetras = '';

    for (let i = 0; i < palavra.length; i++) {
        //Contador para juntar as palavras concatenadas
        if (contador < chave.length) {
            concatenadorDeLetras = concatenadorDeLetras + palavra[i];
            contador = contador + 1;

            if ((i + 1) >= palavra.length) {
                //se a palavra do array ainda for menor que a chave, ele volta e acrescenta mais um k, até finalizar o tam.
                while (concatenadorDeLetras.length < chave.length) {
                    concatenadorDeLetras = concatenadorDeLetras + 'k';
                }
                palavrasDivididas.push(concatenadorDeLetras);
            }
            //assim que concatenar a palavra ele dá push no array inserindo a mesma e se não completar, entra no if
        } else {
            palavrasDivididas.push(concatenadorDeLetras);
            contador = 1;
            concatenadorDeLetras = palavra[i];

            if ((i + 1) >= palavra.length) {
                //ultima palavra for menor que a chave acrescenta o K e se continuar menor, sobe para o primeiro if
                while (concatenadorDeLetras.length < chave.length) {
                    concatenadorDeLetras = concatenadorDeLetras + 'k';
                }
                palavrasDivididas.push(concatenadorDeLetras);
            }
        }
    }
    return palavrasDivididas
}
//COMPARAR POSIÇÃO POR POSIÇÃO. T COM A / H COM M.,,

function criptografiaDePonta() {
    var palavrasDivididas = separandoPalavras();
    var chavePalavra = document.getElementById('chave').value;
    var posicoesChave = [];
    var posicoesFinais = [];
    var palavraCriptografada = '';

    //posicao das letras chaves
    for (let i = 0; i < chavePalavra.length; i++) {
        posicoesChave.push(alfabeto.indexOf(chavePalavra[i]));
    }
    //posicao das letras palavras
    for (let i = 0; i < palavrasDivididas.length; i++) { //percorrer amor fofa linda
        var palavra = palavrasDivididas[i];

        for (let x = 0; x < palavra.length; x++) { //percorrer a m o r
            var posicaoPalavra = alfabeto.indexOf(palavra[x]);
            console.log(palavra[x], alfabeto, posicaoPalavra);
            var soma = posicaoPalavra + posicoesChave[x];

            if (soma > 24) {
                soma = soma - 24;
            }
            posicoesFinais.push(soma);
            console.log(posicoesFinais);
        }
    }
    posicoesFinais.forEach(element => {
        if (element == -1) {
            palavraCriptografada = palavraCriptografada + 'k';
        } else {
            palavraCriptografada = palavraCriptografada + alfabeto[element];
        }
    });
    console.log(palavraCriptografada)
    document.getElementById('respostaTexto').value = palavraCriptografada;
    return palavraCriptografada;
}

//AQUI COMEÇA A DESCRIPTOGRAFIA
function descriptografiaDePonta() {
    var palavrasDivididas = separandoPalavras();
    var chavePalavra = document.getElementById('chave').value;
    var posicoesChave = [];
    var posicoesFinais = [];
    var palavraDescriptografada = '';

    //posicao das letras na chave
    for (let i = 0; i < chavePalavra.length; i++) {
        posicoesChave.push(alfabeto.indexOf(chavePalavra[i]));
    }
    console.log(palavrasDivididas)
        //posicao das letras na palavra
    for (let i = 0; i < palavrasDivididas.length; i++) { //percorrer amor fofa linda
        var palavra = palavrasDivididas[i];

        for (let x = 0; x < palavra.length; x++) { //percorrer a m o r
            var posicaoPalavra = alfabeto.indexOf(palavra[x]);
            console.log(palavra[x], alfabeto, posicaoPalavra);

            if (posicaoPalavra != -1) {
                var soma = posicaoPalavra - posicoesChave[x];

                if (soma < 0) {
                    soma = 24 + soma;
                }
                posicoesFinais.push(soma);
            }
        }
    }
    posicoesFinais.forEach(element => {
        palavraDescriptografada = palavraDescriptografada + alfabeto[element];

    });
    console.log(palavraDescriptografada)
    document.getElementById('respostaTexto').value = palavraDescriptografada;

    return palavraDescriptografada;
}