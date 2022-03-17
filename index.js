"use stirct"

//import scripts
const scripts = require('./game');

//execute game
let game = new scripts.game();
let newGame = game.runGame(game);
console.log(`\n=================> ${newGame}!!!\n`);



