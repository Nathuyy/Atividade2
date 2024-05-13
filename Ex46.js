function sumarizarVendasPorVendedor(vendas) {
    let sumario = {}; //cria um novo objeto
    for (let i = 0; i < vendas.length; i++) {
        let venda = vendas[i];
        let vendedor = venda.vendedor;// acessa os valores no objeto
        let valor = venda.valor; // acessa os valores no objeto
        if (sumario[vendedor]) {
            sumario[vendedor] += valor; //soma
        } else {
            sumario[vendedor] = valor;
        }
    }
    return sumario;
}

// Exemplo de uso:
const vendas = [
    { vendedor: 'nathy', valor: 600 },
    { vendedor: 'sofia', valor: 850 },
    { vendedor: 'jaques', valor: 555 },
    { vendedor: 'pedro', valor: 120 },
    { vendedor: 'gabriel', valor: 180 }
];
const resultado = sumarizarVendasPorVendedor(vendas);
console.log(resultado);
