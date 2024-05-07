const prompt = require("prompt-sync")();

let vetor = []
for(i = 0; i < 7; i++) {
    vetor.push(prompt("Insira um nome: "));
}

console.log(vetor);
console.log("Ordem inversa: " + vetor.reverse());