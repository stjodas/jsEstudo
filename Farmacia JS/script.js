    function calcularPromocao() {
    var inMedicamento = document.getElementById("inMedicamento").value;
    var inPreco = document.getElementById("inPreco").value;
    var outMedicamento = document.getElementById("outMedicamento");
    var outValor = document.getElementById("outValor");

    var outPreco = Number(inPreco);
    var preco = Math.floor(outPreco)

    outMedicamento.textContent = "Promoção de " + inMedicamento;
    outValor.textContent = "Leve 2  por apenas R$: " + (preco*2).toFixed(2);


}

var btCalculo = document.getElementById("btCalculo");

btCalculo.addEventListener("click", calcularPromocao)
