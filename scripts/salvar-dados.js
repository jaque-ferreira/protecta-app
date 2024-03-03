const btnEscolha = document.querySelectorAll(".btn-escolha");
const btnEscolhaInput = document.querySelectorAll(".btn-escolha input");
const btnFinalizar = document.querySelector("#finalizar");
let btnFinalizarLink = btnFinalizar.href;
let listaDeEscolhasUsuario = [];
let listaRecomendadoTeste = ["Tosse", "Febre", "Coriza", "Diarréia"];
let listaNaoRecomendadoTeste = ["Espirros"];

function detectarNecessidade() {
  let verificarArray = listaDeEscolhasUsuario.some((r) =>
    listaRecomendadoTeste.includes(r)
  );

  if (verificarArray) {
    btnFinalizar.setAttribute("href", "resultado-positivo.html");
  } else {
    btnFinalizar.setAttribute("href", "resultado-negativo.html");
  }
  console.log(listaDeEscolhasUsuario);
}

btnEscolhaInput.forEach(function (checkbox, ordem) {
  checkbox.addEventListener("change", function () {
    escolhaNome = btnEscolha[ordem].getAttribute("data-name");

    if (checkbox.checked) {
      listaDeEscolhasUsuario.push(escolhaNome);
    } else {
      listaDeEscolhasUsuario.pop(escolhaNome);
    }

    detectarNecessidade();
  });
});
