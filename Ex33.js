let matriz = []


//gerando a matriz: 
for (let linhas = 0; linhas < 3; linhas++) {
    matriz[linhas] = [];
    for (let colunas = 0; colunas < 3; colunas++) {
        matriz[linhas][colunas] = Math.floor(Math.random() * 100); // Gera números aleatórios entre 1 e 100
    }
}

//calculando a média da diagonal secundaria: 
function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i]; 
    }
    return soma / 3;
}

//função para multiplicar os elementos da diagonal principal pela media da secundaria: 
function multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria) {
    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }
    return matriz;
}


let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

matriz = multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria);

console.log(matriz.flat());