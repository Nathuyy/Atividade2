const prompt = require("prompt-sync")();

//pede o input para o user:
const horas = parseFloat(prompt("Insira a quantidade de horas que você fez exercícios esse mês, insira somente números: "))
let totalPontos

if (horas <= 10) {
    totalPontos = 2 * horas
} else if (horas > 10 && horas <= 20) {
    totalPontos = 5 * horas
} else if (horas > 20) {
    totalPontos = 10 * horas
}

const totalReais = totalPontos * 0.5
console.log(`Total de pontos: ${totalPontos}
Total de dinheiro: R$ ${totalReais}`);
