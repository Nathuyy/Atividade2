const prompt = require("prompt-sync")();

let alt = parseFloat(prompt("Insira sua altura: "))
let sexo = parseInt(prompt("Insira 1 para Feminino e 2 para masculino: "))
let peso

function pesoHomem(alt) {
    peso = 72.7 * alt - 58
    return peso
}

function pesoMulher(alt, sexo) {
    peso = 62.1 * alt - 44.7
    return peso
}

if (sexo === 1) {
    console.log("Peso ideal para uma mulher: " + pesoMulher(alt));
} else if (sexo === 2) {
    console.log("Peso ideal para um hoemm: " + pesoHomem(alt));
} else {
    console.log("Opção de sexo inválida.");
}