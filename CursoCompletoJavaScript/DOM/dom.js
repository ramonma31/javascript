/* Document Object Model (DOM)

É uma interface que representa HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.*/

//console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propiedades

//window.innerHeight; // Retorna a altura do browser

/* Ao inpecionar elemento com chrome, 
voçê está vendo a representação oficial do DOM*/

/* Window e Document

São os Objetos principais do DOM, boa paret da manipulação é feita através dos seus métodos e propiedades.*/

/*window.alert("isso é um alerta");
alert("isso é um alerta");

document.querySelector("h1"); // seleciona o primeiro h1
document.body; // retorna o body*/

/* Window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propiedades*/

//const h1Selecionado = document.querySelector("h1");


/* Node

Toda tag html é representada pqlo ojeto Element e por isso herda os seu métodos e propiedades. Element é um tipo de objeto Node*/

const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener("click", function() {
  titulo.innerText = "Teste"
})