 // FUNÇÃO PARA: OCULTAR O BT MENU E EXIBIR O BT FECHAR E O MENU
function exibirMenu(){
    botaoMenu.style.display = "none";
    botaoFechar.style.display = "block";
    menu.style.display = "block"
}

// FUNÇÃO PARA MOSTRAR O BT MENU E OCULTAR O BT FECHAR E O MENU
function fecharMenu(){
    botaoMenu.style.display = "block";
    botaoFechar.style.display = "none";
    menu.style.display = "none"
}

// FUNÇÃO QUE VAI VERIFICAR SE HOUVE REDIMENSIONAMENTO DA TELA

function verificarLarguraTela(){
    var larguraTela = window.innerWidth

    if(larguraTela < 1120){
        botaoMenu.style.display = "block";
        botaoFechar.style.display = "none";
        menu.style.display = "none"
    } else {
        botaoMenu.style.display = "none";
        botaoFechar.style.display = "none";
        menu.style.display = "flex"
    }
}

window.addEventListener("resize", verificarLarguraTela)
