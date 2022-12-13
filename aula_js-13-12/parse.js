var altura = parseFloat(prompt("Digite a altura do retangulo"));
var largura = parseFloat(prompt("Digite a largura do retangulo"));

var area = altura * largura;
var perimetro = (largura + altura) * 2;

var mensagem = "area do retangulo: " + area + "/nPerimetro do retangulo: " + perimetro;

alert (mensagem);