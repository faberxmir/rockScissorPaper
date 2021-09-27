import { Game } from "./gamecontroller.js";

const game = new Game();

console.log("TEST 1 ------------point to comp-------------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\n User has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);



console.log("TEST 2 ------------point to player-------------------------------");
game.determineRoundWinner(game.SCISSOR, game.PAPER);
console.log(`ROUND\nUser has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);


console.log("TEST 3 --------------point to comp-----------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\nUser has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);



console.log("TEST 4 -------------------------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\n User has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);



console.log("TEST 5 -------------------------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\n User has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);



console.log("TEST 6 -------------------------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\n User has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);



console.log("TEST 7 -------------------------------------------");
game.determineRoundWinner(game.SCISSOR, game.ROCK);
console.log(`ROUND\n User has won: ${game.playerPoints} \nComputer has won: ${game.computerPoints}`);
console.log(`Game Result:  ${game.determineResult()}`);