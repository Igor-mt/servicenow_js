// RANDOM

// function gerarNumero(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.random() * (max - min) + min;
// }

// function getRandomInt (min, max){
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min;
//     }

// alert (getRandomInt(1,10));

// function getRandomInt (min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }

// alert (getRandomInt(1,10));

// function gerarBilhete(){
//     var qnt = 0;
//     var numeros = [];
//     while (qnt < 6){
//         var num = Math.round((Math.random()*100)+1);
//         if (num <= 60){
//             numeros[qnt] = num;
//             qnt++;
//         }
//     }
//     document.getElementById('num').innerHTML = numeros[0] + " - " + numeros[1] + " - " + numeros[2] + " - " + numeros[3] + " - " + numeros[4] + " - " + numeros[5];
// }

// function sorteia (){
//     return Math.round(Math.random()*25);
// }

// function sorteiaContadores(quantidade){
//     var bilhetes = [];
//     var contador = 1;
//     while (contador <= quantidade){
//         var contadorAleatorio = sorteia();
//         var achou = false;
//         if (contadorAleatorio !== 0){
//             for (var posicao = 0; posicao < bilhetes.length; posicao++){
//                 if (bilhetes [posicao] == contadorAleatorio){
//                     achou = true;
//                     break;
//                 }
//             }
//             if (achou == false){
//                 bilhetes.push
//                 (contadorAleatorio);
//                 contador++
//             }
//         }
//     }
//     return bilhetes;
// }

// var bilhetes = sorteiaContadores(15);
// alert(bilhetes);