var produto = prompt("Qual nome do Produto?");
var preco = parseFloat(prompt("Qual preço do produto?"));

var percentual = 0.65;
var aumento = preco * percentual;
var novoPreco = preco + aumento;

var msg = "Seu produto: " + produto + " custa R$ " + preco + ",00 seu novo valor será: " + novoPreco+",00";

alert(msg);