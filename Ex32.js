let matrizM = []

//gerando a matriz: 
for (let linhas = 0; linhas < 12; linhas++) {
    matrizM[linhas] = []
    for (let colunas = 0; colunas < 13; colunas++) {
        matrizM[linhas][colunas] = Math.floor(Math.random() * 100) + 1; // Gera números aleatórios entre 1 e 100

    }    
}

// Encontrar o maior elemento de uma linha
function encontrarMaiorModulo(linha) {
    let maior = linha[0];
    for(let i = 1; i < linha.length; i++) {
        if (Math.abs(linha[i]) > Math.abs(maior)) {
            maior = linha[i];
        }
    }
    return Math.abs(maior);
}
//dividir os elemento pelo maior elemento 
function dividirElementos(linha, maior) {
    for (let i = 0; i < linha.length; i++) {
        linha[i] /= maior;

        
    }
}

let novaMatriz = []

for (let linhas = 0; linhas < matrizM.length; linhas++) {
    let maiorElemento = encontrarMaiorModulo(matrizM[linhas]);
    novaMatriz[linhas] = [];
    for (let colunas = 0; colunas < 13; colunas++) {
        novaMatriz[linhas][colunas] = matrizM[linhas][colunas] / maiorElemento;
    }
}



console.log("Matriz original:" + matrizM.flat());
console.log("Matriz modificada: " + novaMatriz.flat());