const prompt = require("prompt-sync")();

let inputUser = 1
let totalSalarioMulheres = 0
let totalSalarioHomens = 0

//pede os inputs ao user e só para de pedir quando for digitado zero
while (inputUser !== 0) {

    salario = parseFloat(prompt("Insira seu salário: "))
    sexo = parseInt(prompt("Insira 1 para FEMININO e 2 para MASCULINO: "))

    if (sexo === 1) {
        totalSalarioMulheres += salario
        console.log(`Total Salário Mulheres: R$${totalSalarioMulheres}`);
    } else {
        totalSalarioHomens += salario
        console.log(`Total Salário Homens: R$${totalSalarioHomens}`);
    }

    inputUser = parseInt(prompt("Insira 0 para parar o programa ou qualquer outro número para continuar: "));



}