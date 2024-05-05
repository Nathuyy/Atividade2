const prompt = require("prompt-sync")();

const primeiroNum = parseInt(prompt("Digite o primeiro número da PA: "))
const razao = parseInt(prompt("Digite a razao da sua PA: "))


let somaElementos = 0

let PA = primeiroNum + (10 - 1) * razao

// Mostra os 10 primeiros elementos da PA e calcula a soma
console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
    const termo = primeiroNum + i * razao;
    console.log(termo);
    somaElementos += termo;
}

console.log("Soma do elementos: " + somaElementos);