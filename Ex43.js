function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    // Adiciona as propriedades de obj1 ao novo objeto usando o ForIn
    for (let propriedade in obj1) {
        novoObjeto[propriedade] = obj1[propriedade];
    }

    // Adiciona ou sobrescreve as propriedades de obj2 ao novo objeto usando o ForIN
    for (let propriedade in obj2) {
        novoObjeto[propriedade] = obj2[propriedade];
    }

    return novoObjeto;
}

const obj1 = { ex1: 10, ex2: 2, ex3: 3 };
const obj2 = { ex2: 4, ex3: 5, ex4: 6 };

let objetoCombinado = combinarObjetos(obj1, obj2);

console.log("Objeto combinado:", objetoCombinado);
