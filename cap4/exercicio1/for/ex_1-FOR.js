let nomeFruta = document.getElementById("nomeFruta");
let quantFruta = document.getElementById("quantFruta");
let btRepetir = document.getElementById("btRepetir");
let outResposta = document.getElementById("outResposta");

btRepetir.addEventListener("click", function (){

    let fruta = "";
    
    for(let i=1; i <= quantFruta.value; i++){
        fruta = nomeFruta.value;
        outResposta.innerHTML += `${fruta} * `;
    }
})