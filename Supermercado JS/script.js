function calcularTempo() {
    let inProduto = document.getElementById("inProduto").value;
    let inValor = document.getElementById("inValor").value;
    let outProduto = document.getElementById("outProduto");
    let outPromocao = document.getElementById("outPromocao");

    let terceiroProduto = Number(inValor)/2;
    let somaProdutos = terceiroProduto + Number(inValor);
    
    outProduto.textContent = inProduto + " - Promoção: Leve 3 por R$: " + somaProdutos.toFixed(2);
    outPromocao.textContent = "O 3º produto custa apenas R$: " + terceiroProduto.toFixed(2);
}

    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcularTempo);