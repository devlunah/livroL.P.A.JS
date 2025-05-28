
let medicamento = document.getElementById("medicamento");
let preco = document.getElementById("preco");
let btPromocao = document.getElementById("btPromocao");
let outResultado = document.getElementById("outResultado");

btPromocao.addEventListener("click", function(){

    let quantPromo = 2;
    let promocao = Math.floor(preco.value * quantPromo);

    outResultado.innerHTML = `Promoção de ${medicamento.value} <br> Leve 2 por apenas R$: ${promocao.toFixed(2)}`
})