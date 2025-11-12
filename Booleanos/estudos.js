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
    //console.log("Bem vindo de volta! meu parceiro")
    console.log("Faça o login, meu parceiro!")
} else {
   // console.log("Faça o login, meu parceiro!")
    console.log("Bem vindo de volta! meu parceiro")
}