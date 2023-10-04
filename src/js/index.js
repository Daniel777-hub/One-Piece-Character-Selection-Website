const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

const gifs = [
    './src/imagens/tripulacao-chopper.gif',
    './src/imagens/tripulacao-zoro.gif',
    './src/imagens/tripulacao-luffy.gif',
    './src/imagens/tripulacao-nami.gif',
    './src/imagens/tripulacao-sanji.gif',
];

const duracoes = [
    2800,  
    2800,  
    2800,  
    2800,  
    2800, 
];

botoes.forEach((botao, indice) => {

    const srcOriginal = botao.querySelector('img').src;

    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");


        botao.querySelector('img').src = gifs[indice];


        setTimeout(function() {

            botao.querySelector('img').src = srcOriginal;
        }, duracoes[indice]);  
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}
