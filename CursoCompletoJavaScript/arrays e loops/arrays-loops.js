/* ARRAY
É um grupo de valores geralmente realacionados. servem para guardarmos diferentes valores em uma única variável. Mesmo conceito de listas do python
*/

var videoGame = ["Switch", "Ps4", "XBox"];

console.log(videoGame[0]);
console.log(videoGame[1]);

/* Métodos e propiedades de uma array*/

//videoGame.pop(); // Remove o último item e retorna ele
videoGame.push("3DS"); // adiciona ao final do array
videoGame.length; // Tamanho da lista


// loops => For

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero)
}

// While loop

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

/* Arrays e lopps*/

for (var i = 0; i < videoGame.length; i++) {
  console.log(videoGame[i])
}

// Break
 
for (var i = 0; i < videoGame.length; i++) {
  console.log(videoGame[i]);
  if(videoGame[i] === "Ps4"){
    break;
  }
}

/* ForEach
forEach é um método de array que execulta uma função para cada item dqa Array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
*/

videoGame.forEach(function(item) {
  console.log(item);
});
/* 
O argumento item será atribuido dinamicamente,
podemos passar os seguintes parâmetros item, index e array
*/

// EXERCICIO

//01

var Brasilcopa = [1959, 1962, 1970, 1994, 2002]

Brasilcopa.forEach(function(item) {
  console.log(`O Brasil ganhou a copa de: ${item}`)
});


var frutas = ["Banana", "Uva", "Maçã" ,"Pera" , "Melânçia", "Caja"];
var fruta = " ";
for (var i = 0; i <= frutas.length; i++) {
  if(frutas[i] === "Caja") {
    var fruta = frutas[i];
    break;
  } else {
    console.log(`A fruta: ${frutas[i]}`);
  }
};

fruta = frutas[frutas.length -1];

console.log(fruta);

/* operador ternario*/

var idade = 19;
var poeBeber = (idade >= 18) ? "Pode Beber" : "Não pode beber"

console.log(poeBeber)



