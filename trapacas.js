/*
* Listas de funções de trapacas no codigo
*/

function verCartas(){
    
}

/*
* Remova um numero especifico de cartas direto das maos dos jogadores
*/

function forcaRemove(numCartas){
    if(numCartas > 0){
        removeMuitasCartas(numCartas);
    }else{
        console.log("Números de cartas inválidos: " + numCartas);
    }
}

/*
*  Dar a jogador uma carta especifica (input from console)
*/

function desenheEspecificaCarta(cartaCor, cartaValor) {
    if((cartaCor == "Especial" && cartaValor > 1)|| cartaValor < 0){
        console.log("Invalido a seleção de cartas curingas: " + cartaCor + " " + cartaValor);
        return;
    }else if(cartaValor> 12){
        console.log("Invalido a seleção de cartas" + cartaCor + " " + cartaValor)
    }else{
        desenheEspecificaCarta(cartaCor, cartaValor);
    }
}