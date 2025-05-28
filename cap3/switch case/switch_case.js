/* 

-> SWITCH...CASE

É útil quando tivermos várias alternativas definidas a partir do conteúdo de uma varável

Sintaxe:

switch(variavel) {

    case "":
        comando;
        break;
    case "":
        comando;
        break;
    case "":
        comando;
        break;
    default:
        comando;
}

O comando switch inicia pela definição da variável que escolhe a condição a ser executada

Cada instrução case deve conter um valor de comparação (seguida por ":")

Os comandos devem ser finalizados por break

Caso haja uma comparação diferente das outras estabelecidas nas instruções case, 
o fluxo do programa direciona para a execução dos comandos inseridos na instrução default (que significa: por falta ou ausência)

*/