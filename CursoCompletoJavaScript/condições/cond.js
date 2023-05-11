// CONDICIONAIS If e Else
/*Verificar se uma condição é verdadeira com if, caso contrário o else será ativado*/
var PossuiGraduacao = true;

if(PossuiGraduacao) {
  console.log("Possui graduação.");
} else {
  console.log("Não possui graduação.")
};
// Retorna Possui graduação e não o else
// O valor dentro dos parentêses será avaliado em false ou else

// Condicionais Else If
// Se o if não for verdadeiro, ele testa o else if

var PossuiGraduacao1 = true;
var PossuiGraduacao2 = false;

if(PossuiGraduacao2) {
  console.log("possui graduação e doutorado.");
} else if(PossuiGraduacao1) {
  console.log("Possui graduação mais não possui doutorado.");
} else {
  console.log("Não possui graduação nenhuma.");
}

// Turthy e Falsy

/* existem valores que retornam true e outros que retornam false quando verificados em uma expressão boleana*/

// Falsy
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if('');
// Todo o resto é Truthy

if(true);
if(1);
if(" ");
if("Ramon");
if(-5);
if({})

var nome = "Ramon";

if(nome) {
  console.log(`O nome é: ${nome}`);
} else {
  console.log("Não existe");
}

// Operador Lógico de negação!
// O operador ! lógico de operação boleana, ou seja, !true é igual a false
// Truthy
if(!true); // false
if(!1); // false
if(!""); // true
if(!undefined); // true
if(!!" "); // true
if (!!""); // false
// Dica, voçê pode ultilizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de comparação
// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// O == faz uma comparação não estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10" // false
10 !== "10" // true

// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira/and=python

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // "cão" ->retorna o valor
(5 - 5) && (5 + 5); // 0 ->retorna o valor
"gato" && false; // false
(5 >= 5) && (3 < 6); // true -> aqui sai valores booleanos das duas expressões logo resultado e booleano

// Se ambos os valores forem true ele irá retornar o último valor verificado se algum valor for false ele ira retornar o msm e não irá continuar a verificar os proximos

if((5 - 5) && (5 + 5)) {
  console.log("Verdadeiro");
} else {
  console.log("False");
}

// Operações Lógicas ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // "Gato"
(5 - 5) || (5 + 5); // 10
"gato" || false; // "Gato"
(5 >= 5) || (3 < 6);

// retorna o primeiro valor true que encontar

var cond2 = (5 - 5) || (5 + 5) && (10 - 2) // assim retorna o último verdadeiro

/*SWITCH
Com o Swich voçê pode verificar se uma variável é igual á diferentes valores ultilizando o case. Caso ela seja igual, voçê pode fazer alguma coisa e ultilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja veradeira*/

var corFavorita = "vermelho";

switch (corFavorita) {
  case "azul":
    console.log("olhe para o céu.");
    break;
  case "vermelho":
    console.log("olhe para rosas.");
    break;
  case "amarelo":
    console.log("olhe para o sol.");
    break;
  default:
    console.log("feche os olhos.");
}

/*EXERCICIO*/

/* Verifique se a sua idade é maior do que a de algum parente dependendo do resultado coloque no console 'É maior', 'É igual'*/

var ramon = 35;
var emanuele = 38;

if(ramon > emanuele) {
  console.log(`A idade de Ramon é ${ramon} e é maior que a idade de emanuelly que só tem ${emanuele}`);
} else if(emanuele === ramon) {
  console.log(`A idade de Ramon é ${ramon} e é igual a idade de emanuelly que tem ${emanuele}`)
} else {
  console.log(`A idade de emanuelly é ${emanuele} e é maior que a idade de Ramon que só tem ${ramon}`);
}

