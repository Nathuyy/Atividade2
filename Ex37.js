const prompt = require("prompt-sync")();

let gabarito = [];

for (let i = 0; i < 20; i++) {
    let resposta = prompt("Resposta para a questão " + (i + 1) + ": ");
    gabarito.push(resposta);
}

console.log("Gabarito:", gabarito);

let resultados = [];

// respostas dos alunos
for (let aluno = 1; aluno <= 50; aluno++) {
    let acertos = 0;

    // Ler respostas do aluno
    console.log("Aluno:", aluno);
    for (let i = 0; i < 20; i++) {
        let resposta = prompt("Resposta para a questão " + (i + 1) + ": ");
        if (resposta === gabarito[i]) {
            acertos++;
        }
    }

    // Armazenar resultado do aluno
    resultados.push({ aluno: aluno, acertos: acertos });
}

// Exibir resultados
for (let i = 0; i < resultados.length; i++) {
    let resultado = resultados[i];
    if (resultado.acertos >= 12) {
        console.log("Aluno", resultado.aluno, "- APROVADO");
    } else {
        console.log("Aluno", resultado.aluno, "- REPROVADO");
    }
}
