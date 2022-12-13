var valor = parseFloat(prompt("Qual valor do emprestimo?"));
var qnt = parseFloat(prompt("Em quantos meses você quer pagar?"));

var i = 2/100;
var m = (valor * (1+i) ** qnt);

var valorParcela = m / qnt;

alert("O valor da sua parcela será: R$ " + valorParcela.toFixed(2) + " Valor final do empréstimo: R$" + m.toFixed(2));