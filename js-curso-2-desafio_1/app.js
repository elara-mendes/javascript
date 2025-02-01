let title = document.querySelector('h1');
title.innerHTML = "Hora do Desafio";

function testeConsole() {
    console.log("O botão foi clicado.");
}

function testeAlert() {
    alert("I love JS");
}

function testePrompt() {
    let cidade = prompt("Qual a sua cidade?");
    alert(`Estive em sua ${cidade} e não te visitei.`)
}

function testeSoma() {
    let n1 = Number(prompt("Digite um número:"));
    let n2 = Number(prompt("Digite outro número:"));
    alert(`${n1} + ${n2} é igual a ${n1 + n2}`);
}