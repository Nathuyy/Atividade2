const prompt = require("prompt-sync")();

//declarando variaveis
let inputUser = 1
let somaValores = 0
let menorNumero
let totalInputs 
let totalPares = 0

//partindo para o Do-While, vai parar quando o user digitar zero
do {
    inputUser = parseInt(prompt("Insira um número: "));
    if (inputUser !== 0) {
        somaValores += inputUser;
        totalInputs++;

        if (menorNumero === undefined || inputUser < menorNumero) {
            menorNumero = inputUser;
        }

        if (inputUser % 2 === 0) {
            totalPares++;
        }
    }
} while (inputUser !== 0);

const media = somaValores / totalInputs;

console.log(`Soma dos Valores: ${somaValores}`);
console.log(`Menor valor digitado: ${menorNumero}`);
console.log(`Média: ${media}`);
console.log(`Total de pares: ${totalPares}`);