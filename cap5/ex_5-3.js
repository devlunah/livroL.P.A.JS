let inModelo_Carro = document.getElementById("inModelo_Carro");
let inPreco_Carro = document.getElementById("inPreco_Carro");
let btAdd_Carro = document.getElementById("btAdd_Carro");
let btListar_Carros = document.getElementById("btListar_Carros");
let btFiltrar_Carros = document.getElementById("btFiltrar_Carros");
let outCarros = document.getElementById("outCarros");

carros = [];

// função para adicionar carros na lista
btAdd_Carro.addEventListener("click", function(){
    let modelo = inModelo_Carro.value;
    let preco = Number(inPreco_Carro.value);
    carros.push({modelo: modelo, preco: preco});

    listarCarros();

})

console.log(carros)

// função para adicionar carros na lista
btListar_Carros.addEventListener("click", function listarCarros(){

    let lista = ""
    outCarros.textContent = lista

    
})

// função para filtrar carros por preço
btFiltrar_Carros.addEventListener("click", function(){
    let maximo = prompt("Qual o valor máximo que o cliente deseja pagar?");



})