const telas = document.querySelectorAll(".tela");
const btns = document.querySelectorAll(".btn-avaliacao");

function resetClassTelas() {
  telas.forEach(function (tela) {
    tela.classList.remove("atual");
  });
}

btns.forEach(function (botao) {
  botao.addEventListener("click", function (elemento) {
    elemento.preventDefault();
    linkTela = botao.getAttribute("href");
    resetClassTelas();
    document.querySelector(linkTela).classList.add("atual");
  });
});
