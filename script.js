// 1 criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo 

// O "Balao.setAttibute" refere-se <div class="balao" style="left:30px; top:60px">

var total = 0;

function criarBalao(){

    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");
    
    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);


    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Baloes estourados: " + total;

}

function carregarJogo(){
    setInterval(criarBalao, 1000);
}