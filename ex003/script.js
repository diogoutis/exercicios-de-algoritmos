const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nomeFuncionario = document.getElementById("nome-funcionario").value;
    const salarioFuncionario = document.getElementById("salario-funcionario").value;
    const mensagem = document.getElementById("mensagem");
    let mes;

    switch (new Date().getMonth())  {
        case 0:
            mes = "janeiro"
            break;
        case 1: 
            mes = "fevereiro"
            break;
        case 2:
            mes = "março"
            break;
        case 3:
            mes = "abril"
            break;
        case 4: 
            mes = "maio"
            break;
        case 5:
            mes = "junho"
            break;
        case 6: 
            mes = "julho"
            break;
        case 7:
            mes = "agosto"
            break;
        case 8:
            mes = "setembro"
            break;
        case 9:
            mes = "outubro"
            break;
        case 10:
            mes = "novembro"
            break
        case 11:
            mes = "dezembro"
            
    }


    if (nomeFuncionario.trim() === "" || salarioFuncionario.trim() === "" ) {
        mensagem.innerText = "PREENCHA OS DADOS!";
    } else {
        mensagem.innerText = `${nomeFuncionario} tem um salário de ${Number(salarioFuncionario).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em ${mes}.`; 
    }

})