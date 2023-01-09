// SINTAXE
// function nome_da_funcao(arg1,arg2,arg3){
//     // Comandos
//     return $valorEspecifico;
// }

// VALIDAR ENTRADA DE DADOS

function validaEntrada(args) {
    for (let i = 0; i < arguments.length; i++) {
        if (!!arguments[i] == false || arguments[i] < 0) {
            return false;
        }
    }
    return true;
}

// CALCULAR IMC

function calcularIMC(kg, altura) {
    altura = altura / 100
    return (kg / (altura * altura))
}

// INTERAGIR COM HTML

const formCalcularIMC = document.getElementById('form')

formCalcularIMC.addEventListener('submit', function (event) {
    event.preventDefault()

    const kilos = parseFloat(document.getElementById('kg').value)

    const altura = parseFloat(document.getElementById('altura').value)

    if (validaEntrada(kilos, altura)) {
        const imc = calcularIMC(kilos, altura)
        document.getElementById('imc').value = parseFloat(imc).toFixed(2)

        verificarIMC(imc)
    } else {
        document.getElementById('imc').value = "## ERRO ##"
    }

});

function verificarIMC(imc) {
    if (imc < 17) {
        createMessage("Muito abaixo do peso", "alert")
    } else if (imc <= 18.49) {
        createMessage("Abaixo do pesso", "warning")
    }
    else if (imc <= 24.99) {
        createMessage("Peso Normal", "success")
    } else if (imc <= 29.99) {
        createMessage("Acima do peso", "warning")
    } else if (imc <= 34.99) {
        createMessage("Obesidade grau I", "alert")
    } else if (imc <= 39.99) {
        createMessage("Obesidade II", "danger")
    } else {
        createMessage("Obesidade III", "danger")
    }

}

function createMessage(msg, type) {
    document.querySelector("body").insertAdjacentHTML("beforebegin", `<div class="message ${type}" >${msg}</div>`)
    setTimeout(function () {
        deleteMessage()
    }, 3000)
}

function deleteMessage() {
    const list = document.querySelectorAll(".messaage")
    for (const item of list) {
        item.remove()
    }
}