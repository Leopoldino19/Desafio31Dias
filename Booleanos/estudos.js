// Um valor booleano só pode ter dois estados:
//? - true Representa verdadeiro.
//? - false: Representa falso.
// Eles são usados principalmente em **condições** para determinar o que o código deve fazer.

// Comparações e Operadores Relacionais
// Os valores booleanos muitas vezes são gerados a partir de comparações. Aqui estão os operadores mais comuns:

//* Operad  Descrição         Exemplo  Resultado
//* '==='  igualdade estrita   5===5    true
//* '!=='  diferenca estrita   5!==3    true
//*  '<'   menor que           3 < 5    true
//*  '>'   maior que           5 > 3    true
//*  '<='  menor ou igual      3 <= 3   true
//*  '>='  maior ou igual      5 >= 5   true

// 🔄 Operadores Lógicos
// Os operadores lógicos permitem combinar ou inverter valores booleanos:

//? operador     Descrição       Exemplo       Resultado
//?  '&&'          'E' lógico    true && false     false
//?  '||'          'OU'lógico    true || false     true
//?  '!'           'NÃO'lógico   !true             false

// Exemplo:
 let idade = 19;
 let temCsrteira = false;

 if(idade >= 18 && temCsrteira){
    console.log("Pode dirigir! meu nobre.")
 } else{
    console.log("Não pode dirifir, ta ligado!?")
 }
 // O código verifica duas condições ao mesmo tempo: se a idade é maior ou igual a 18 e se a pessoa tem carteira caso uma seja falsa ele não considera certa 

// Exemplo
let estaLogado = false;

if(estaLogado){
    console.log("Bem vindo de volta! meu parceiro") 
} else {
   console.log("Faça o login, meu parceiro!")
}
//dessa maneira, “true” vai imprimir a primeira opção e “false” a segunda opção

//Exemplo Classificando Notas

let nota = 90;

if(nota >= 90){
   console.log("Parabéns, você tirou “A” !")
} else if(nota >= 70 && nota < 90 ){
   console.log("Foi por pouco gafanhoto, tirou “B”")
}else{
   console.log("Precisa estudar mais, meu jovem gafanhoto “C”")
}

// Exemplos Negação com "!"

let luzAcesa = true;

if(!luzAcesa){
   console.log(" As luzes estão apagadas!")
}
//“!” vai negar a situação atual, então só vai imprimir se variável for 

// Exercicio Combinação de condições 
let saldo = 1;
let cartao = false;

if (saldo > 0 || cartao){
   console.log("Pode comprar oque você quer!")
} else {
   console.log("Não foi dessa vez")
}