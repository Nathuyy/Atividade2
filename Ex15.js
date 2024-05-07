const prompt = require("prompt-sync")();

let vetor = [];
let vetorPares = [];
let posicoesPares = [];

for (let i = 0; i < 7; i++) {
    let numero = Number(prompt("Insira um número: "));
    vetor.push(numero);

    if (numero % 2 === 0) {
        vetorPares.push(numero);
        posicoesPares.push(i); // armazena a posição do número par
    }
}

console.log("Números pares:", vetorPares);
console.log("Posições dos números pares:", posicoesPares);
console.log("Todos os números:", vetor);