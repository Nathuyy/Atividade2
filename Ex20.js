const prompt = require("prompt-sync")();

const funcionarios = [];

// calcular o desconto do INSS
function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto * 0.12;
}

// calcular o salário líquido
function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
}

// imprimir o contracheque de um funcionário
function imprimirContracheque(funcionario) {
    const deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);

    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto);
    console.log("Dedução INSS:", deducaoINSS);
    console.log("Salário líquido:", salarioLiquido);
    console.log("--------------------------------------");
}

for (let i = 0; i < 80; i++) { 
    const matricula = prompt("Digite a matrícula do funcionário:");
    const nome = prompt("Digite o nome do funcionário:");
    const salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));

    funcionarios.push({ matricula, nome, salarioBruto });
}

console.log("Contracheques:");
funcionarios.forEach(funcionario => imprimirContracheque(funcionario));