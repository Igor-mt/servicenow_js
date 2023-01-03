// let string = "Hoje está chovendo"
// let string2 = 'Hoje está chovendo'

// concatenação

// let string3 = string + string2


// let string = "A soma dos valores é = "
// let x = 123
// let y = 456
//concatenção de strings

// let string3 = string + (x +y)

//CONVERSÃO DE VALORES

// let minhaString = '123'
// let minhaString2 = '4567'

// let converterN1 = Number(minhaString)
// let converterN2 = Number(minhaString2)
// var resultado = converterN1 + converterN2


// var resultadoString = resultado.toString()

var minhaFrase = "Faço parte do time de Servicenow da Soulcode Academy"

// alert (minhaFrase.indexOf('Soulcode'));

// alert(minhaFrase.slice(14,36))

// alert(`Minha frase minúscula =  ${minhaFrase.toLowerCase()}`)
// alert(`Minha frase maiúcula =  ${minhaFrase.toUpperCase()}`)

// var frase2 = minhaFrase.replace('do time' , 'da equipe')

// alert(frase2)

//CharAt - contagem de caracteres

// stringExemplo = "igor.limall@outlookc.com"
// resultado = stringExemplo.substring(0, stringExemplo.indexOf("@"))
// alert(resultado)



var vetor = minhaFrase.split(" - ");
alert(vetor)
for(i in vetor){
    alert(vetor[i])
}

