/**
 * função de nomes personalizados
**/
function initializeJogadores(){
    //Funcao de arrays jogadores 2-4 pessoas ou bots 
    let seats = ["BottomSeat", "RightSeat", "TopSeat", "LeftSeat"];
    let botNomes = [
        "Porco-Aranha", 
        "Coringa", 
        "Hermione Granger", 
        "Cebolinha", 
        "Yoda", 
        "Princesa Leia",
        "Luke Skywalker", 
        "Katniss Everdeen", 
        "Arlequina", 
        "Mulher Maravilha", 
        "Batman", 
        "Dorothy", 
        "Mary Poppins", 
        "Perry Onitorrinco", 
        "Homem de Ferro",
        "Phineas Flynn", 
        "Ferb Flynn",
        "Edna Mode",
        "Wade Wilson", 
        "Derek Zoolander",
        "Candance Flynn", 
        "Shazam caralho",
        "Thanos",
        "Capitão Jack Sparrow", 
        "Gween Tennyson ", 
        "Ben Tennyson", 
        "Viuva Negra", 
        "Henry Chinaski", 
        "Greg Hefffley", 
        "Frodo Baggins", 
        "Ace Ventura",
        "Groot", 
        "Sandy Bochecha", 
        "Lula Molusco",
        "Bob Esponja"
    ];
    while(jogadores.length < amtJogadores){
        let seatIndex = Math.round(4 / amtJogadores) * jogadores.length;
        let jogadorMaoDiv = seats[seatIndex]
        let jogadorMaoLabel = jogadorMaoDiv + "ID";

        let tempDeck;
        
        if(jogadores.length == 0){
            tempDeck = new Deck(jogadorMaoDiv, false);
        }else{
            tempDeck = new Deck(jogadorMaoDiv, true); // seta o verdadeiro para blackout
        }

        let tempID = document.getElementById("jogadorNome").value;

        let tempIndex = jogadores.length - 1;

        let isbot = false; 

        let botIndex  = Math.floor(Math.random()* botNomes.length);
        let botNome = botNomes[botIndex];

        if(jogadores.length != 0 || tempID == "Bot"){
            tempID = botNome;
            botNomes.splice(botIndex, 1);
            isbot = true;
        }

        document.getElementById(jogadorMaoLabel).innerHTML = "<h3>" + tempID + "</h3>";
    }
}

/* Jogo começa */
function jogocomeca(){
    let jogadorNomeInput = document.getElementById("jogadorNome");
    let jogadorNome = jogadorNomeInput.value;
    jogadorNomeInput.classList.remove("is-valid");
    if (jogadorNome.length == 0) {
        jogadorNomeInput.classList.add("is-invalid");
        return;
    }
    document.getElementById("setupGame").add("d-none");

    initializeJogadores();
}
/**
 * Função jogar
**/
function joga(){
    if(jogadores[turnoJogo].isBot){
        setTimeout(function () {
            for(let i = 0; i < jogadores.length, i++){
                document
                    .getElementById(jogadores[i])
            }
        })
    }
}

/**
 * Botão  Chama TRES 
*/
function chamaTres(){
    if(jogadores[turnoJogo].JogadorDeck.amtCartas > 2){
        jogadores.dra;
    }
}