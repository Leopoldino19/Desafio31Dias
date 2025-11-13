//* 1 - Verifique se um número é maior que 10 e menor que 20.
let numero = 19;

if(numero >= 10 && numero < 20){
    console.log(" muito bem! deu certo gafanhoto!")
} else {
    console.log("Não e isso que quero ver")
}

//* 2 - Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 15;
let temTitulo = true;

if(idade >= 16 && temTitulo){
    console.log(" Bem vindo a democracia!")
} else {
    console.log("Ainda não chegou sua vez!")
}

// 3. Implemente um sistema de notas onde:
//     - Notas >= 90: "Aprovado com A"
//     - Notas >= 70 e < 90: "Aprovado com B"
//     - Notas < 70: "Reprovado".

let notaProva = 90;

if(notaProva >= 90){
    console.log("Você tirou 'A' ");
} else if (notaProva >= 70 && notaProva <90){
    console.log("Você escapou por pouco, 'B'");
} else{
    console.log("Reprovado");
}