
function lerNumero() {
    let listaNumeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = prompt("Informe um número");
        while (isNaN(numero)) {
            alert("O valor digitado não é um número!");
            numero = prompt("Informe um número");
        }
        listaNumeros.push(parseInt(numero));
    }
    return listaNumeros;
}

let lista = lerNumero();
alert(lista.join(","));