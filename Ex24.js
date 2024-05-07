
let M = [
    [1, -6, -5, 5, -8, 7],
    [1, -6, -5, 5, -8, 7],
    [1, -6, -5, 5, -8, 7],
    [1, -6, -5, 5, -8, 7],
    [1, -6, -5, 5, -8, 7]
];

let vetorC = [];

// contar elementos negativos
for (let linha of M) {
    let contador = 0;
    for (let elemento of linha) {
        if (elemento < 0) {
            contador++;
        }
    }
    vetorC.push(contador);
}

console.log("Vetor C:", vetorC);
