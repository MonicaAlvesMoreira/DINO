
var jogoAtivo = true;

function pulo() {

    if (!jogoAtivo) return;
    if (!dino.classList.contains("pulo")){
        dino.classList.add("pulo");

        setTimeout(function() {
            dino.classList.remove("pulo");
        },500);
    }
}

// Quais teclas estao pressionadas
document.addEventListener ("keydown",function(event){
    if (event.code == "Space"){
        pulo()
    }

});

//chao
let chaoPosition = 0;

function moveChao() {
    if (!jogoAtivo) return;

    chaoPosition -= 5;    
    chao.style.backgroundPositionX = chaoPosition + 'px';
    
    requestAnimationFrame(moveChao);
}

//cacto
let cactoPosition = 0;
function  moveCacto(){
    if (!jogoAtivo) return;
    cactoPosition -= 5;
    cacto.style.left = cactoPosition + 'px';
    if (cactoPosition<5){
        cactoPosition=590;

    }
    requestAnimationFrame(moveCacto);
}

//nuvem 
let nuvemPosition = 0;

function  movenuvem() {
    if (!jogoAtivo) return;

    nuvemPosition -= 1.4;
    nuvem.style.left = nuvemPosition + 'px';
    if (nuvemPosition<5){
        nuvemPosition=590;
    }
    requestAnimationFrame(movenuvem);
}

// animação
var step = 1;

function animateDino() {
    if (!jogoAtivo) return;
    if (dino.classList.contains("pulo")){
        dino.style.backgroundImage ="url(imagens/Normal.png)"
    } else {
        if (step == 1){
            dino.style.backgroundImage = "url(imagens/Walk1.png)"
            step = 2;
        } else {
        dino.style.backgroundImage = "url(imagens/Walk2.png)"
            step = 1;
        }
    
    }
}  
// Colisao

function colidiu(rect1,rect2) {
    return !(rect1.right < rect2.left||
        rect1.left > rect2.right||
        rect1.bottom < rect2.top||
        rect1.top > rect2.bottom );
    }
        
function verificarColisao() {
    var dinoRect = document.getElementById("dino").getBoundingClientRect();
    var cactoRect = document.getElementById("cacto").getBoundingClientRect();
     if (colidiu(dinoRect,cactoRect)) {   
        jogoAtivo = false;
        clearInterval(verificacao);
        console.log("colisao detectada!");
        atualizarTelaGameover();
    }
}


function atualizarTelaGameover() {
    var elentoGameover = document.getElementById("gameover");
    elentoGameover.style.visibility = 'visible'

}

moveChao();
moveCacto();
movenuvem();
setInterval(animateDino,100);
var verificacao = setInterval(verificarColisao,100);
