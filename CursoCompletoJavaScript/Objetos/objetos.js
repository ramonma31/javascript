/* Objetos
Conjunto de variáveis e funções, que são chamados de propriedades e métodos.*/

var pessoa = {
  nome: "Ramon",
  idade: 35,
  profissão: "programador/Desenvolvedor",
  possuiFaculdade: true,
}

console.log(pessoa.idade)

/* Propriedades e métodos consistem e nome (chaves) e valor ou seja um dicionario no python*/

/* MÉTODOS
è uma propiedade que possui uma função no local do seu valor.*/

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado
  },
}
quadrado.lados
console.log(quadrado.area(4))
console.log(quadrado.perimetro(5))
/* Existe uma abreviação para métodos de area: functions() {} para area() {}, ES6+*/

/* O objeto serve para Organizar o código em pequenas partes reutilizáveis*/

Math.PI; // 3.14
console.log(Math.random()); // Número aleatorio

var pi = Math.PI;
console.log(pi); // 3.14

/* Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método.*/

/* Objetos são criados apenas com chaves e dentro delas colocamos seus métodos e sua propiedades*/

/* Dot Notation Get
Acesse propiedades de um objeto ultilizando o ponto .*/

var menu = {
  width: 800,
  height: 50,
  backgroudcolor: "#84e",
}
menu.backgroudcolor = "#000";

var bg = menu.backgroudcolor;

// Adicionar

menu.color = "blue";

menu.esconder = function() {
  console.log("esconder");
}

// EXERCICIO

//01
var ramon = {
  nome: "Ramon",
  sobrenome: "Moreira",
  nomeConsole() {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

var carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
}

carro.preco = 3e3

console.log(carro.preco)

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if(pessoa === "homen") {
      return "latir"
    } else {
      return "nada"
    }
  }
}

console.log(cachorro.latir("homen"))

/* Tudo é um Objeto

Strings, Números, Boolean, Objetos e mais, possuem propieades e métodos. Por isso são objetos.*/

var Nome = "ramon"

Nome.length; // 5
Nome.charAt(1) // "a"
Nome.replace("on", "u");

/* Uma String herda propiedades e métodos do construtor String()*/

var nomeMinusculo = Nome.toLocaleLowerCase();
var nomeMiusculo = Nome.toLocaleUpperCase();

/* Números como objetos*/

var altura = 1.8;

var novaAlt = altura.toString();

console.log();