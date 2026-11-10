// Selecionando os elementos do HTML
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const area = document.getElementById("area");
const resultado = document.getElementById("resultado");

const botaoOrientacao = document.getElementById("botaoOrientacao");
const botaoTema = document.getElementById("botaoTema");

// Função para gerar a orientação
function gerarOrientacao() {

// Captura o nome digitado
const nomeUsuario = nome.value.trim();

// Captura a área escolhida
const areaEscolhida = area.value;

// Verifica se o nome está vazio
if (nomeUsuario === "") {

resultado.textContent = "Por favor, informe seu nome para continuar.";

resultado.classList.remove("mensagem-sucesso");
resultado.classList.add("mensagem-erro");

resultado.style.display = "block";

return;
}

// Verifica se uma área foi selecionada
if (areaEscolhida === "") {

resultado.textContent = "Por favor, escolha uma área de interesse.";

resultado.classList.remove("mensagem-sucesso");
resultado.classList.add("mensagem-erro");

resultado.style.display = "block";

return;
}

// Define a orientação conforme a área escolhida
let mensagem = "";

switch (areaEscolhida) {

case "html":

mensagem = "Comece aprendendo a estruturar páginas, utilizar tags semânticas, formulários, links e imagens.";

break;

case "css":

mensagem = "Continue praticando cores, espaçamentos, Flexbox, Grid, animações e responsividade.";

break;

case "javascript":

mensagem = "Explore variáveis, condições, funções, eventos e manipulação do DOM para criar páginas interativas.";

break;

default:

mensagem = "Área de interesse inválida.";

}

// Exibe a mensagem personalizada
resultado.textContent = `Olá, ${nomeUsuario}! ${mensagem}`;

// Aplica o estilo de sucesso
resultado.classList.remove("mensagem-erro");
resultado.classList.add("mensagem-sucesso");

resultado.style.display = "block";

}

// Evento de clique do botão de orientação
botaoOrientacao.addEventListener("click", gerarOrientacao);

// Evento de clique do botão de tema
botaoTema.addEventListener("click", function() {

document.body.classList.toggle("tema-claro");

});