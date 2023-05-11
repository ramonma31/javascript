// FUNÇÕES 

// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a msm retorna outro valor.

function areaQuadrada(lado) {
  return lado * lado;
}
// EXEMPLO
console.log(areaQuadrada(4)); // 16

function pi() {
  return 3.14;
}

var total = 5* pi();
console.log(total)

/* Parâmetros e Argumentos 
Ao Criar uma função, voçê pode definir parâmetros.
Ao execultar uma função, voçê pode passar argumentos.*/

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)) // 80 e 1.80 são argumentos

// Separar por vírgulas cada parâmetro. Voçê pode definir mais de um parâmetros ou nenhum.

/*Parenteses execulta a função*/

function corFavorita(cor) {
  if(cor === "azul") {
    return "Voçê gosta do céu.";
  } else if(cor === "verde") {
    return "Voçê gosta de mato";
  } else {
    return "Voçê não gosta de nada"
  }
}

console.log(corFavorita()) // Sem nada retorna o else e não da erro
 /*Se apenas definirmos a função com o function e não execultarmos a mesma, nada que estiver dentro dela irá acontecer*/

 /* Argumentos podem ser funções

 Chamdas de Callback são funções que ocorrem após algum evento*/

 //addEventListener("click", function() {
  //console.log("clicou");
 //});

 function mostraConsole() {
  console.log("oi");
 }

 //addEventListener("click", mostraConsole); // Assim não precisa passar com parênteses ok!

 /* 
 A função possui dois argumentos
 primeiro é a string "click", 
 segundo é uma função anônima
 */

 /* 
 Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
 */

 /* Funções pode ou não retiornar uma valor
 
 Quando não definimos o return, ele ira retornar undefined.
 O código inteiro da função é execultado normalmente, independente de existir valor de retorno ou não.*/

 function imv(peso, altura) {
  const imv = peso / (altura ** 2);
  console.log(imv)
 }

 imv(80, 1.80); // retorna o imv
 console.log(imv(80, 1.80)); // retorna o imv e undefined

 function terceiraIdade(idade) {
  if(idade >= 60) {
    return true
  } else {
    return false
  }
 }

// EXERCICIO
//01
function valorTurthy(valor1) {
  if(!!valor1) {
    console.log("O valor é: Truthy");
  } else {
    console.log("O valor é: Falsy")
  }
}
valorTurthy(" ")

//02
function perimetro(l1, l2) {
  peri = (l1 + l2) * 2
  return peri
}

//03

function epar(num) {
  if(num % 2 === 0) {
    return "Par"
  } else {
    return "Impar"
  }
}

function qualDado(dado) {
  return typeof dado
}

function nomeCompleto() {
  console.log("Ramon Moreira Alencar")
}

addEventListener("click", nomeCompleto)