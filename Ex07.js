const prompt = require("prompt-sync")();


//pede input com as informações
const inputCarro = parseInt(prompt("Insira 1 para carro popular e 2 para carro de luxo: "))
const diasUsados = parseInt(prompt("Insira o número de dias utilizados: "))
const kmPercorridos = parseFloat(prompt("Insira quantos km você percorreu: "))
let precoKm
let precoTotal

//faz os cálculos: 

if (inputCarro === 1) {
    const aluguel = 90
    if(kmPercorridos <= 100) {
        precoKm = 0.20 * kmPercorridos
    } else {
        precoKm = 0.10 * kmPercorridos
    }
     precoTotal = aluguel * diasUsados + precoKm 
} else if (inputCarro === 2) {
    const aluguel = 150
    if(kmPercorridos <= 200) {
        precoKm = 0.30 * kmPercorridos
    } else {
        precoKm = 0.25 * kmPercorridos
    }
     precoTotal = aluguel * diasUsados + precoKm 

}
console.log(`Preço total do aluguel: R$ ${precoTotal}`);
