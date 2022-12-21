// **-------------------------------** //


// 1 – Calcule a média de diversas notas digitadas pelo usuário.
// var numeros = [];
// var numNotas = parseInt(prompt("Digite a quantidade de notas: "))

// for (var i = 0; i < numNotas; i++){
//     numeros.push(parseFloat(prompt("Digite os " + numNotas + " numeros que você solicitou: ")));
// }
// var soma = numeros.reduce((soma, elementos) => soma + elementos);

// var media = soma / numNotas;

// alert("A média de " + numNotas + " é igual a " + media);




// **-------------------------------** //

// 2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.

// let numeros, quadrado, contador;

// contador = 0;

// while(contador < 5){
//     numeros = parseFloat(prompt("Digite um numero: "));
//     quadrado = Math.pow(numeros,2);
//     alert(quadrado + " ");
//     contador++;
// }


// **-------------------------------** //

// 3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

// var num = [];

// for (i=0; i<5; i++){
//     num.push(parseFloat(prompt("Digite um numero: ")));
// }

// alert(Math.max(...num));


// **-------------------------------** //

// 4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

// let maiores = [];
// let menores = [];

// let quant = parseInt(prompt("Digite quantas idades você gostaria de adicionar: "))

// for(i=0; i<quant; i++){
//     var idade = parseInt(prompt("Digite uma idade: "));
//     if(idade <18){
//         menores++
//     }else {
//         maiores++
//     }
// }

// alert(`${maiores} maiores e ${menores} menores de 18 anos` );



// **-------------------------------** //

// 5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do
// sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a
// maior altura e se essa altura é de um homem ou uma mulher.


// var fem = new Array();
// var masc = new Array();

// for(i=0; i<5; i++){
//     var genero = prompt("Digite um genero(Feminino ou Masculino): ");
//     if(genero === "Feminino"){
//         altura = (parseFloat(prompt("Digite a altura: ")));
//         fem.push(altura.toFixed(2));
//     }
//     if(genero === "Masculino"){
//         altura = (parseFloat(prompt("Digite a altura: ")));
//         masc.push(altura.toFixed(2));
//     }
// }

// alert(`${masc.length} são do sexo Masculino \n ${fem.length} são do sexo Feminino`);

// if(Math.max(...masc)<Math.max(...fem)){
//     alert(`A maior altura é: ${Math.max(...fem)} e é de uma Mulher`)
// }else{
//     alert(`A maior altura é: ${Math.max(...masc)} e é de um Homem`)
// }

// **-------------------------------** //

// 6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes digitados, porém de maneira
// invertida (do último para o primeiro).

// var lista = [];

// var quant = parseInt(prompt("Digite quantas nomes voce quer inserir: "))

// for(i=0; i<quant; i++){
//     nome = prompt("Digite um nome: ")
//     lista.push(nome)
// }
// lista.reverse();

// alert(lista.join(" / "))



// **-------------------------------** //

// 7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. (Obs.: não necessita de laço de repetição

// let entrada = prompt("Digite uma data no formato DD/MM/AAAA.");

// const data = entrada.split("/");

// alert(`Dia ${data[0]} do ${data[1]} de ${data[2]}.`);


// **-------------------------------** //

// 8 - Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

// let numeros, quadrado, contador;

// contador = 0;

// while(contador < 5){
//     numeros = parseFloat(prompt("Digite um numero: "));
//     quadrado = Math.pow(numeros,3);
//     alert(quadrado + " ");
//     contador++;
// }


// **-------------------------------** //

// 9 - Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

// let base, altura, area;

// base = parseInt(prompt("Digite a base do triângulo: "));
// altura = parseInt(prompt("Digite a altura do Triângulo: "))

// area = base * altura /2

// alert(`A area do triângulo é ${area}`)

// **-------------------------------** //

// 10 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

num = parseInt(prompt("Digite um numero"));
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

alert(num);

// **-------------------------------** //

// 11 - Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.