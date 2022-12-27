// 1.  Faça um programa que possua um vetor denominado A que armazene 6 números inteiros. O programa deve executar os seguintes passos:
// (a)  Atribua os seguintes valores a esse vetor: 1, 0, 5, -2, -5, 7.
// (b)  Armazene em uma variável inteira (simples) a soma entre os valores das posições A[0], A[1] e A[5] do vetor e mostre na tela esta soma.
// (c)  Modifique o vetor na posição 4, atribuindo a esta posição o valor 100.
// (d)  Mostre na tela cada valor do vetor A, um em cada linha.

// let A = [1,0,5,-2,-5,7];
// var soma = A[0] + A[1] + A[5];
// document.write(soma + "<br>");
// A[4] = 100;

// document.write(A.join("<br>"));




// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 2.  Crie um programa que lê 6 valores inteiros e, armazene todos em um único vetor e em seguida, mostre na tela os valores lidos.

// let num = [];
// for (let x=1; x<=6; x++){
//     num.push(x);
// }

// alert(num);


// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 3.  Ler um conjunto de 10 números, e filtre os números que forem menor do que 20. Mostre na tela o vetor filtrado.

// let numero = [];

// for (let i=0; i<10; i++){
//     numero.push(parseInt(prompt("Digite o número")));
// }
// var resultado = numero.filter (numero => numero <20);

// document.write(resultado);


// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 4.  Faça um programa que leia um vetor de 8 posições e, em seguida, leia também dois valores X e Y quaisquer correspondentes a duas posições no vetor. Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.
// var vetor = [1,2,3,4,5,6,7,8];
// let x = vetor [3];
// let y = vetor [2];

// document.write(`${x+y}`);


// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 5.  Leia um vetor de 5 posições com nomes de pessoas. Imprimir na tela os nomes na ordem que foi lida e em ordem alfabética.
// let nome = ["Igor", "Matheus", "Carlos", "João", "Marcos"];

// document.write(`${nome.sort().join(" , ")}`);



// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 6.  Faça um programa que receba do usuário um vetor com 10 posições. Em seguida deverá ser impresso o maior elemento e sua posição no vetor.

// let numeros = [];

// for (let i=0; i<10; i++){
//     numeros.push(parseInt(prompt("Digite 10 numereos: ")));
// }
// let maior = Math.max(...numeros);
// document.write(`O maior numero é o ${maior} e a posição do Array é ${numeros.indexOf(maior)}`)


// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 7.  Escreva um programa que leia 10 números inteiros e os armazene em um vetor. E adicione 20% a cada elemento do vetor.





// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 8.  Crie um programa que lê 6 valores inteiros e, em seguida, mostre na tela os valores lidos na ordem inversa.




// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 9.  Crie um programa que lê valores para uma matriz 3x3 e em seguida imprima todos os elementos da matriz.




// *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//

// 10.  Faça um programa para ler a nota da prova de 7 alunos e armazene num vetor, calcule e imprima a media geral.




