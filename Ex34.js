let matrizOriginal = []

//gerando a matriz: 
for (let linhas = 0; linhas < 50; linhas++) {
    matrizOriginal[linhas] = [];
    for (let colunas = 0; colunas < 50; colunas++) {
        matrizOriginal[linhas][colunas] = Math.floor(Math.random() * 100); // Gera números aleatórios entre 1 e 100
    }
}

//multiplicando pelo elemento da diagonal da linha: 
for (let linhas = 0; linhas < 50; linhas++) {
    let elementoDiagonal = matrizOriginal[linhas][linhas]; // Elemento da diagonal principal da linha atual
    for (let colunas = 0; colunas < 50; colunas++) {
        matrizOriginal[linhas][colunas] *= elementoDiagonal; // Multiplica cada elemento da linha pelo elemento da diagonal principal
    }
}

console.log("Matriz após as multiplicacoes:");
for (let linhas = 0; linhas < 50; linhas++) {
    console.log(matrizOriginal[linhas].join("\t"));
}