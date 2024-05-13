//array de transações gerado pelo chatGPT como exemplo para gerar o código: 
const transacoes = [
    { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
    { id: 2, valor: 50, data: "2024-05-02", categoria: "Transporte" },
    { id: 3, valor: 200, data: "2024-05-03", categoria: "Alimentação" },
    { id: 4, valor: 150, data: "2024-05-04", categoria: "Transporte" },
    { id: 5, valor: 120, data: "2024-05-05", categoria: "Outros" }
];

function categorizarTransacoes(transacoes) {
    const transacoesCategorizadas = {}; //cria objeto para deixar armazenadas as transações categorizadas

    // Itera sobre as transações usando  o FOREACH
    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        // Se a categoria ainda não existir no objeto, inicializa um array vazio para ela
        if (!transacoesCategorizadas[categoria]) {
            transacoesCategorizadas[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        transacoesCategorizadas[categoria].transacoes.push(transacao);

        transacoesCategorizadas[categoria].subtotal += valor;
    });

    return transacoesCategorizadas;
}

console.log(categorizarTransacoes(transacoes));