"use stirct"

//import scripts
const scripts = require('./game');

//execute game
//test
let game = new scripts.game();
game.welcomeMessage()
let numberPlayers = game.selectPlayers();
let numberOfGames = game.selectGames;

