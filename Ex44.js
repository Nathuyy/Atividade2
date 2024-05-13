const objeto = {
    numero: 654654,
    array: ["asdasd", "abcde"],
    fala: "isso é uma string",
    alfabeto: "abcdefghijklm..."
}

function contarStrings(objeto) {
    let contador = 0;
    for (let chave in objeto) {
        if (typeof objeto[chave] === 'string') {
            contador++;
        }
    }
    return contador;
}

console.log(contarStrings(objeto));