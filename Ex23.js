function criarMatriz(dimensao) {
    let matriz = []
    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {

            if (i === j) {
                matriz[i][j] = 1; //diagonal = 1
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    for (let i = 0; i < dimensao; i++) {
        console.log(matriz[i].join(' '));
    }
}



criarMatriz(7)