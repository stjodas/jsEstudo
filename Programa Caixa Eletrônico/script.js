function caixaEletronico() {
    const saque = document.getElementById("inSaque").value;
    const notas200 = document.getElementById("outNotas200");
    const notas100 = document.getElementById("outNotas100");
    const notas50 = document.getElementById("outNotas50");
    const notas20 = document.getElementById("outNotas20");
    const notas10 = document.getElementById("outNotas10");
    const notas5 = document.getElementById("outNotas5");
    const notas2 = document.getElementById("outNotas2");

    let valorTotal = Number(saque);


    if(valorTotal == 0 || isNaN(valorTotal)){
        alert("Digite um valor válido")
    }

    // calcular notas de 100 50 10
    let notaDuzentos = Math.floor(valorTotal / 200);
    let resto = valorTotal % 200;
    let notaCem = Math.floor(resto / 100);
    resto = resto % 100; 
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasVinte = Math.floor(resto / 20);
    resto = resto % 20;
    let notasDez = Math.floor(resto / 10);
    resto = resto % 10
    let notasCinco = Math.floor(resto / 5);
    resto = resto % 5;
    let notasDois = Math.floor(resto / 2);
    resto = resto % 2;

    if(notaDuzentos > 0) {
        notas200.textContent = "Notas de R$ 200: " + notaDuzentos;
    }

    if(notaCem > 0) {
        notas100.textContent = "Notas de R$ 100: " + notaCem;
    } 

    if (notasCinquenta > 0) {
        notas50.textContent = "Notas de R$ 50: " + notasCinquenta;
    }

    if(notasVinte > 0) {
        notas20.textContent = "Notas de R$ 20: " + notasVinte
    }

    if (notasDez > 0) {
        notas10.textContent = "Notas de R$ 10: " + notasDez;
    }

    if(notasCinco > 0) {
        notas5.textContent = "Notas de R$ 5: " + notasCinco;
    }

    if(notasDois > 0) {
        notas2.textContent = "Notas de R$ 2: " + notasDois;
    }

}

const btn = document.getElementById("btnShow");
btn.addEventListener("click", caixaEletronico);