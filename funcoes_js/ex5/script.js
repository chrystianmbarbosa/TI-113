/*Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros 
e armazene-os numa lista de números, considere as premissas abaixo:
Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
Não pode informar números negativos.
Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
Ao final do cadastro ele tem um outro menu pra escolher exibir: 
A lista cadastrada, somente os pares, ou somente os impares.*/

function lerNumero(tamanho) {
    let lista = [];
    //leitura de numeros
    for (let i = 0; i < tamanho; i++) {
        let numero = prompt(`Informe o ${i + 1}º  número:`);
        while (isNaN(numero) || parseInt(numero) < 0) {
            alert("Número inválido");
            numero = prompt(`Informe o ${i + 1}º  número novamente:`);
        }
        lista.push(parseInt(numero));
    }
    return lista;
}

function menuLeitura() {
    let sair = false;
    let listaNumeros = [];
    do {
        let opcao = prompt(`
        Informe abaixo quantos números você deseja cadastrar:
          A: 05 Números 
          B: 15 Números 
          C: 25 Números 
          D: 50 Números 
        `);

        opcao = opcao.toUpperCase();
        switch (opcao) {
            case "A":
                //leitura de numeros
                listaNumeros = lerNumero(5);
                sair = true;
                break;
            case "B":
                listaNumeros = lerNumero(15);
                sair = true;
                break;
            case "C":
                listaNumeros = lerNumero(25);
                sair = true;
                break;
            case "D":
                listaNumeros = lerNumero(50);
                sair = true;
                break;
            default:
                alert("Opção Inválida!");
                sair = false;
                break;
        }
    } while (!sair);

    sair = false;
    
    do {
        let opcao = prompt(`
            Informe abaixo quantos números você deseja exibir:
              1 - Todos os numeros da lista
              2 - Numeros Pares 
              3 - Numeros Impares 
              4 - Sair
            `);

        switch (opcao) {
            case '1':
                alert(listaNumeros.join(","));
                break;

            case '2':
                alert(listaNumeros.filter(num => (num % 2 == 0)));
                break;

            case '3':
                alert(listaNumeros.filter(num => (num % 2 == 1)));
                break;

            case '4':
                sair = true;
                break;

            default:
                alert("Opção Inválida!");
                break;
        }

    } while (!sair);

}
menuLeitura();
