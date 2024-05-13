const prompt = require("prompt-sync")();

let resultadoLoto = []

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Insira seu número"));
    resultadoLoto.push(num)
}


// lendo os apostadores
for (let apostador = 1; apostador <= 50; apostador++) {
    let respostas = [];

    // respostas de cada apostador
    console.log("\nApostador", apostador);
    for (let i = 0; i < 5; i++) {
        let resposta = parseInt(prompt("Resposta para o número " + (i + 1) + " da aposta: "));
        respostas.push(resposta);
    }

    // Verificar o número de acertos
    let acertos = 0;
    for (let i = 0; i < 5; i++) {
        if (respostas[i] === resultadoLoto[i]) {
            acertos++;
        }
    }

    // Exibir o número do apostador e o número de acertos
    console.log("Número do apostador:", apostador);
    console.log("Número de acertos:", acertos);

    if (acertos === 5) {
        console.log("Parabéns, você foi o GANHADOR!");
    }
}