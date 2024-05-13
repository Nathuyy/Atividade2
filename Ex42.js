let dados = {
    nome: "Nathy",
    idade: 18,
    numeros: [1, 2, 3, 4],
    frase: "Olá, mundo!",
    cores: ["vermelho", "verde", "azul"],
    interesses: ["esportes", "música", "viagem"]
};


//função usando ForIn que filtra somente os arrays
function filtrarArray(objeto) {
    let novoObjeto = { }
    for (let chave in objeto) {
        if(Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave]
        }
    }
    return novoObjeto
}

console.log(filtrarArray(dados));