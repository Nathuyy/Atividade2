const prompt = require("prompt-sync")();

//pede input para o user:
console.log("----menu----\n1-Pedra\n2-Papel\n3-Tesoura");
console.log();
let inputUser = parseInt(prompt("Insira 1 para pedra, 2 para papel e 3 para tesoura: "));

//o programa vai jogar contra o user, aqui ele escolhe um número entre 1 e 3:
let inputSistema = Math.floor(Math.random() * 3) + 1; 

//fazendo as jogadas:
if (inputUser === inputSistema) {
    console.log("Empate");
} else if (inputUser === 1 && inputSistema === 2) {
    console.log("Pedra X Papel = sistema ganhou");
} else if (inputUser === 1 && inputSistema === 3) {
    console.log("Pedra X Tesoura = usuário ganhou");
} else if (inputUser === 2 && inputSistema === 1) {
    console.log("Papel X Pedra = usuário ganhou");
} else if (inputUser === 2 && inputSistema === 3) {
    console.log("Papel X Tesoura = sistema ganhou");
} else if (inputUser === 3 && inputSistema === 1) {
    console.log("Tesoura X Pedra = sistema ganhou");
} else if (inputUser === 3 && inputSistema === 2) {
    console.log("Tesoura X Papel = usuário ganhou");
} else {
    console.log("Entrada inválida. Por favor, insira 1, 2 ou 3.");
}