nomes = new Array(4);
nomes[0] = "Vitória";
nomes[1] = "Igor";
nomes[2] = "João";
nomes[3] = "Salvador";

console.log(nomes);

var x = 71;

if(x % 2 == 0){
    console.log(x, " é um número par!");
}else {
    console.log(x, " é um numero impar!");
}

// Verificação de idade

var idade = 150;

if(idade >= 0 && idade < 12){
    console.log(idade, " é uma criança.")
} else if (idade >= 12 && idade < 18) {
    console.log(idade, " é um Adolecente.")
} else if (idade >= 18 && idade < 60) {
    console.log(idade, " é um adulto")
} else if (idade >= 60 && idade <= 120){
    console.log(idade, " é um idoso")
} else {
    console.log ("Idade inválida!")
}