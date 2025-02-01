// let title = document.querySelector("h1");
// title.innerHTML = "Jogo do Número Secreto";

// let paragraph = document.querySelector("p");
// paragraph.innerHTML = "Escolha um número entre 1 e 10";

let secretNumber = randomNumber();

showText('h1', 'Jogo do Número Secreto');
showText('p', 'Escolha um número entre 1 e 10'); 

function showText(tag, text) {
    let Element = document.querySelector(tag);
    Element.innerHTML = text;
}

function randomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    kick = document.querySelector('input').value;
    console.log(kick == secretNumber);
}