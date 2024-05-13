const inventarioLojaA = {
    "blusas": 10,
    "calças": 5,
    "esmaltes": 8
};

const inventarioLojaB = {
    "blusas": 3,
    "casacos": 7,
    "esmaltes": 4
};

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};

    // adicionando os itens do inventário da loja A ao inventário combinado
    for (const itemA in inventarioLojaA) {
        inventarioCombinado[itemA] = inventarioLojaA[itemA];
    }

    // Adiciona itens do inventário da loja B ao inventário combinado ou soma as quantidades se o item já existir
    for (const itemB in inventarioLojaB) {
        if (inventarioCombinado[itemB]) {
            inventarioCombinado[itemB] += inventarioLojaB[itemB];
        } else {
            inventarioCombinado[itemB] = inventarioLojaB[itemB];
        }
    }

    return inventarioCombinado;
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));