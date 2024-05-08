const prompt = require("prompt-sync")();

let matriz = [];
const tamanho = 5;
let SL = [];
let SC = [];

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = parseInt(prompt("Digite o elemento M[" + i + "][" + j + "]: "));
    }
}

// Calcular as somas das linhas e das colunas
for (let i = 0; i < tamanho; i++) {
    let somaLinha = 0;
    let somaColuna = 0;
    for (let j = 0; j < tamanho; j++) {
        somaLinha += matriz[i][j];
        somaColuna += matriz[j][i]; // inverteu os índices para calcular as colunas
    }
    SL.push(somaLinha);
    SC.push(somaColuna);
}

console.log("Matriz M:");
for (let i = 0; i < tamanho; i++) {
    console.log(matriz[i].join("\t"));
}

console.log("Vetor SL: ", SL.join(", "));
console.log("Vetor SC: ", SC.join(", "));
