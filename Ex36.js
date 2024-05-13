const prompt = require("prompt-sync")();

let gabarito = [];

// gerando o gabarito
for (let i = 0; i < 13; i++) {
    gabarito[i] = Math.floor(Math.random() * 100); // Gera números aleatórios entre 1 e 100
}

console.log("Gabarito:", gabarito);


for (let apostador = 1; apostador <= 100; apostador++) {
    let respostas = [];

    // Ler respostas de cada apostador
    console.log("Apostador", apostador);
    for (let i = 0; i < 13; i++) {
        let resposta = parseInt(prompt("Resposta para a questão " + (i + 1) + ": "));
        respostas.push(resposta);
    }

    //  número de acertos
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (respostas[i] === gabarito[i]) {
            acertos++;
        }
    }

    // Exibir número do apostador e número de acertos
    console.log("Número do apostador:", apostador);
    console.log("Número de acertos:", acertos);

    if (acertos === 13) {
        console.log("Parabéns, você foi o GANHADOR");
    }
}
