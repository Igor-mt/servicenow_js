// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

// let numbers = [50, 2];

// function numeroCresc() {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > numbers[i + 1]) {
//             let n1 = numbers[1];
//             let n2 = numbers[i + 1];

//             numbers[i] = n2;
//             numbers[i + 1] = n1;
//         }
//     }
// }
// // Função de ordenação
// for (let j = 0; j < numbers.length; j++) {
//     numeroCresc();
// }
// alert(numbers);

// 02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

// var num1 = parseFloat(prompt("Digite o primeiro número: "));
// var num2 = parseFloat(prompt("Digite o segundo número: "));
// var num3 = parseFloat(prompt("Digite o terceiro número: "));
// var recpt = new Array();

// if(num1<num2 && num1<num3 && num2>num1 && num2<num3){
//     recpt.push(num1 , num2, num3);
//     alert(recpt);
// } else if (num1<num2 && num1<num3 && num3<num2 && num3>num1){
//     recpt.push(num1 , num3 , num2);
//     alert (recpt);
// } else if (num2<num1 && num2<num3 && num1>num2 && num1<num3){
//     recpt.push(num2 , num1 , num3);
//     alert (recpt);
// }  else if (num2<num1 && num2<num3 && num3>num2 && num3<num1){
//     recpt.push(num2 , num3 , num1);
//     alert (recpt);
// } else if (num3<num1 && num3<num3 && num1>num3 && num1<num2){
//     recpt.push(num3 , num1 , num2);
//     alert (recpt);
// } else if (num3<num1 && num3<num2 && num2>num3 && num2<num1){
//     recpt.push(num3 , num2 , num1);
//     alert (recpt);
// }




// 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

// var recpt = new Array();
// var num1 = recpt.push(parseFloat(prompt("Digite o primeiro número: ")));
// var num2 = recpt.push(parseFloat(prompt("Digite o segundo número: ")));
// var num3 = recpt.push(parseFloat(prompt("Digite o terceiro número: ")));

// recpt.reverse();
// alert(recpt);

// let numbers = [50, 2];

// function numeroCresc() {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > numbers[i + 1]) {
//             let n1 = numbers[1];
//             let n2 = numbers[i + 1];

//             numbers[i] = n2;
//             numbers[i + 1] = n1;
//         }
//     }
// }
// // Função de ordenação
// for (let j = 0; j < numbers.length; j++) {
//     numeroCresc();
// }

// numbers.reverse();
// alert(numbers);



// 04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor.
// Ao final, exiba o array e o array ao contrário (generalização do script anterior).


// vetor = new Array();
// var i = 0;
// var n = parseFloat(prompt("quantos numeros deseja inserir ?"))
// while(isNaN(n) || n <= 0){
//     n = parseFloat(prompt("Por favor digite quantos numeros deseja inserir"))
// }
// while(vetor.length < n){
//     vetor.push(parseFloat(prompt("digite o "+(i+1)+" numero")));
// while(isNaN(vetor[i])){
//     vetor[i] = parseFloat(prompt("digite o "+(i+1)+" numero(somente numeros)"));

// }
// i++
// }
// document.write(vetor)
// vetor.reverse()
// document.write("<br/>"+vetor+"<br/>")



// 05. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.


var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

var x = parseInt(prompt("Digite um numero"));

for (var i = 2; i < x; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
alert(fibonacci);