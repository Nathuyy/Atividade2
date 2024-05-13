const prompt = require("prompt-sync")();

let vetorPar = [];
let vetorImpar = [];


//loop para pedir os 30 números
for (let i = 0; i < 30; i++) {
    let num = parseInt(prompt("Insira seu numero: "));
    
    if (num % 2 === 0) { //caso seja par armazena no vetorPar
        if (vetorPar.length === 5) { 
            console.log("Vetor de números pares está cheio:", vetorPar);
            vetorPar = []; // Inicia um novo vetor de números pares
        }
        vetorPar.push(num); 
    } else { //caso seja ímpar
        if (vetorImpar.length === 5) {
            console.log("Vetor de números ímpares está cheio:", vetorImpar);
            vetorImpar = []; // Inicia um novo vetor de números ímpares
        }
        vetorImpar.push(num);
    }
}

// Exibe os vetores restantes
console.log("Vetor de números pares restante:", vetorPar);
console.log("Vetor de números ímpares restante:", vetorImpar);
