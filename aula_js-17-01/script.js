function random(number){
    return Math.floor(Math.random() * number + 1)
};
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' +
        random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

var meusBotoes = document.querySelectorAll('button');
for (var i; i < meusBotoes.length; i++) {
    meusBotoes[i].onclick = bgChange();
}