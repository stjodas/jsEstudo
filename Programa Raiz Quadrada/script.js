function calcularRaiz() {
    let inNumero = document.getElementById("inNumero").value;
    let outCalculo = document.getElementById("outCalculo");

    let numero = Number(inNumero);

    if(inNumero == "" || isNaN(inNumero) || inNumero < 0){
        alert("Digite um número válido!");
        return;
    }

    let raiz = Math.sqrt(numero);

    if(raiz == Math.floor(raiz)){
        outCalculo.textContent = "Raiz: " + raiz;
    } else {
        outCalculo.textContent = "Não há raiz exata para " + numero;
    }
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRaiz);