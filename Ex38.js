const prompt = require("prompt-sync")();

let vetor = [];

//pedindo o vetor ao user:
for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Insira o seu número: "));
    vetor.push(num);
}


//printando o menu de opções:
console.log("Menu:\n1- soma dos elementos;\n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor. ");
let variavel = parseInt(prompt("Insira sua opção da variável indentificadora do menu: "));


switch (variavel) {
    case 1:
        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]            
        }
        console.log("Soma: " + soma);
        break;
    case 2:
        let produto = 1; //inicia em 1 pq daria erro multiplicando por zero
        for (let i = 0; i < vetor.length; i++) {
            produto *= vetor[i];            
            
        }
        console.log("Produto: " + produto);
        break;
    case 3:
        let total = 0;
        for (let i = 0; i < vetor.length; i++) {
            total += vetor[i];            
        }
        let media = total / vetor.length;
        console.log("Média: " + media);
        break;

    case 4: 
        let vetorOrdenado = vetor.sort();
        console.log("Vetor Ordenado: " + vetorOrdenado);
        break;
    case 5:
        console.log(vetor);
    default:
        console.log("INSIRA UMA OPÇÃO VÁLIDA");
        break;
}