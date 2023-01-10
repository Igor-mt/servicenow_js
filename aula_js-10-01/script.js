// function media (a,b,c){
//     return (a+b+c)/3;
// }

// var a = parseFloat(prompt("Digite o valor de a"));
// var b = parseFloat(prompt("Digite o valor de b"));
// var c = parseFloat(prompt("Digite o valor de c"));
// alert (media(a,b,c));

// function somarDoisNumeros(n1,n2){
//     alert(n1+n2)
// }
// somarDoisNumeros(20,30);

// function somar(n1,n2){
//     return n1+n2
// }
// function text(){
//     return "O resultado do Calculo é = "
// }

// var resultado = text() + (somar(10,15) - 22);

// alert (resultado)

// function multiplosValores(valor){
//     switch(valor){
//         case 1:
//             return "Resposta 1";
//         case 2:
//             return "Resposta 2";
//         case 3:
//             return "Resposta 3";
//         case 4:
//             return "Resposta 5";
//         default:
//             return null;
//     }
// }

// alert (multiplosValores(1,2,3,4,5))

// function verificarIdade (idade){
//     if (idade >=0 && idade <12){
//         return "Criança";
//     } else if (idade >= 12 && idade <18){
//         return "Adolecente"
//     } else if (idade >= 18 && idade <60){
//         return "Adulto"
//     } else if (idade >= 60 && idade < 120){
//         return "Idoso"
//     }else {
//         return "Idade Iválida"
//     }
// }
// function textoIdade(){
//     return "A idade informada é "
// }
// var idade = 14;
// alert(textoIdade() + idade + verificarIdade(idade))

// let show = function(){
//     alert ("Essa é minha função anônima")
// }
// show();

// setTimeout(function(){
//     alert("Execute tal elemento após 10 segundos")
// }, 10000)

// setTimeout()

// EXECUTAR UMA FUNÇÃO LOGO APÓS A CRIAÇÃO

// (function(){
//     alert("Testando execução imediata")
// })()

// let alunos = {
//     nome: 'Vanessa',
//     idade: 31
// };

// (function(){
//     alert(`${alunos.nome} e ${alunos.idade} anos`)
// })(alunos);

// let show = function(){
//     alert ("Essa é minha função anônima")
// }
// show();

// let show = () => alert ("Minha função anônima");
// show()

// let soma = function (x,y){
//     return x + y;
// };
// alert (soma(10,12));

// let soma = (x,y) => x + y;
// alert (soma(10,12));

// let show = function () {alert("Minha função");};
// let show = () {alert("Minha função");};
// let show = () => alert ("minha função")
// show ()

// RAIZES E POTÊNCIAS
// var raizQ = Math.sqrt(9);
// alert(raizQ)

// var altura = 1.75;
// var potencia = Math.pow(altura,2)
// alert(potencia)

// ARRENDODAMENTOS

// round() inteiro mais proximo (para cima ou para baixo)
// floor() inteiro menor 
// ceil() inteiro maior
// trunc() remove a parte fracionada
// abs() valor absoluto

// var x = 10.5;
// alert(`Inteiro mais proximo ${Math.round(x)}`);
// alert(`Inteiro mais baixo ${Math.floor(x)}`);
// alert("inteiro mais alto" + Math.ceil(x));
// alert("Remove parte fracionada" + Math.trunc(x));
// alert(`Valor absoluto ${Math.abs(x)}`);

// var numero = 5;
// var resultado = numero;
// for (var i = 1; i < numero; i++){
//     resultado *= i;
// }
// alert (resultado);

// TRIGONOMETRIA

// sin() - seno
// cos() - cosseno
// tan() - tangente
// asin() - arco do seno
// acos() - arco cosseno
// atan() - arco tangente

// var angulo = 30;
// alert("A tangente de " + angulo + " é = " + Math.tan(angulo))

// MAIOR E MENOR VALOR
// MIN (x,y)
// max(x,y)

// var a = 60;
// var b = 15;

// alert ("O menor valor ente " + a + " e " + b + " é " + Math.min(a,b));

// var valor = Math.random()*10;

// // Arredondar 
// valor = Math.round(valor);

// alert ("O numero sorteado foi: " + valor)