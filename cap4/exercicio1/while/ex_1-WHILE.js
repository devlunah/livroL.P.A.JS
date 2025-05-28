let nomeFruta = document.getElementById("nomeFruta");
let quantFruta = document.getElementById("quantFruta");
let btRepetir = document.getElementById("btRepetir");
let outResposta = document.getElementById("outResposta");

btRepetir.addEventListener("click", function (){

    let i = 1;
    let fruta = "";
    
    while(i <= quantFruta.value){
        fruta = nomeFruta.value;
        outResposta.innerHTML += `${fruta} * `;
        i++;
    }
})