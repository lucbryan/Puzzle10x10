var grade = document.getElementById("grade");
var pos_inicio = [];



for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    var novaPeca = document.createElement("div");
    novaPeca.id = "x" + j + "y" + i;
    novaPeca.style.top = i * 10 + "vh";
    novaPeca.style.left = j * 10 + "vw";
    novaPeca.style.backgroundPosition = "-" + j * 10 + "vw -" + i * 10 + "vh";
    novaPeca.style.backgroundSize = "100vw 100vh"; 
    novaPeca.style.backgroundImage = "url(imgs/img.jpg)";
    novaPeca.setAttribute("onclick", "clicarPeca(this)");

    grade.appendChild(novaPeca);

    pos_inicio.push(novaPeca);
  }
}

var escolhido1 = null;
var escolhido2= null;

var _1xy = [];
var _2xy = [];
var block = false;

function clicarPeca(argElemento){
	if(block == false){
		if(escolhido1 == null){
		  escolhido1 = argElemento;
		}
		else if(escolhido2 == null){
			escolhido2=argElemento;
			trocarPeca();
		}
	}
}

function trocarPeca(){
	var escolhidoTrocadoTop = escolhido1.style.top;
	var escolhidoTrocadoLeft = escolhido1.style.left;
	escolhido1.style.top=escolhido2.style.top;

	escolhido1.style.left = escolhido2.style.left;
	escolhido2.style.top= escolhidoTrocadoTop;
	escolhido2.style.left=escolhidoTrocadoLeft;

	_1xy.push(escolhido1);
	_2xy.push(escolhido2);


	escolhido1=null;
	escolhido2=null;


}
function embaralhar(argIteracoes){
	for(var i = 0; i < argIteracoes;i++){
		var escolhido1X=0;
		var escolhido1Y=0;
		var escolhido2X=0;
		var escolhido2Y=0;

		while(escolhido1X==escolhido2X && escolhido1Y == escolhido2Y){
			escolhido1X=Math.round(Math.random()*(10-1));
			escolhido1Y=Math.round(Math.random()*(10-1));

			escolhido2X=Math.round(Math.random()*(10-1));
			escolhido2Y=Math.round(Math.random()*(10-1));

		}
		escolhido1=document.getElementById("x"+escolhido1X+"y"+escolhido1Y);
		escolhido2=document.getElementById("x"+escolhido2X+"y"+escolhido2Y);
		trocarPeca();
	}
}

function resolve(){

	for(var i = 0; i<10;i++){
	for(var j = 0; j < 10; j++){
		(function(){
			        var jj =  j;
			        var ii = i;

        setTimeout(function(){
		id = "x"+jj+"y"+ii;
		peca = document.getElementById(id);
		peca.style.top=ii*10+"vh";
		peca.style.left=jj*10+"vw";


        },1000*j);

    })();
}
}
}


function resolve_padrao(){
	for(var i = _2xy.length-1;i >=0;i--){

    (function(){
        var j =  i;

        setTimeout(function(){
        var t = _1xy.length - j-1;

	    escolhido2 = _2xy[t];
		escolhido1 = _1xy[t];
		trocarPecaResolver();

        },100*j);

    })();
}
}

function trocarPecaResolver(){
	var escolhidoTrocadoTop = escolhido1.style.top;
	var escolhidoTrocadoLeft = escolhido1.style.left;
	escolhido1.style.top=escolhido2.style.top;

	escolhido1.style.left = escolhido2.style.left;
	escolhido2.style.top= escolhidoTrocadoTop;
	escolhido2.style.left=escolhidoTrocadoLeft;

	escolhido1=null;
	escolhido2=null;

}


embaralhar(100);