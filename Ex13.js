function preencherFibonacci(vetor, tamanho) {
    let num1 = 0;
    let num2 = 1;

    vetor[0] = num1;
    vetor[1] = num2;

    // Preencher o restante do vetor usando a sequência de Fibonacci
    for (let i = 2; i < tamanho; i++) {
        // calculo do próximo número na sequência de Fibonacci
        let nextNum = num1 + num2;
        // Atualiza os números anteriores para os próximos cálculos
        num1 = num2;
        num2 = nextNum;
        // Adiciona o próximo número ao vetor
        vetor[i] = nextNum;
    }
}

let fibonacci = new Array(15);

preencherFibonacci(fibonacci, 15);

console.log(fibonacci);
