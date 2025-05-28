// pegando os elementos HTML
let inNumero = document.getElementById('inNumero'); // n° inserido pelo usuário
let outErros = document.getElementById('outErros'); // n° de erros
let outChances = document.getElementById('outChances'); // n° de chances restantes
let outDica = document.getElementById('outDica'); // dicas para ajudar o usuário
let btApostar = document.getElementById('btApostar');
let btJogar = document.getElementById('btJogar');

// definição da lista que irá armazenar as tentativas de erros
let erros = [];

// definição do numero aleatório
let min = 1;
let max = 100;
let numSorteado = Math.floor(Math.random() * (max - min) + min);
console.log(numSorteado);

// definição da quantidade de chances
let chances = 6;

// função para fazer a verificação da aposta do usuário
btApostar.addEventListener("click", function(){

    // pegar o n° inserido pelo usuário e armazenar em uma variável, 
    // convertendo string em number
    let numero = Number(inNumero.value);

    // primeira verificação:
    // verificar se oq o usuário inseriu não está entre 1 e 100, 
    // ou se não é um número
    if (numero <= 0 || numero > 100 || isNaN(numero)){
        alert("Informe um número válido...");
        return;
    }

    // segunda verificação:
    // verificar se o n° inserido é IGUAL ao número sorteado
    if (numero == numSorteado){
        alert("Parabéns! Você acertou :)");
        btApostar.disabled = true; // desabilitar o botão Apostar
        btJogar.className = "exibe"; // exibir o botão Jogar Novamente
        outDica.innerHTML = `Parabéns! Número sorteado: ${numSorteado}`;
    } 
    // se não for igual:
    else {
        // terceira verificação:
        // verificar se o número inserido já foi armazenado dentro do vetor/array,
        // ou seja, o usuário já tentou esse número
        if (erros.indexOf(numero) >= 0){
            alert(`Você já apostou o número ${numero}. Tente outro...`);

        } 
        else{
            // adicionar número inserido ao final do vetor
            erros.push(numero);

            // variável para armazenar a quantidade de valores dentro do array,
            // para saber quantos erros já foram cometidos
            let numErros = erros.length;

            // variável para armazenar a quantidade de chances já usadas, baseado
            // na quantidade de chances inicial (6) - os erros cometidos,
            // para saber quantas chances ainda restam
            let numChances = chances - numErros;

            outErros.innerHTML = numErros + " (" + erros.join(", ") + ")";
            outChances.innerHTML = numChances;

            // quarta verificação: 
            // se as chances acabarem, sinalizar ao usuário e 
            // desabilitar o botão Apostar
            if(numChances == 0){
                alert("Suas chances acabaram :(");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.innerHTML = `Game over! Número sorteado: ${numSorteado}`
            } 
            // se não acabaram as chances:
            // dar uma dica ao usuário -
            // se o número inserido for menor que o número sorteado,
            // dizer para ele tentar um número maior
            // se o número inserido for maior que o número sorteado,
            // dizer para ele tentar um número menor
            else{
                let dica = numero < numSorteado ? "maior" : "menor";
                outDica.innerHTML = `Dica: Tente um número ${dica} que ${numero}`;
            }

        }

    }
})

// função para atualizar a página através do botão Jogar Novamente
btJogar.addEventListener("click", function(){
    location.reload();
})
