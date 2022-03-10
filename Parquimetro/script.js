function parquimetro() {
    const entrada = document.getElementById("inValor").value;
    const outTempo = document.getElementById("outTempo");
    const outTroco = document.getElementById("outTroco");

    let deposito = Number(entrada).toFixed(2);
    let valorRapido = 1;
    let valorMedio = 1.75;
    let valorLongo = 3;
    let troco;

    valorRapido.toFixed(2);
    valorLongo.toFixed(2);

    if(deposito < valorRapido || isNaN(deposito)){
        alert("Valor insuficiente ou inválido")
    } 

    if(deposito < valorMedio) {
        troco = deposito - valorRapido;
        outTempo.textContent = "Tempo: 30 min"
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        if(troco === 0) {
            outTempo.textContent = "Tempo: 30 min";
            outTroco.textContent = "Não tem troco";
        }
    } else if (deposito < valorLongo) {
        outTempo.textContent = "Tempo: 45 min"
        troco = deposito - valorMedio;
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        if(troco === 0) {
            outTempo.textContent = "Tempo: 45 min";
            outTroco.textContent = "Não tem troco";
        }
    } else if (deposito >= 3) {
        troco = deposito - valorLongo;
        outTempo.textContent = "Tempo: 60 min"
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        if(troco === 0) {
            outTempo.textContent = "Tempo: 60 min";
            outTroco.textContent = "Não tem troco";
        }
    }
}

const btnDeposito = document.getElementById("btnDeposito");
btnDeposito.addEventListener("click", parquimetro);