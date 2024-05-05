// criando uma função que vai gerar os primeiros n elementos da sequência de Fibonacci
function fibonacci(n) {
    let sequenciaFibonacci = [1, 1]; 

    //para os próximos números da sequência
    for (let i = 2; i < n; i++) {
        sequenciaFibonacci[i] = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
    }

    return sequenciaFibonacci;
}

console.log("Os 10 primeiros elementos da sequência de Fibonacci são:");
const fibonacci10 = fibonacci(10);
console.log(fibonacci10.join(", ")); 
