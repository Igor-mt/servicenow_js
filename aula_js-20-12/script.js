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



