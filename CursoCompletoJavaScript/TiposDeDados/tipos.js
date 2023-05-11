// TIPOS DE DADOS

var nome = "Ramon"; // String
var idade = 28; // Number
var PossuiFacu = true; // Boleano
var time; // Undefined
var simbolo = Symbol(); // Symbol
var comida = null; // Null
var novoObjeto = {}; // Object 

// VERIFICAR TIPO DE DADO
console.log(typeof nome); // Retorna o tipo de dado
console.log(typeof simbolo)

// STRING

var sobrenome = "Moreira";
var nomeCompleto = nome + sobrenome; // concatena as duas igual ao python
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romario fez" + gols + "Gols";

console.log(typeof frase); // Se somar numero com string sempre será uma string isso eu já sabia

/* Aspas são a msm regra do python
torna mais facil pra mim essa porra
*/

// Tmplate String

var golos = 1000;
var frase1 = "Romario fez" + golos + "gols";
var frase2 = `Romario fez ${golos * 2} gols`; // Ultilizando template

console.log(frase2)

// EXERCICIO
// declare um varíavel contendo uma String
var str = "Essa é uma String";
// Declare uma variavel contendo um numero dentro de uma string
var i = "35"

// Declare uma variavel com sua idade
var ide = 35;

/* Declare duas variáveis, uma com seu nome, e outra com seu sobrenome*/
var nombre = "Ramon";
var sobrenombre = "Moreira";

console.log(`Meu nome completo é ${nombre} ${sobrenombre}`);

// Coloque a seguinte frase em uma variavel: It's time
var resposta = "A palavra é It's time";

console.log(resposta);
 
// Verifique o tipo de variável que contem o seu nome
console.log(typeof nombre)