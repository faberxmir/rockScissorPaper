export class Game{
    playerPoints = 0;
    computerPoints = 0;

    numberOfRounds;//Max points in the game
    minPointsToWin;

    roundsPlayed = 0;
    
    ROCK = 2;
    SCISSOR = 1;
    PAPER = 0;

    PLAYERWIN = 1;
    TIE = 0;
    COMPUTERWIN = -1

    /**
     * @param {number} numberOfRounds determines the number of rounds the players are going to play (best of). defaults to 3
     */
    constructor(numberOfRounds = 3){
        this.numberOfRounds = numberOfRounds;
        this.minPointsToWin = Math.floor(numberOfRounds/2+1);
        console.log(`minimum points to win = ${this.minPointsToWin}`);
    };

    /**
     * @param {String} userChoice should be ResultHandler.
     * ROCK/.PAPER/.SCISSOR
     * @param {String} computerChoice 
     * @returns -1 if the user looses and 1 if the user wins and 0 if its a tie;
     */
    determineRoundWinner(userChoice, computerChoice) {
        let winner;

        if(userChoice === this.ROCK && computerChoice === this.SCISSOR ||
            userChoice === this.PAPER && computerChoice === this.ROCK ||
            userChoice === this.SCISSOR && computerChoice === this.PAPER){

            winner = this.PLAYERWIN;
            ++this.playerPoints;
        } else if(userChoice === computerChoice){
            winner = this.TIE;
        } else {
            ++this.computerPoints;
            winner = this.COMPUTERWIN;
        }
        ++this.roundsPlayed;
        return winner;
    }

    //return 1 if player wins, 0 if the game is undetermined and -1 if the computerwins
    //if the player or the computer wins. The game is reset.
    determineResult(){
        let gameResult = 0;
        
        //Only check this if more than half the rounds of the game is played
        if(this.roundsPlayed >= this.minPointsToWin){
            if(this.isPlayerInLead()){
                gameResult = this.PLAYERWIN;
                this.resetGame();
            } else if(this.isComputerInLead()){
                gameResult = this.COMPUTERWIN;
                this.resetGame();
            }
        }

        return gameResult;
    }

    resetGame(){
        this.roundsPlayed = 0;
        this.playerPoints = 0;
        this.computerPoints = 0;
    }

    isPlayerInLead(){
        return this.playerPoints > this.computerPoints;
    }

    isComputerInLead(){
        return this.computerPoints > this.playerPoints;
    }
}