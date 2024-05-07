const prompt = require("prompt-sync")();

let totalSalario = 0;
let totalFilhos = 0;
let totalPessoas = 0;

let pesquisa = parseInt(prompt("Insira 0 para finalizar a pesquisa: "));

while (pesquisa !== 0) {
    let salario = parseFloat(prompt("Insira seu salário: "));
    totalSalario += salario;

    let numFilhos = parseInt(prompt("Insira quantos filhos você tem: "));
    totalFilhos += numFilhos;

    totalPessoas++;
    pesquisa = parseInt(prompt("Insira 0 para finalizar a pesquisa: "));
}

let mediaSalario = totalSalario / totalPessoas;
let mediaFilhos = totalFilhos / totalPessoas;

console.log("Média de salário:", mediaSalario);
console.log("Média de filhos:", mediaFilhos);