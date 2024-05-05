const prompt = require("prompt-sync")();

//escolha do número random entre 1 e 5
let num = Math.floor(Math.random() * 5) + 1; 

let inputUser = parseInt(prompt("Tente adivinhar o número: "));

//entra no loop até acertar o número
while(num !== inputUser) {

    if(inputUser > num) {
        console.log("número maior que o sorteado");
        inputUser = parseInt(prompt("Tente adivinhar o número: "));

        
    } else if (inputUser < num) {
        console.log("número menor que o sorteado");
        inputUser = parseInt(prompt("Tente adivinhar o número: "));

    }

}

console.log(num);

