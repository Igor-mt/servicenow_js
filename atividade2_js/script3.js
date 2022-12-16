var nome;
var idade;
var salario;
var sexo;
var estadoc;

while (true) {
    var nome = prompt("Digite seu nome (deve conter mais de 3 digitos): ");

    if (nome.length < 3) {
        alert("Entre com no minimo 3 digitos");
    } else {
        alert(nome);
        break;
    }
}

while (true) {
    var idade = parseInt(prompt("Qual sua idade? "));

    if (idade >= 0 && idade <= 150) {
        alert(idade);
        break;
    } else {
        alert("Entre com idade válida.");
    }
}

while (true) {
    var salario = parseFloat(prompt("Qual seu salario? "));

    if (salario >= 0) {
        alert(salario);
        break;
    } else {
        alert("Entre com salário válido.");
    }
}

while (true) {
    var sexo = prompt("Qual seu sexo? (M / F): ");
    sexo.toLowerCase();

    if (sexo === "m" || sexo === "f") {
        alert(sexo);
        break;
    } else {
        alert("Escolha m ou f");
    }
}
while (true) {
    var estadoc = prompt("Qual seu estado civil? S, C, V, D");
    estadoc.toLowerCase();

    if (estadoc === "s" || estadoc === "c" || estadoc === "v" || estadoc === "d") {
        alert(estadoc);
        break;
    } else {
        alert("Qual seu estado civil? S, C, V, D");
    }
}
