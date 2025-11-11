//🎯 Exercícios Práticos**

// Agora é sua vez! Resolva os exercícios abaixo:

//1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
let hora = 20;

if( hora < 12){
    console.log("Bom dia!")
} else if(hora < 18){
    console.log("Boa tarde!")
} else{
    console.log("Boa noite")
}


//2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
let mes = 12;

switch(mes){
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("fervereiro")
        break;
    case 3:
        console.log("março")
        break;
    case 4:
        console.log("abriul")
        break;
    case 5:
        console.log("mai")
        break;
    case 6:
        console.log("jun")
        break;
    case 7:
        console.log("jul")
        break;
    case 8:
        console.log("ago")
        break;
    case 9:
        console.log("set")
        break;
    case 10:
        console.log("out")
        break;
    case 11:
        console.log("nov")
        break;
    case 12:
        console.log("dez")
        break;
}


//3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
let idade = 19;

if(idade < 18){
    console.log("Não pode dirigir!")
} else(
    console.log("Pode dirigir, meu nobre!")
)

//4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
let dinheiro = 0;
let saldo = dinheiro > 0?"Saldo positivo!":"Saldo negativo, seu poble!";
console.log(saldo);

//5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
let numero = -1;
if(numero > 0){
    console.log("Positivo");
} else if(numero < 0){
    console.log("Negativo");
} else{
    console.log("Zero")
}
//6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

let opcao = 2;

switch(opcao){
    case 1:
        console.log("Sacar");
        break;
    case 2:
        console.log("depositar");
        break;
    case 3:
        console.log("Saldo");
        break;
}