function calcularVelocidade() {
    const permitida = document.getElementById("inPermitida").value;
    const velocidade = document.getElementById("inCondutor").value;
    const multa = document.getElementById("outMulta");
    const calculo = document.getElementById("calculo")

    let radar = Number(permitida);
    let medicao = Number(velocidade);
    let medicaoLeve = (radar / 100) * 20 + radar;

    if (isNaN(medicao) || medicao <= 0 ) {
        alert("Digite uma velocidade válida!")
    }


    if(medicao <= radar) {
        multa.textContent = "Velocidade de " + medicao + "Km/hr \n Sem multa"
    } else if (medicao < medicaoLeve){
        multa.textContent = "Velocidade de " + medicao + "Km/hr \n Multa Leve"
    } else if (medicao >= medicaoLeve ) {
        multa.textContent = "Velocidade de " + medicao + "Km/hr \n Multa Grave"
    }
}

const btnVelocidade = document.getElementById("btnVelocidade");
btnVelocidade.addEventListener("click", calcularVelocidade);