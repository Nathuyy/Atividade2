const prompt = require("prompt-sync")();


function multiplicarMatrizPorA(matriz, tamanho, valorA) {
    let resultado = [];
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            resultado.push(matriz[i][j] * valorA);
        }
    }
    return resultado;
}

function lerMatrizEValor() {
    let matrizM = [];
    const tamanho = 6;
    let valorA;

    // ler a matriz M
    for (let i = 0; i < tamanho; i++) {
        matrizM[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matrizM[i][j] = parseInt(prompt("Digite o elemento M[" + i + "][" + j + "]: "));
        }
    }

    // Leitura do valor A
    valorA = parseInt(prompt("Digite o valor de A: "));

    return { matriz: matrizM, tamanho: tamanho, valorA: valorA };
}

// exibir o vetor V
function exibirVetor(vetor) {
    console.log("Vetor V:");
    console.log(vetor.join(", "));
}

function main() {
    const entrada = lerMatrizEValor();
    const vetorV = multiplicarMatrizPorA(entrada.matriz, entrada.tamanho, entrada.valorA);
    exibirVetor(vetorV);
}

main();