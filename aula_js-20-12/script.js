// var numeros = [];

//     for (var i = 0; i < 5; i++){
//         numeros.push(parseInt(prompt("Digite o número: ")));
//     }

//     numeros.forEach(elemento => {
//         documento.write(elemento)
//     });

// **-------------------------------** //

// var numeros = [];
// var triploNumeros = [];

// for (var i = 0; i < 4; i++){
//     numeros.push(parseInt(prompt("Digite o numero")));
// }

// triploNumeros = numeros.map(elemento => elemento * 3);

// alert(numeros);
// alert(triploNumeros)

// alert (numeros.filter(elemento => elemento < 3));

// **-------------------------------** //

// var numeros = [];
// for (var i = 0; i < 5; i++) {
//     numeros.push(parseInt(prompt("Digite o número: ")));
// }

// var y = parseInt(prompt("Digite o numero que procura: "));
// var busca = numeros.find(elemento => elemento ===y);

// var buscarPosicao = numeros.findIndex(elemento => elemento ===y);

// if (busca){
//     document.write("o numero " + y + " existe no Array " + buscarPosicao);
// } else {
//     document.write("o numero " + y + " não existe no Array")
// }

// **-------------------------------** //

// var numeros = [10,20,30,40,50];

// // EVERY - RETORNA TRUE SE TODOS OS ELEMENTOS FOREM MENOR QUE OU IGUAL AO ELEMENTO (NESSE CASO O NUMERO 50)
// var verifica = numeros.every(elementos => elementos <= 50);


// // SOME - RETORNA TRUE SE HOUVER AO MENOS 1 ELEMENTO DENTRO DA CONDIÇÃO (NESSE CASO O <=50)
// var verifica = numeros.some(elementos => elementos <=50);

// alert(verifica);


// **-------------------------------** //

// var numeros = [];

// for (var i = 0; i < 10; i++){
//     numeros.push(parseInt(prompt("Digite o numero ")));
// }
// alert(numeros.sort((X,Y) => {
//     if (x < y){
//         return - 1;
//     }else if (x > y){
//         return 1
//     }
// }
// ));


// **-------------------------------** //

// var numeros = [10,15,25,3,12,1,99];
// var soma = numeros.reduce((soma, elementos) => soma + elementos);

// alert (soma);



// **-------------------------------** //


// 1 – Calcule a média de diversas notas digitadas pelo usuário.
var numeros = [];
var numNotas = parseInt(prompt("Digite a quantidade de notas: "))

for (var i = 0; i < numNotas; i++){
    numeros.push(parseFloat(prompt("Digite os " + numNotas + " numeros que você solicitou: ")));
}
var soma = numeros.reduce((soma, elementos) => soma + elementos);

var media = soma / numNotas;

alert("A média de " + numNotas + " é igual a " + media);




// **-------------------------------** //

// 2 – Faça um programa que entre com
// cinco números e imprima o quadrado de cada número.





// **-------------------------------** //

// 3 – Peça ao usuário para digitar 5
// números em uma caixa de texto. Verifique qual é o maior número e exiba-o.




// **-------------------------------** //

// 4 – Peça ao usuário para digitar
// várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são
// menores.





// **-------------------------------** //

// 5 – Crie um programa que entre com
// os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do
// sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a
// maior altura e se essa altura é de um homem ou uma mulher.





// **-------------------------------** //

// 6 – Peça ao usuário para digitar
// vários nomes. Exiba na tela todos os nomes digitados, porém de maneira
// invertida (do último para o primeiro).





// **-------------------------------** //

// 7 – Peça para o usuário digitar uma
// data. Exiba separadamente o dia, o mês e o ano. (Obs.: não necessita de laço de
// repetição)




// **-------------------------------** //

// 8 - Escreva uma função que retorne o cubo de um número fornecido pelo usuário.




// **-------------------------------** //

// 9 - Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.




// **-------------------------------** //

// 10 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.




// **-------------------------------** //

// 11 - Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.