const prompt = require("prompt-sync")();

const horarios = [];

for (let i = 0; i < 5; i++) {
    let horario = prompt(`Digite o ${i+1}º horário (HH.MM.SS):`);
    while (!/^([01]?[0-9]|2[0-3])\.[0-5][0-9]\.[0-5][0-9]$/.test(horario)) {
        horario = prompt(`Horário inválido. Digite novamente o ${i+1}º horário (HH.MM.SS):`);
    }
    horarios.push(horario);
}

console.log("\nHorários válidos:");
horarios.forEach(horario => console.log(horario));
