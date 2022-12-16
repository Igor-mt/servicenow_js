// var numero = 8;
// var contator = 1;

// while (contador >0 && contador<=10){
//     alert(numero + " x " + contator + " x " + (numero * contador));
//     contador++;
// }

var contador = 1;
var numeroTabuada = parseInt(prompt("Digite o numero desejado para tabuada!"));

while(isNaN(numeroTabuada)){
    numeroTabuada = parseInt(prompt("Numero Inválido! Digite o numero desejado para tabuada!"))
}

function mostrar (frase){
    document.write(frase);
    pularLinha();
}
function pularLinha(){
    document.write("<br>");
}

mostrar ("<big> Tabuada do Número " + numeroTabuada + ": </big>");

while (contador <= 10){
    mostrar (numeroTabuada + " x " + contador + " = " + (numeroTabuada * contador));
    contador++;
}

monstrar("Final da minha Tabuada")