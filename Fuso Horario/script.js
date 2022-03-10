function calcularFuso() {
    let inHora = document.getElementById("inHora").value;
    let outHorario = document.getElementById("outHorario");

    let horario = Number(inHora);
    let horarioFranca = horario +5;

    if(inHora == "" || isNaN(inHora)){
        alert("Informe a hora no Brasil corretamente");
        return;
    }

    if (horarioFranca > 24) {
        horarioFranca = horarioFranca - 24;
    }

    outHorario.textContent = "Hora na França: " + horarioFranca.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularFuso);