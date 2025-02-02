// let title = document.querySelector("h1");
// title.innerHTML = "Jogo do Número Secreto";

// let paragraph = document.querySelector("p");
// paragraph.innerHTML = "Escolha um número entre 1 e 10";

// let secretNumber = randomNumber();
let secretNumber = randomNumber();
let tentativas = 1;
let reiniciarBotao = document.getElementById("reiniciar");
let chutarBotao = document.getElementById("chutar");
console.log(secretNumber);

mensagemInicial();

function showText(tag, text) {
    let Element = document.querySelector(tag);
    Element.innerHTML = text;
}

function randomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let kick = document.querySelector('input').value;
    if (kick == secretNumber) {
        showText("h1", "Você acertou!");
        let palavraTentativa = (tentativas > 1) ? "tentativas" : "tentativa";
        showText("p", `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        reiniciarBotao.removeAttribute("disabled");
        chutarBotao.setAttribute("disabled", "true");
    } else if (kick > secretNumber) {
        showText("p", "O número é menor!");
    } else {
        showText("p", "O número é maior!");
    }
    tentativas ++;
    limparCampo();
    // console.log(kick == secretNumber);
}

function limparCampo() {
    kick = document.querySelector('input');
    kick.value = "";
}

function reiniciarJogo() {
    secretNumber = randomNumber();
    limparCampo();
    tentativas = 1;
    reiniciarBotao.setAttribute('disabled', "true");
    chutarBotao.removeAttribute("disabled");
    mensagemInicial();
}

function mensagemInicial() {
    showText('h1', 'Jogo do Número Secreto');
    showText('p', 'Escolha um número entre 1 e 10'); 
}