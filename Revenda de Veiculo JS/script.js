function calculoDesconto() {
    var inVeiculo = document.getElementById("inVeiculo").value;
    var preco = document.getElementById("inPreco").value;
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcelas");
    var outVeiculo = document.getElementById("outVeiculo");
    var inParcelas = document.getElementById("inParcelas").value;


    var entrada = Number(preco/2);
    var parcela = Number(entrada/inParcelas);

    outVeiculo.textContent = "Promoção: " + inVeiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ Parcelas de " + inParcelas +"X R$: " + parcela.toFixed(2);


}



var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", calculoDesconto);