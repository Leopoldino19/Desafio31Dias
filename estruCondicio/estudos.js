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