const prompt = require("prompt-sync")();

//array para armazenar as infos
const hoteis = [];
const reservas = [];

//função para criar o objeto de hotel
function Hotel(id, nome, cidade, totalQuartos, quartosDisponiveis) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.totalQuartos = totalQuartos;
    this.quartosDisponiveis = quartosDisponiveis;
}

//função para criar o objeto de reserva
function Reserva(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
}

console.log("Menu de ações:\n1- Adicionar hotel;\n2- Buscar hotéis por cidade;\n3- Fazer reserva;\n4- Cancelar reserva;\n5- Listar reservas");

function adicionarHotel() {
    console.log("Por favor, insira as informações do hotel:");
    const id = hoteis.length + 1; // gerar o ID do hotel
    const nome = prompt("Insira o nome do hotel: ");
    const cidade = prompt("Insira a cidade que o hotel fica localizado: ");
    const totalQuartos = prompt("Insira o total de quartos do hotel: ");
    const quartosDisponiveis = prompt("Insira quantos quartos estão disponíveis no hotel: ");

    const novoHotel = new Hotel(id, nome, cidade, totalQuartos, quartosDisponiveis);
    hoteis.push(novoHotel);

    console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade() {
    const cidade = prompt("Insira a cidade para buscar os hotéis: ");
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
    if (hoteisNaCidade.length === 0) {
        console.log("Falha ao encontrar hotel na cidade " + cidade);
    } else {
        console.log("Hotéis encontrados na cidade de " + cidade + ":");
        hoteisNaCidade.forEach(hotel => console.log(hotel));
    }
}

function fazerReserva() {
    console.log("Por favor, insira as informações para fazer a reserva: ");
    const idReserva = reservas.length + 1; // gerar um ID único
    const idHotel = prompt("Insira o ID do hotel: ");
  
    const hotel = hoteis.find(hotel => hotel.id == idHotel);
    if (!hotel) {
        console.log("Hotel não encontrado.");
        return;
    }
  
    if (hotel.quartosDisponiveis > 0) {
        const nomeCliente = prompt("Insira o nome do cliente: ");
        const novaReserva = new Reserva(idReserva, idHotel, nomeCliente);
        reservas.push(novaReserva);
        hotel.quartosDisponiveis--;
        console.log("Reserva feita com sucesso!");
    } else {
        console.log("Desculpe, não há quartos disponíveis neste hotel.");
    }
}

function cancelarReserva() {
    console.log("Por favor, insira o ID da reserva que deseja cancelar: ");
    const idReserva = parseInt(prompt("ID da reserva: "));

    const reservaCancelada = reservas.find(reserva => reserva.idReserva === idReserva);
    const hotel = hoteis.find(hotel => hotel.id === reservaCancelada.idHotel);
   
    reservas.splice(reservas.indexOf(reservaCancelada), 1);
    hotel.quartosDisponiveis++;
    console.log("Reserva cancelada com sucesso!");
}

function listarReservas() {
    console.log("Listagem de Reservas:");
    reservas.forEach(reserva => {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log("ID Reserva:", reserva.idReserva);
        console.log("Nome do Cliente:", reserva.nomeCliente);
        console.log("Hotel:", hotel.nome);
        console.log("Cidade:", hotel.cidade);
        console.log("------------------------------");
    });
}

while (true) {
    const opcao = parseInt(prompt("Escolha uma opção: "));
    switch (opcao) {
        case 1:
            adicionarHotel();
            break;
        case 2:
            buscarHoteisPorCidade();
            break;
        case 3:
            fazerReserva();
            break;
        case 4: 
            cancelarReserva();
            break;
        case 5: 
            listarReservas() 
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}
