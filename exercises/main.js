// function helloClick() {
//     console.log("Hello World!");
// }

// function nameClick(nome) {
//     console.log(`Olá ${nome}`);
// }

// nameClick(prompt("Escreva um nome:"));

// function numberDouble(number) {
//     console.log(number * 2);
// }

// numberDouble(prompt("Digite um número:"));

// function numberMedia(n1, n2, n3) {
//     console.log((n1 + n2 + n3) / 3);
// }

// numberMedia(4, 5, 6)

// function maxNumber(n1, n2) {
//     console.log(Math.max(n1, n2));
// }

// maxNumber(5, 10);

// function multiNumber(n1) {
//     console.log(n1*n1);
// }

// multiNumber(2);

function calculateIMC(altura, peso) {
    let alturaCm = altura / 100;
    resultado = peso / alturaCm**2;
    console.log(`O IMC é ${resultado.toFixed(2)}`);
}

calculateIMC(180, 102);

function factorialFun(numero) {
    valor = 1;
    contador = 1;
    while (contador <= numero) {
        valor *= contador;
        contador++;
    }
    console.log(`O fatorial de ${numero} é ${valor}`);
}

factorialFun(5);

function dollarToReal(dollar) {
    valorDollar = dollar;
    console.log(`O valor em dólar é ${parseFloat(valorDollar*4.80)}`);
}

dollarToReal(5);

function areaPerimetro(largura, altura) {
    area = largura * altura;
    console.log(`A área é ${parseFloat(area)}`);
    perimetro = 2 * (largura + altura);
    console.log(`O perímetro é ${parseFloat(perimetro)}`);
}

areaPerimetro(5, 3);

function raioSala(raio) {
    pi = 3.14;
    area = parseFloat(pi * raio**2);
    console.log(area);
    perimetro = parseFloat(2 * pi * raio);
    console.log(perimetro.toFixed(1));
}

raioSala(5)

function tabelaTabuada(numero) {
    contador = 1;
    while (contador < 11) {
        resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador ++;
    }
}

tabelaTabuada(2)