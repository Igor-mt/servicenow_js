/* *********************** QUESTÃO 01 **************************************

Crie uma classe que representa uma conta bancaria que possua o número da conta e saldo. Está classe também deve executar os seguintes métodos:
extrato (Mostra na tela o número e o saldo da conta)
saque (Recebe como parâmetro um valor e retira este valor do saldo da conta)
deposito (recebe como parâmetro um valor e adiciona este valor ao saldo da conta)
Ao final das operações saque e deposito, sua classe deve imprimir o número e o saldo da conta.
Crie um objeto para testar os métodos da classe conta bancaria. */
/* 
class Cliente {
    constructor(conta, saldo) {
        this.conta = conta;
        this.saldo = saldo;
    }
    saque(valorSaque) {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
            return this.saldo
        } else {
            return "Saldo Insuficiente"
        }
    }
        deposito(valorDeposito){
            this.saldo += valorDeposito;
        }
        extrato(){
            return `A conta ${this.conta} tem ${this.saldo} em Reais`
        }
    }


const conta1 = new Cliente (1, 1000);

conta1.deposito(1500);
alert(conta1.extrato());

conta1.saque(2000);
alert(conta1.saque()); */




/* *********************** QUESTÃO 02 **************************************

Crie uma classe que representa uma calculadora, está calculadora deve ter os seguintes métodos:
soma (recebe dois números e mostra o valor da soma)
subtração (recebe dois números e mostra o valor da subtração entre eles)
divisão (recebe dois números e mostra o valor da divisão entre eles)
multiplicação (recebe dois números e mostra o valor da multiplicação entre eles)
resto (recebe dois números e mostra o valor do resto da divisão entre esses dois números)
Crie um objeto para testar os métodos da classe calculadora. */


// class Calculadora {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     soma() {
//         return `A soma é ${this.num1 + this.num2}`
//     }
//     sub() {
//         return `A Subtração é ${this.num1 - this.num2}`
//     }
//     div() {
//         return `A Divisão é ${this.num1 / this.num2}`
//     }
//     mult() {
//         return `A multiplicação é ${this.num1 * this.num2}`
//     }

// }

// const primeiro = new Calculadora(1000, 10)

// alert(primeiro.soma());
// alert(primeiro.sub());
// alert(primeiro.div());
// alert(primeiro.mult());




/* *********************** QUESTÃO 03 **************************************
Crie uma classe Televisor. Essa classe deve possuir três atributos:
canal // inicia em 1 e vai até 16
volume // inicia em 0 e vai até 10
ligado // inicia em desligado ou false
e a seguinte lista de métodos:
aumentarVolume()    // Aumenta em 1 o volume
reduzirVolume()        // Diminui em 1 o volume
subirCanal()        // Aumenta em 1 o canal
descerCanal()        // Diminui em 1 o canal
ligarTelevisor()    // Liga a televisão
desligarTelevisor()    // Desliga a televisão
mostraStatus()        // Dizer qual o canal, o volume e se o televisor está ligado


Nos métodos informe se é possível realizar a operação, por exemplo, se o volume estiver no 10 e chamar o método aumentarVolume() novamente imprima uma mensagem de aviso, etc.
Quando desligado, nosso televisor deve voltar o canal e o volume a seus valores iniciais e não deve realizar nenhuma operação.
Crie um objeto para testar a classe Televisão. */

// class Televisor{
//     constructor(){
//     this.canal = 1;
//     this.volume = 0 ;
//     this.ligado = false;
//     }
//     aumentarVolume(){
//         if(this.volume < 10 && this.ligado === true){
//             return this.volume +=1
//         } else{
//             return "Você já está no volume máximo"
//         }
//     }
//     reduzirVolume(){
//         if(this.volume > 0 && this.ligado === true){
//             return this.volume -=1
//         } else{
//             return "Você já está no volume mínimo"
//         }
//     }
//     subirCanal(){
//         if(this.canal < 16 && this.ligado === true){
//             return this.canal +=1
//         } else{
//             return "Você não pode mais subir o Canal"
//         }
//     }
//     descerCanal(){
//         if(this.canal > 1 && this.ligado === true){
//             return this.canal -=1
//         } else{
//             return "Você Não pode mais descer o Canal"
//         }
//     }
//     ligarTelevisor() {
//         if(this.ligado === false){
//         return `Ligado: ${this.ligado = true}`
//         } else {
//             return "A Televisão já está ligada"
//     } 
//     }
//     desligarTelevisor() {
//         if(this.ligado === true){
//         this.ligado = false;
//         this.canal = 1;
//         this.volume = 0;
//         return `Ligado: ${this.ligado = false}`
//         }
//     }
//     mostrarStatus(){
//         return `Você está no canal ${this.canal} \n O volume é ${this.volume} \n Televisor está ligado: ${this.ligado}`
//     }
// }

// const teste1 = new Televisor ()

// alert(teste1.ligarTelevisor());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert(teste1.mostrarStatus());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert(teste1.desligarTelevisor());
// alert(teste1.ligarTelevisor());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.reduzirVolume());
// alert("Voce está no canal: " + teste1.subirCanal());
// alert("Voce está no canal: " + teste1.subirCanal());
// alert(teste1.mostrarStatus());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.aumentarVolume());
// alert("voce está no Volume: " + teste1.reduzirVolume());
// alert("voce está no Volume: " + teste1.reduzirVolume());
// alert(teste1.mostrarStatus());
// alert("Voce está no canal: " + teste1.subirCanal());
// alert("Voce está no canal: " + teste1.descerCanal());
// alert(teste1.desligarTelevisor());