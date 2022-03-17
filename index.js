"use stirct"

//import scripts
const scripts = require('./game');
const prompt = require("prompt-sync")();

//execute game
//test
let game = new scripts.game();
let newGame = game.runGame(game);
console.log(`\n=================> ${newGame}!!!\n`);
// console.log("Press <RETURN> to continue...");
// prompt("");


