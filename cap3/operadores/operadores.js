/* 

-> OPERADORES RELACIONAIS

== 
    Igual
    Retorna verdadeiro caso os dados contenham o mesmo conteúdo
!=
    Diferente
    Retorna verdadeiro caso os dados contenham conteúdos diferentes
>
    Maior
    Pode ser utilizado para comparar números ou palavras
<
    Menor
    Também pode ser utilizado para comparar números ou palavras
>=
    Maior ou igual
<=
    Menor ou igual

Outros:
===
    Estritamente igual
!==
    Estritamente diferente

Estes dois comparam também o tipo de dado em análise.
Assim, '5' === 5 retorna falso; e '5' !== 5 retorna verdadeiro

-> OPERADORES LÓGICOS

!
    Not
    Indica negação
    Inverte o resultado de uma comparação
&&
    And
    Indica conjunção
    Retorna verdadeiro quando todas as comparações forem verdadeiras
||
    Or
    Indica disjunção
    Retorna verdadeiro se, no mínimo, uma das condições definidas for verdadeira

-> OPERADORES TERNÁRIOS

Consiste em realizar uma atribuição (=). 
O primeiro valor após a interrogação (?) é atribuído à varíavel caso a condição seja verdadeira
E o segundo, após os ":", caso a condição seja falsa

EX:

var categoria = idade >= 18 ? "Adulto" : "Juvenil";

? corresponde a "então"
: corresponde a "senão"

- só pode usar quando há duas condicionais
- substitui o if


*/