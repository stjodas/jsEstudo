function calcularMedia() {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nome = document.getElementById("nome").value;

    let notaMedia = document.getElementById("notaMedia");
    let resultado = document.getElementById("resultado");

    let notaOut1 = Number(nota1);
    let notaOut2 = Number(nota2);
    
    let calculoMedia = (notaOut1 + notaOut2)/2; 

    notaMedia.textContent = "Média das Notas: " + calculoMedia;

    if(notaMedia >= 7) {
        resultado.textContent = "Parábens " + nome + "! Você foi aprovado(a)!"
        resultado.style.color= "blue";
    } else {
        resultado.textContent = "Infelzimente  " + nome + "! Você foi repovado(a)!";
        resultado.style.color = "red";
    }

}

let btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", calcularMedia);