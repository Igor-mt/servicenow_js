function somar(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2
    document.getElementById("resultado").value = parseFloat(resultado);
}

function sub(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2
    document.getElementById("resultado").value = parseFloat(resultado);
}

function div(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 / num2
    document.getElementById("resultado").value = parseFloat(resultado);
}

function multi(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2
    document.getElementById("resultado").value = parseFloat(resultado);
}

function expo(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 ** num2
    document.getElementById("resultado").value = parseFloat(resultado);
}

function percent(num1, num2) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var resultado = (num1 * num2) / 100
    document.getElementById("resultado").value = parseFloat(resultado);
}

function raiz() {
    let raaiz = Math.sqrt(document.getElementById("num1").value);
    document.getElementById("resultado").value = raaiz
}


function sin() {
    let seno = Math.sin(document.getElementById("num1").value);
    document.getElementById("resultado").value = seno
}

function cos() {
    let cosseno = Math.cos(document.getElementById("num1").value);
    document.getElementById("resultado").value = cosseno
}

function tan() {
    let tangente = Math.tan(document.getElementById("num1").value);
    document.getElementById("resultado").value = tangente
}

function limpar() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("resultado").value = '';
}
