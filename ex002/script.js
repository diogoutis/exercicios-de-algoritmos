const formulario = document.getElementById("meu-formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const boasVindas = document.getElementById("boas-vindas");

    if (nome.trim() === "") {
        boasVindas.innerText = "POR FAVOR, DIGITE SEU NOME!";
    } else {
        boasVindas.innerText = `Olá, ${nome}, é um prazer te conhecer!`
    }
});
