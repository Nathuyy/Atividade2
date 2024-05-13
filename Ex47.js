function aplicarFuncaoEmPropriedades(objeto, funcao) {
    const novoObjeto = {}; //cria um novo objeto
    
    // itera sobre as propriedades do objeto usando o ForOf
    for (const [chave, valor] of Object.entries(objeto)) {
        novoObjeto[chave] = funcao(valor); //aramazena
    }
    
    return novoObjeto;
}
