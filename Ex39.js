const prompt = require("prompt-sync")();

let vetor = []

for (let i = 0; i < 100; i++) {
    let num = parseInt(prompt("Insira seu número"));
    vetor.push(num)
}

let vetorB = [];


//retira os valores negativos e nulos e armazena no vetor B
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
        vetorB.push(vetor[i]);
    }
}

console.log(vetorB);