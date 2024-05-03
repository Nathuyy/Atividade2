// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

//pedindo input:
let ladoA = parseInt(prompt("Insira o lado A: "))
let ladoB = parseInt(prompt("Insira o lado B: "))
let ladoC = parseInt(prompt("Insira o lado C: "))

//verificando se pode ou não ser triângulo:
if(ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Pode ser um triângulo");
} else {
    console.log("Não pode ser um triângulo");
}
