/* 
Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro de nomes 
e salários bruto de até 50 pessoas, e ao final, mostre os nomes, 
salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar.
*/

function lerNomesSalarios(nomes = [], salarios = []) {

    let continuar = false;
    let contador = 0;
    do {
        contador++;
        let nome = prompt("Informe um Nome:");
        while (isNaN(nome) === false || nome.trim() == '') {
            alert("Nome Inválido");
            nome = prompt("Informe um Nome novamente:");
        }
        nomes.push(nome);

        let salario = prompt("Informe um Salário:");
        while (isNaN(salario)) {
            alert("Salário Inválido");
            salario = prompt(`Informe o sálario de ${nome} novamente:`);
        }
        salarios.push(parseFloat(salario));

        if (contador < 50) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else {
            continuar = false;
        }

    } while (continuar == true);

}

function exibirNomesSalarios(nomes = [], salarios = []) {
    const tamanhoLista = salarios.length;
    let mensagem = "";
    for (let i = 0; i < tamanhoLista; i++) {
        let inss = salarios[i] * (10/100);
        let salarioLiquido = salarios[i] - inss;
        mensagem += `
        Nome: ${nomes[i]} <br/>
        Salário Bruto: ${salarios[i].toFixed(2)} <br/>
        Salário Líquido: ${salarioLiquido.toFixed(2)}<br/>
        INSS: ${inss.toFixed(2)} <br/>
        <br/><br/>
        `;
    }
    document.write(mensagem);

}

let listaNomes = [];
let listaSalarios = [];

lerNomesSalarios(listaNomes, listaSalarios);
exibirNomesSalarios(listaNomes, listaSalarios);
