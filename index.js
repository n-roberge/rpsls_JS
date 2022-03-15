"use stirct"

//import scripts
const scripts = require('./scripts');

//Welcome, select number of games
console.log("Welcome to Rock Paper Sissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

//Rules, select gesture

console.log("\n\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors")

//Select number of players
scripts.players();

//Select number of games
scripts.games();

//Execute game
