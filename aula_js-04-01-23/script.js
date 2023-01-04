// TRABALHANDO COM OBJETOS

// calculadora {
//     var n1,n2, media;
//     function somar(n1,n2){
//         return(n1+n2)
//     }
// }

// Objeto = coleção de propriedades (calculadora)
// propriedade = uma associação entre um nome e uma chave (calucladora.n1, calculadora.n2, calculadora.media)
// function = métodos


// carros.indexOf()

// nomeDoObjeto.propriedadeDoObjeto

// var meuCarro = new Object(); //INSTANCIANDO UM OBJETO

// meuCarro.fabricante = "Ford"
// meuCarro.modelo = "KA"
// meuCarro.cor = "BRANCO"
// meuCarro.potencia = "120cc"

// alert(meuCarro.fabricante)

// meuCarro["fabricante"] = "Ford"
// meuCarro["modelo"] = "KA"
// meuCarro["cor"] = "Preto"
// meuCarro["potencia"] = "120cc"

// var carro = new Object(); // CRIOU-SE O OBJETO
// var nomeDaPropriedade  = "fabricante"; // CRIOU-SE A PROPRIEDADE CHAMADA FABRICANTE
// carro[nomeDaPropriedade]; // ADICIONOU A PROPRIEDADE FABRICANTE AO OBJETO CARRO
// nomeDaPropriedade = "modelo"; // CRIOU-SE A PROPRIEDADE CHAMADA MODELO
// carro[nomeDaPropriedade]; // ADICIONOU A PROPRIEDADE MODELO AO OBJETO CARRO
// nomeDaPropriedade = "motor";  // CRIOU-SE A PROPRIEDADE CHAMADA MOTOR
// carro[nomeDaPropriedade]; // ADICIONOU A PROPRIEDADE MOTOR AO OBJETO CARRO

// // FUNÇAO PARA MOSTRAR AS PROPRIEDADES DE UM OBJETO

// function mostrarPropriedadesObj(seuObjeto, apelido){
//     var resposta = "";
//     for(var propriedade in seuObjeto){
//         if (seuObjeto.hasOwnProperty(propriedade)){
//         resposta += apelido + "." + propriedade + " = " + seuObjeto[propriedade] +"\n";
//         }
//     }
//     return resposta;
// }

// alert(mostrarPropriedadesObj(carro, "batatinha"));

// function Carro (marca, modelo, ano, proprietario){
//     this.marca = marca
//     this.modelo = modelo
//     this.ano = ano
//     this.proprietario = proprietario
// }
// function Pessoa (nome, idade, sexo){
//     this.nome = nome
//     this.idade = idade
//     this.sexo = sexo
// }

// var jose = new pessoa ("Jose Augusto", 28, "M")
// var meuCarro = new Carro ("Ford", "KA", "2009", jose);

// alert(meuCarro.proprietario.nome);

