//? Em nosso dia a dia,estamos sempre avaliando condições para agir. Por exemplo:

//? - Se está chovendo, então coloco a capa de chuva.
//? - Caso contrário, saio sem a capa.

//* Estruturas Condicionais
//* ermitem que o código execute diferentes blocos de instruções dependendo de condições específicas.

//* 1. `if` e `else`: Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
//* 2. `else if`: Permite testar várias condições.
//* 3. `switch`: Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.

//? exemplos
// if, else if e else
let hora = 11.59;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}
//? Explicação:
// 1. Se `hora` for menor que 12, imprime "Bom dia!".
// 2. Caso contrário, se `hora` for menor que 18, imprime "Boa tarde!".
// 3. Se nenhuma das condições acima for verdadeira, imprime "Boa noite!".

//? OPERADOR TERNÁRIO
// decisões simples podemos usar, onde temos só duas opções 
// - Se a condição `idade >= 18` for verdadeira, retorna "Pode entrar!". Caso contrário, retorna "Entrada proibida!".

let idade = 17;
let mensagem = idade >= 18? "pode entrar!" : "entrada Proibida!";
console.log(mensagem)

//? TESTE
let sair = "sim";
let ondeIr = sair === "sim"? "Vamos comer Pizzar" : "Então podemos asistir um Filme em casa";
console.log(ondeIr)

//? ímpar ou Par
let numero = 20;
if (numero %2 === 0){
  console.log(`${numero} é par`);
} else{
  console.log(`${numero} é ímpar`);
}

//?  classificação de Notas
let nota = 6.9;

if(nota >= 90){
  console.log("Aprovado com sucesso");
} else if(nota >= 70){
  console.log("Passou raspando!");
} else{
  console.log("Não foi dessa vez");
}

//? 🛠️ Dicas Importantes
//? - Coloque condições mais específicas primeiro:
if (nota >= 90) {
  // Específico
} else if (nota >= 50) {
  // Geral
}
//? - Use `switch` para evitar muitos `else if`:
//?     Quando há muitas opções baseadas em um único valor, o `switch` torna o código mais legível.
//? - Evite duplicar código:
// ?    Tente organizar as condições de forma a evitar repetições desnecessárias.

//* 🔄 `switch`

//* O `switch` é útil quando você precisa testar **vários casos diferentes** para uma mesma variável.

let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia");
}
//* 📌 Explicação:

//* - Cada `case` é uma condição que verifica o valor da variável `diaSemana`.
//* - O `default` é executado se nenhum dos casos for verdadeiro.
//* - O `break` impede que o código continue executando outros casos.

//? testes-----------
let opcao = "Vendas";
switch(opcao){
  case "Pagar":
    let pix = "chave pix";
    let cartao = "credito";
    console.log(pix)
    break;
  case "Vendas":
    let ultimaVenda = " ultima venda";
    let historicoVendas = "Relatorio das ultmas vendas";
    console.log(historicoVendas);
    break;
  case "boleto":
    let boleto = "Erro no sistema"
    console.log(boleto)
    break;
}