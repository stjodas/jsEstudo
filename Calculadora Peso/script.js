function calcularPeso() {
    let inName = document.getElementById("inNome").value;
    let inMasculino = document.getElementById("inMasculino");
    let inFeminino = document.getElementById("inFeminino");
    let inAltura = document.getElementById("inAltura").value;
    let outPeso = document.getElementById("outPeso");

    let nome = inName;
    let masculino = inMasculino.checked;
    let feminino = inFeminino.checked;
    let altura = Number(inAltura);

    if(nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, infome o nome e selecione o sexo...")
        inName.focus();
        return;
    }

    if(altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    if(masculino) {
        let peso = 22 * Math.pow(altura, 2); //math pow eleva ao quadrado
        outPeso.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " Kg";
    } else {
        let peso = 21 * Math.pow(altura, 2); 
        outPeso.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " Kg";
    }

    
}

function limparCampos() {
   location.reload();
   //posiicona (joga o foco) no elemento inNome;
   document.getElementById("inNome").focus();
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);