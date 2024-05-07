let A = [
    [1, 6, 3, 49, 5],
    [1, 6, 3, 49, 5],
    [1, 6, 3, 49, 5],
];

let B = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];

let P = [];

for (let i = 0; i < 3; i++) {
    let linhaProduto = [];
    for (let j = 0; j < 5; j++) {
        linhaProduto.push(A[i][j] * B[i][j]);
    }
    P.push(linhaProduto);
}

// Mostrar a matriz produto P
console.log("Matriz Produto P:");
for (let linha of P) {
    console.log(linha);
}