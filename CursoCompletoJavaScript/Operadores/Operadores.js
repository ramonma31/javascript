// NÚMEROS

var idade = 35;
var gols = 1000;
var pi = 3.15; // Ponto para decimal
var exp = 2e-2; /* 20000000000 Determina a quantidade de 0 depois do número pode ser tbm negativo para de terminar a quantidade antes do número precisão até 15 números*/

// Operadores Aritiméticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 10 % 2 // 4 -> Restante inteiro da divisao

// Operadores Aritméticos (STRINGS)

var soma1 = "100" + 50; // Vai sair uma concatenação de string com número
var subtrai = "100" - 50; // Aqui ele vai tentar converter a string e fazer a operacao
var multipli = "100" * 2; // 200 Mesma coisa da subtração se der pra converter ele converte e faz a operação
var divisao = "Comprei 10" / 2; // NaN (Note a Number) nesse caso como não conseguiu converter ele vai dar uma valor especial (É possível verificar se uma variável é NaN ou não com a função isNaN()) 
console.log(isNaN(divisao));

// NaN = Not a Number

var number = 80;
var unidade = "Kg";
var peso = number + unidade; // "80Kg"
var PesoPorDois = peso / 2 // NaN (Not a Number)

// A ordem imprta

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parêntese para priorizar uma expressão

// Operadores Aritméticos Unários
// Não pode ser feito com a const
var incremento = 5;
// Apos o número só altera depois da passagem
console.log(incremento++); // 5
console.log(incremento); // 6
// Mesma coisa para decremento
// Antes do número já altera na msm hora 
var incremento2 = 5;
console.log(++incremento2);
console.log(incremento); // 6

var fra = "Isso é teste";
+fra; // NaN
-fra; // NaN

var idade5 = "35";
+idade5; // 35 (Número) Tranforma se possivél em número 
-idade5// -35 (Número) Mesma coisa so que negativo
console.log(+idade5 + 5); // 40

var possuiSim = true;
console.log(+possuiSim); // 1

/* O - antes de um número torna ele negativo*/

// EXERCICIO

// Qual o resultado da seguinte expressão?
var tot = 10 + 5 * 2 / 2 + 20; // Resposta -> 35

// Crie duas expressões que retornem NaN
var n = "tenho" + 28;
var x = "não tenho" - 28;

// Somar a string '200' com o número 50 e retornar 250
var s = "200";
var t = 50;
console.log(+s+t);

// Como dividir o peso por 2?
var num = +"80" / 2;
var unid = "Kg";
var pes = num + unid; // "80Kg"
console.log(pes)