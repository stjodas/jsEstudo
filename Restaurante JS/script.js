function calculoComida() {
    var inPreco = document.getElementById("inPreco");
    var inConsumo = document.getElementById("inConsumo");
    var outConsumo = document.getElementById("outConsumo");
    var teste1 = document.getElementById("teste1");
    var teste2 = document.getElementById("teste2")

    var kilo = Number(inConsumo.value/1000);
    var preco = Number(kilo*inPreco.value);

    outConsumo.textContent = "Valor a pagar R$: " + preco.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculoComida);
