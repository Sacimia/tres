/* 
 *deck constructor
 *@param 
 @param 
*/

function Deck(divId, hidden){
    this.cartas = [];
    this.atmCartas = 0;
    this.mao = document.getElementById(divId);
    this.isHidden = hidden;

    /**
     * Adiciona uma carta para array de carta
     **/
    this.addicionaCarta = function (carta){
        this.cartas.push(this.cartas)
    }
}