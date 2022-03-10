function parOuImpar() {
    const inNumero = document.getElementById("inNumero").value;
    const outNumero = document.getElementById("outNumero");
    
    let numero = Number(inNumero);

    if(isNaN(numero)) {
        alert("Digite um número!!!")
    }

    if(numero % 2 == 0) {
        outNumero.textContent = "O número " + numero + " é par";
    } else {
        outNumero.textContent = "O número " + numero + " é impar"
    }
}

const btnNumber = document.getElementById("btnNumber");
btnNumber.addEventListener("click", parOuImpar);