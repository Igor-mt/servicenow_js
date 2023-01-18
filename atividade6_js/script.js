// ####################### Desafio 01: Construir uma Escada ####################################

// function escada(altura) {

//     var escada = [];

//     for (var i = 1; i <= altura; i++) {

//       escada.push(' '.repeat(altura - i) + 'I'.repeat(i));

//     }

//     return escada;

//   }

//   console.table(escada(10));


// ######################### Desafio 02: Árvore Utópica ######################################

// function arvoreSoul(fases) {

//     var tam = 1;

//     for (var i = 1; i <= fases; i++) {

//         if (i % 2 === 0) {

//             tam += 1;

//         } else {

//             tam *= 2;

//         }
//     }

//     return tam;

// }


// alert(arvoreSoul(0));
// alert(arvoreSoul(1));
// alert(arvoreSoul(2));
// alert(arvoreSoul(3));




// ################# Desafio 03: Mais Menos (Porcentagem de elementos) #########################

// function maisMenos(num) {

//     var positivos = 0;

//     var zeros = 0;

//     var negativos = 0;

//     for (var i = 0; i < num.length; i++) {

//         if (num[i] > 0) {

//             positivos++;

//         } else if (num[i] === 0) {

//             zeros++;

//         } else {

//             negativos++;

//         }
//     }

//     return [positivos / num.length, zeros / num.length, negativos / num.length];

// }

// console.log(maisMenos([1, 2, 0, -1])); // [0.5, 0.25, 0.25]



// ############################## Desafio 04: Produto ########################//

// function produto(num) {

//   var resultado = 1;

//   for (var i = 0; i < num.length; i++) {

//     resultado *= num[i];

//   }

//   return resultado;

// }

// console.log(produto([1, 4, 7])); //28


// Ou podemos utilizar o método com o "Reduce". Esse método foi encotrado na internet, então por gentileza, considere a resposta anterior.

// function produto(num) {

//   return num.reduce((a, b) => a * b);

// }

// console.log(produto([1, 4, 7])); //28