/*
Ex3: Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, 
e após verificar quantas vogais foram lidas e mostre somente consoantes no alert.
*/

function lerLetras() {
    let lista = [];
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma letra:");
        while (isNaN(letra) === false) {
            alert("O valor digitado não é uma letra!")
            letra = prompt("Informe uma letra novamente:");
        }
        lista.push(letra);
    }
    return lista;
}
function mostrarConsoantes(lista) {
    let contador = 0;
    let mensagem = "";
    for (let i = 0; i < lista.length; i++) {
        let vogais = ['a', 'e', 'i', 'o', 'u'];
        let letra = lista[i].toLowerCase();
        // se a letra está na lista de vogais, 
        // é uma vogal e retorna 'true'
        let ehVogal = vogais.includes(letra);
        if (ehVogal === true)
            contador++;
        else
            mensagem += lista[i] + "\n";
    }
    alert(mensagem + "\n Teve " + contador + " Vogais");
}

let listaLetras = lerLetras();
mostrarConsoantes(listaLetras);
