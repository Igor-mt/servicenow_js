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

// function maisMenos(arr) {
//     var positivos = 0;
//     var zeros = 0;
//     var negativos = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positivos++;
//         } else if (arr[i] === 0) {
//             zeros++;
//         } else {
//             negativos++;
//         }
//     }
//     return [positivos / arr.length, zeros / arr.length, negativos / arr.length];
// }

// console.log([1,-2,0,-3,1,0,1]);


// function maisMenos(num1) {

//     var qnt = num1.length

//     var positivos = 0;
//     var numzeros = 0;
//     var numnegativos = 0;
//     var i = 0;

//     for (var i = 0; i < qnt; i++) {

//         if (num1[i] < 0) {

//             numnegativos = numnegativos + 1;

//         } else if (num1[i] > 0) {

//             positivos = positivos + 1;

//         } else {

//             numzeros = numzeros + 1;
            
//         }
//     }
    
//     positivos = positivos / qnt;
//     numzeros = numzeros / qnt;
//     numnegativos = numnegativos / qnt;

//     var total = [positivos, numzeros, numnegativos];

//     return total;

// }

// console.log(maisMenos([-1, 2, 0, 10, -5]))



// ############################## Desafio 04: Produto ########################//
