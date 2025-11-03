//? Crie uma variável para armazenar seu nome e outra 
//? para sua idade. Imprima uma frase como: "Meu nome é [nome] 
//? e tenho [idade] anos".

let nome = "Pedro";
let idade = 22;

console.log  ("Meu nome é ",nome," e tenho ",idade," anos.")

//? Declare uma variável para armazenar o preço de um produto 
//? e outra para o desconto. Calcule o preço final e mostre
//? no console.

let kitRel = 50;
let porc = 10;
let valor = (porc/kitRel)*100
console.log(valor)

//? Crie um array com três de suas comidas favoritas
//?  e exiba a segunda comida na lista.

const comidasFavo =["macacheira", "arroz", "salada"]
comidasFavo.push("feijão")
console.log(comidasFavo[3])

//? 4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
 let livro ={
    titulo: "O lado feio do amor",
    auto: "colen",
    ano: "2017"
 }
 console.log("o livro se chama ", livro.titulo," da autora ", livro.auto)

//? 5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = false;
 console.log ("Status de login:", estaLogado)

//? 6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

const pi = 3.14;
let raio = 5;
let area = pi * (raio * raio)

console.log(" A area vai ser do círculo com raio 5 vai ser:", area)