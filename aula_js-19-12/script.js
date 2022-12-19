// var sn1 = ["HTML", "CSS", "JS", "ServiceNow", 2022];
// var sn2 = ["Angular", "Python", "Node", "GCP", 2023];
// // PERCORRER UM VETOR

// for (var x of sn1){
//     if (x === "CSS" || x === "Servicenow"){
//         alert(x);
//     }
// }

// PERTENCE OU NÃO PERTENCE AO VETOR
// busca = prompt("Digite sua busca");
// var resposta = sn1.includes(busca);
// if(resposta === true){
//     alert("Item localizado dentro do vetor! ")
// } else
// alert("Resposta item não encontrado dentro do vetor.");


// alert (sn1.join(" / "));

// alert (sn1.toString());

// var sn1 = ["HTML", "CSS", "JS", "ServiceNow", 2022];
// var sn2 = ["Angular", "Python", "Node", "GCP", 2023];

// // CONCATENAÇÃO DE ARRAYS

// var sn3 = sn1.concat(sn2);

// alert(sn3.join(" / "));

// var matriz = new Array(3);

// matriz[0] = ["Igor", "Matheus", "Laura", "Sophia", "Lucia"];
// // matriz[1] = [4,5,6];
// // matriz[2] = [7,8,9];

// alert(matriz [0][0]);
// alert(matriz [0][1]);
// alert(matriz [0][2]);
// alert(matriz [0][3]);
// alert(matriz [0][4]);

function exibir (){
    var matriz_nomes= [
        ["Alan", "Anny", "Danilo", "Rebeca", "Igor", "João", "Gonçalves"], 
        [4,5,6,6,9,10],
        [0,4,33,50,78,79]
    ];
    // FOR PARA PERCORRER AS LINHAS
    for (let linha=0; linha<6; linha++){
        //FOR PARA PERCORRER AS COLUNAS
        for (let coluna=0; coluna<6; coluna++){
            document.write(matriz_nomes [linha] [coluna] + " | ");
            document.write("<br />");
        }
    }
}