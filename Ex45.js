function contarStrings(array) {
    let objeto = {}; //cria o novo objeto
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        if (objeto[string]) {
            objeto[string]++;
        } else {
            objeto[string] = 1;
        }
    }
    return objeto;
}

const array = ["nathalia", "nathalia", "sofia", "sofia", "sofia", "gabriel", "gabriel", "gabriel", "eliane"];
const resultado = contarStrings(array);
console.log(resultado);
