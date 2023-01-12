// EXECUTAR UMA FUNÇÃO LOGO APÓS A CRIAÇÃO

// (function(){
//     alert("Testando execução imediata")
// })()

// let alunos = {
//     nome : "Vanessa",
//     idade: 31
// };

// (function(){
//     alert(`${alunos.nome} ${alunos.idade}`)
// })(alunos);

// let show = function(){
//     alert("Minha Funcção anônima!")
// };
// show()

// 
// let soma = function(x,y){
//     return x+y;
// };
// alert(soma(10,12));

// let soma = (x,y) => x+y;

//ESCOPO DE VARIAVEL

// var x = 23; // Variavel global
// var resultado;
// function calcula(){
//     var numeros = 10;

//     resultado = x + numeros;
// }
// calcula();
// alert(`${resultado}`);

// var myName = "Fernando";

// function showName(){
//     var myLastName = "Park";
//     myName += ' ' + myLastName
//     alert(`Meu nome é ${myName}`)
// }

// showName();

//myName = "Raul"
// function showName(){
//     myName = "Adriano";
//     alert(`Meu nome é ${myName}`)
// };

// showName()

// alert(`Meu nome é ${myName}`);

// var x = 10;
// var y = 15;
// var resposta = x + y;

// function teste(){
//     var nome = "Adriano";
//     var sobrenome = "Gomes";
//     resposta = nome + " " + sobrenome;
//     alert(resposta);
// }
// teste();
// alert("minha resposta sem chamar a função" + resposta);

// var nome = "Vanessa";

// function showName (x){
//     alert ("Nome digitado " + x)
// }

// function formatName(x){
//     nome = x.toUpperCase();
//     return nome;
// }

// showName(nome);
// formatName(nome);
// showName(nome);


// OBJETO GLOBAL

// var meusDados = {
//     nome: "Adriano",
//     sobrenome: "Gomes", 
//     email: "adriano.gomes@soulcode.com.br"
// };

// function showName (){
//     alert(`Meu nome é ${meusDados.nome} ' ' ${meusDados.sobrenome} e meu e-mail é  ${meusDados.email}`);

// }

// showName();

// var nome = "Sabrina";
// if(nome.length == 7){
//     var sobrenome = "Freitas"
// }

// alert ("Meu nome é " + nome + ' ' + sobrenome);

