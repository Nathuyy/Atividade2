let matrizV = [];
const tamanho = 30;

let numA = 30;

//preenchendo a matriz V
for (let linhas = 0; linhas < tamanho; linhas++) {
    matrizV[linhas] = [];
    for (let colunas = 0; colunas < tamanho; colunas++) {
        matrizV[linhas][colunas] = Math.floor(Math.random() * 100) + 1; // Gera números aleatórios entre 1 e 100
    }
}


//função para contar os valores iguais a A: 
function contarValoresIguais(numA, matrizV) {
let contador = 0;
    for(let linhas = 0; linhas < tamanho; linhas++) {
        for(let colunas = 0; colunas < tamanho; colunas++) {
            if (matrizV[linhas][colunas] === numA) {
                contador++
            }
        }
    }
    return contador;
}


//função para colocar os valores diferentes de A:
function criarMatrizX(numA, matrizV) {
    let matrizX = [];
    for (let linhas = 0; linhas < tamanho; linhas++) {
        matrizX[linhas] = []; // Inicializa uma nova linha
        for (let colunas = 0; colunas < tamanho; colunas++) {
            if (matrizV[linhas][colunas] !== numA) {
                matrizX[linhas][colunas] = matrizV[linhas][colunas];
            } else {
                matrizX[linhas][colunas] = ""; // Coloque um valor vazio para os elementos iguais a A
            }
        }
    }
    return matrizX;
}

let matrizX = criarMatrizX(numA, matrizV);


console.log(matrizV.flat());
console.log("Número de valores iguais a " + numA + " na matriz V: " + contarValoresIguais(numA, matrizV));
console.log("Matriz X (elementos diferentes de " + numA + "):");
console.log(matrizX.flat());


