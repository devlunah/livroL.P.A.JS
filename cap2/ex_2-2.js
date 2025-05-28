
let btConversao = document.getElementById("btConversao");
let nome_filme = document.getElementById("nome_filme");
let duracao_filme = document.getElementById("tempo_filme");
let resultado = document.getElementById("outResultado");

btConversao.addEventListener("click", function(){
    let tempoHoras = 60

    let totalHoras = Math.floor(duracao_filme.value / tempoHoras);
    let tempoMin = duracao_filme.value % tempoHoras;

    resultado.innerHTML = `${nome_filme.value} <br> ${totalHoras} hora(s) e ${tempoMin} minuto(s)`;
})
