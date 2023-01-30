// Contrutor - Uma funça que possui uma propriedade chamada de prototipo, ela é usada para permitir a utilização de heranças.

// PRIMEIRA FORMA DE CONSTRUÇÃO DE CLASSES

// function Pessoa (nome, cpf) {
//     this.nome = nome;
//     this.cpf = cpf;
// }

// Pessoa.prototype.getNome = function(){
//     return this.nome
// }

// Pessoa.prototype.getCpf = function(){
//     return this.cpf
// }

// // Contruindo um objeto Pessoa

// const p1 = new Pessoa('Sabrina', '70006378110');


// SEGUNDA FORMA DE CONSTRUÇÃO DE CLASSES

// class Pessoa {
//     constructor (nome, cpf){
//         this.nome = nome
//         this.cpf = cpf
//     }
//     getNome(){
//         return this.nome
//     }
//     getCpf(){
//         return this.cpf
//     }
// }

// const p2 = new Pessoa ('Clovis', '192837461');
// alert(`Nome: ${p2.getNome()} e o CPF: ${p2.getCpf()}`);

function Pessoa(){
    var nome
    //SAÍDA
    this.getNome = function(){
        return nome
    }
    //ENTRADA
    this.setNome = function(valor){
        nome = valor
    }
}


function PessoaFisica(){
    var cpf;
    this.getCPF = function(){
        return cpf;
    }
    this.setCPF = function (valor){
        cpf = valor;
    };
}

function PessoaJuridica(){
    var cnpj;
    this.getCNPJ = function(){
        return cnpj;
    };
    this.setCNPJ = function(valor){
        cnpj = valor;
    };
}

PessoaFisica.prototype = new Pessoa ();
PessoaJuridica.prototype = new Pessoa();

pf1 = new PessoaFisica();
pf1.setNome("Fernando");
pf1.setCPF("6519813")

alert ("Nome: " + pf1.getNome() + " CPF: " + pf1.getCPF());