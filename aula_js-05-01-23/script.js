// let animais = {
//     // PROPRIEDADE
//     tipo : "Invertebrados",
//     cor : "",
//     // METODO
//     qualTipoAnimal : function(){
//         alert(this.tipo + " " + this.cor)
//     },
//     qualCorAnimal: function(){
//         alert(this.cor)
//     }
// }

// // CRIAR UM TIPO DE ANIMAL
// let insetos = Object.create(animais)

// insetos.qualTipoAnimal()

// let gato = Object.create(animais)

// gato.tipo = "Vertebrado"

// gato.qualTipoAnimal()

// animais.prototype.com = null

// let coelho = Object.create(animais)
// coelho.cor = "preto"
// coelho.qualCorAnimal()

// class Retangulo{
//     constructor(altura, largura){
//         this.altura = altura
//         this.largura = largura
//     }
//     //MEUS PRÓPRIOS METODOS
//     calcularArea(){
//         return this.altura * this.largura
//     }
//     calcularPerimetro(){
//         return (this.largura + this.altura)*2
//     }
//     //GETTER

//     get getArea(){
//         return this.calcularArea()
//     }
//     get getPerimetro(){
//         return this.calcularPerimetro()
//     }
// }

// let x = 15
// let y = 11
// const figura = new Retangulo(y,x)
// alert(figura.getArea)
// alert(figura.getPerimetro)

// const figura2 = new Retangulo(10,99)
// alert(figura2.getArea)
// alert(figura2.getPerimetro)

// Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propridades da classe.

/* class Cliente {
    constructor(nome, email, cpf){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }

    relatorio(){
        return `A pessoa ${this.nome} com o CPF ${this.cpf} possui o email ${this.email}`
        
    }
}

const clienteAdriano = new Cliente ("Adriano", "adrianogs@gmail.com", "12345678");

// alert (clienteAdriano.relatorio());

class ClienteBanco extends Cliente {
    constructor (nome, email, cpf, saldo){
        super(nome, email, cpf);
        this.saldo = saldo;
    }
    sacar (valorSaque){
        if (valorSaque <= this.saldo){
            this.saldo -= valorSaque;
        } else{
            return "Saldo insuficiente"
        }
    }
    depositar (valorDeposito){
        this.saldo += valorDeposito
    }
    //SOBRESCRISTA DE MÉTODOS 

    relatorio(){
        return `A pessoa ${this.nome} com o CPF ${this.cpf} possui o email ${this.email} e possui um saldo de ${this.saldo}`
        
    }
}

const colaborador = new ClienteBanco("Maria", "maria@gmail.com", "12344567", 999.99);

alert (colaborador.relatorio());
alert (clienteAdriano.relatorio()); */

//PESSOA (COMUM)
// PESSOA FISICA (CPF, RG)
// PESSOA JURIDICA (CNPJ, IE, NOMEFANTASIA)

class Pessoa {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    relatorio() {
        return `O cliente é ${this.nome} possui o email: ${this.email} e o tolefone para contato é: ${this.telefone}`
    }
}

const ClienteIgor = new Pessoa("Igor", "igor.limall@outlook.com", "(62)9 9650-5948")

class PessoaFisica extends Pessoa {
    constructor(nome, email, telefone, cpf, rg) {
        super(nome, email, telefone)
        this.cpf = cpf;
        this.rg = rg;
    }

    sacar(valorSaque) {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
        } else {
            return "Saldo insuficiente"
        }
    }
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    relatorio() {
        return `O cliente é ${this.nome} possui o email: ${this.email} e o tolefone para contato é: ${this.telefone} CPF: ${this.cpf} RG: ${this.rg}`
    }
}

const ClienteJoao = new PessoaFisica ("Joao Cardoso", "joao@gmail.com", "(62)9 9655465464", "75506378165", "654987")

class PessoaJurica extends Pessoa {
    constructor(nome, email, telefone, cnpj, ie, nomefantasia){
        super(nome, email, telefone);
        this.cnpj = cnpj;
        this.ie = ie;
        this.nomefantasia = nomefantasia;
    }
    sacar(valorSaque) {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
        } else {
            return "Saldo insuficiente"
        }
    }
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    relatorio() {
        return `O cliente é ${this.nome} possui o email: ${this.email} e o tolefone para contato é: ${this.telefone} CNPJ: ${this.cnpj} IE: ${this.ie} Nome Fantasia: ${this.nomefantasia}`
    }
}

const ClienteLoiola = new PessoaJurica ("Loiola Cardoso", "loiola@gmail.com", "(62)9 9655465464", "020568989000106", "654987", "Loiola Alimentos");

alert(ClienteIgor.relatorio())
alert(ClienteJoao.relatorio())
alert(ClienteLoiola.relatorio())