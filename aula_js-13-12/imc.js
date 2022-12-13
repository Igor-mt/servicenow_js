var peso = parseInt(prompt("Digite seu peso: "));
var altura = parseFloat(prompt("Digite sua altura: "));

var soma = peso / (altura * altura);

if(soma >= 11 && soma < 17) {
    alert ("Muito abaixo do peso");
} else if (soma >= 17 && soma <= 18,49){
    alert ("Abaixo do peso");
} else if (soma >= 18,5 && soma <= 24,99){
    alert ("Peso Normal");
} else if(soma >=25 && soma <= 29,99){
    alert ("Acima do peso");
} else if (soma <=30 && soma >= 34,99) {
    alert ("Obesidade I");
} else if (soma <= 35 && soma <= 39,99) {
    alert ("Obesidade II");
} else {
    alert ("Valor inválido, por favor tente novamente");
}