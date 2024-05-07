const prompt = require("prompt-sync")();

let vetorNome = []
let vetorIdade =[]
let menoresDe18 = []

for(let i = 0; i < 3; i++) {
    let nome = prompt("Insira o nome: ")
    vetorNome.push(nome)
    let idade = parseInt(prompt("Insira a idade: "))
    vetorIdade.push(idade)

    if (idade < 18) {
        menoresDe18.push({ nome: nome, idade: idade });
    }
}

console.log(menoresDe18);