const prompt = require("prompt-sync")();

let matriz = [];
const tamanho = 10;

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = parseInt(prompt("Digite o elemento M[" + i + "][" + j + "]: "));
    }
}

//fazer os calculos
let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        if (j > i) {
            somaAcimaDiagonal += matriz[i][j];
        } else if (i > j) {
            somaAbaixoDiagonal += matriz[i][j];
        }
    }
}

//mostrar resultados

console.log("Soma dos elementos acima da diagonal principal: " + somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal: " + somaAbaixoDiagonal);