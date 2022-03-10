function calcularTempo() {
   let inValor = document.getElementById("inValor").value;
   let inTempo = document.getElementById("inTempo").value;
   let outValor = document.getElementById("outValor");
   let fracao1 = document.getElementById("fracao");
   let total = document.getElementById("total");

   let tempoUso = inTempo / 15;
   let fracao = inTempo % 15 / 15;
   let valorUso = (tempoUso + fracao) * Number(inValor);
   
    total.textContent = "Valor a Pagar R$: " + Math.ceil(valorUso).toFixed(2);
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click",calcularTempo);