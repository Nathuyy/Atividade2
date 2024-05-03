// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")();

//pedindo input:
let velocidade = parseInt(prompt("Insira a sua velocidade em Km/h: "));

//condição para multa + preço da multa: 
if(velocidade > 80) {
    let multa = (velocidade - 80) * 5;
    console.log(`Valor da multa R$${multa}`);
} else {
    console.log("Velocidade aceita, sem multas");
}