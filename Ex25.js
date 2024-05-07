const prompt = require("prompt-sync")();

let matriz = []
for(let i = 0; i < 15; i++) {
    matriz[i] = []
}

for (let i = 0; i < 15; i++) { //linhas
    for (let j = 0; j < 20; j++) { //colunas
        matriz[i][j] = parseFloat(prompt(`Insira sua matriz [${i+1}][${j+1}]: `));
    }
}

let somarColunas = [];
for (let j = 0; j < 20; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 15; i++) {
        somaColuna += matriz[i][j];
    }
    somarColunas.push(somaColuna);
}

console.log("Soma de cada coluna separadamente:");
for (let j = 0; j < 20; j++) {
    console.log(`Coluna ${j+1}: ${somasColunas[j]}`);
}