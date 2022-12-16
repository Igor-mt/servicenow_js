break

var b = 1;
for ( ; ; ){
    document.write("<p>"+ b + "</p>");
    if (b === 10 ){
        break;
    };
    b++;
}

for (var y = 0; y < 20; y++ ){
    if (y % 2){
        continue;
    }
    document.write(+ y + "-");
}

ARRAYs (VETORES)

meuArray1 = new Array();//SEM DIMENSIONAMENTO

meuArray2 = new Array(5);//COM DIMENSIONAMENTO

meuArray3 = new Array("Victor", 1234, "88888", "Maria", 10.99); //COM VALORES INSERIDOS

alert (meuArray3[0])

ARRAY ASSOSSIATIVOS

meuArray4 = {"cahve1":"victor", "rua":"rua sem saida", "bairro":"las vegas", "cidade":"Bvg"}

var vetor2 = new Array (3);
vetor2 ["nome"] = prompt("Digite seu nome ");
vetor2 ["rua"] = prompt("Digite nome da sua rua ");
vetor2 ["bairro"] = prompt("Digite seu bairro ");

document.writeln("nome: " + vetor2["nome"] + "<br>");
document.writeln("rua: " + vetor2["rua"] + "<br>");
document.writeln("bairro: " + vetor2["bairro"] + "<br>");
