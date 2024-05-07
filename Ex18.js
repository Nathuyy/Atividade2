const prompt = require("prompt-sync")();

function registrarFuncionario() {
    let nome = prompt("Insira o nome do funcionário: ");
    let cargo = prompt("Insira o cargo do funcionário: ");
    let salario = parseFloat(prompt("Insira o salário do funcionário: "));

    return { nome, cargo, salario };
}

let funcionarioUm = registrarFuncionario()

console.log(funcionarioUm.nome, funcionarioUm.cargo, funcionarioUm.salario);