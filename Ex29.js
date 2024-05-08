const prompt = require("prompt-sync")();

let matriz = [];
const tamanho = 5;

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = parseInt(prompt("Digite o elemento M[" + i + "][" + j + "]: "));
    }
}

let somaLinha4 = 0;
for (let j = 0; j < tamanho; j++) {
    somaLinha4 += matriz[3][j]; //3 pq começa em 0
}

let somaColuna2 = 0;
for (let i = 0; i < tamanho; i++) {
    somaColuna2 += matriz[i][1]; //1 pq começa em 0
}

let somaDiagonalPrincipal = 0;
for (let i = 0; i < tamanho; i++) {
    somaDiagonalPrincipal += matriz[i][i];
}

let somaTotal = 0;
for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        somaTotal += matriz[i][j];
    }
}

// Exibir os resultados
console.log("Matriz M:");
for (let i = 0; i < tamanho; i++) {
    console.log(matriz[i].join("\t"));
}
console.log("Soma da linha 4: " + somaLinha4);
console.log("Soma da coluna 2: " + somaColuna2);
console.log("Soma da diagonal principal: " + somaDiagonalPrincipal);
console.log("Soma de todos os elementos: " + somaTotal);