// Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

//pedindo imput para o user:

let cigarrosPorDia = parseInt(prompt("Insira o número de cigarros fumados por dia: ")); 
let anos = parseInt(prompt("Insira quantos anos você fuma: "))

//calculando o número de dias perdidos: 
let diasPerdidos = cigarrosPorDia * 10 * anos * 365 / 1440;

console.log("Número de dias perdidos: " + diasPerdidos);
