function helloClick() {
    console.log("Hello World!");
}

function nameClick(nome) {
    console.log(`Olá ${nome}`);
}

nameClick(prompt("Escreva um nome:"));

function numberDouble(number) {
    console.log(number * 2);
}

numberDouble(prompt("Digite um número:"));

function numberMedia(n1, n2, n3) {
    console.log((n1 + n2 + n3) / 3);
}

numberMedia(4, 5, 6)

function maxNumber(n1, n2) {
    console.log(Math.max(n1, n2));
}

maxNumber(5, 10);

function multiNumber(n1) {
    console.log(n1*n1);
}

multiNumber(2);