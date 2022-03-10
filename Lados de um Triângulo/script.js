function triangulo() {
    const a = document.getElementById("inLadoA").value;
    const b = document.getElementById("inLadoB").value;
    const c = document.getElementById("inLadoC").value;
    const outTriangulo = document.getElementById("outTriangulo");
    const outTipo = document.getElementById("outTipo");
    const equilatero = document.getElementById("equilatero");
    const isoceles = document.getElementById("isoceles");
    const escaleno = document.getElementById("escaleno");


    let ladoA = Number(a);
    let ladoB = Number(b);
    let ladoC = Number(c);

    
    if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
        outTriangulo.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Equilátero: 3 Lados iguais";
            if(equilatero.style.display = "none"){
                equilatero.style.display= 'inline-block';
                isoceles.style.display ='none';
                escaleno.style.display = 'none';
            }
    }else  if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        outTriangulo.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Isósceles: 2 Lados iguais";
            if(isoceles.style.display ='none'){
                isoceles.style.display ='inline-block';
                equilatero.style.display = "none"
                escaleno.style.display = 'none';
            }
    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        outTriangulo.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Escaleno: 3 lados diferentes";
            if(escaleno.style.display = 'none'){
                escaleno.style.display = 'inline-block';
                equilatero.style.display = "none"
                isoceles.style.display ='none';
            }
    }

   
}

const btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", triangulo);