"use strict";

//imports
const classes = require("./Classes");
const prompt = require("prompt-sync")();

class Game {
    gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    //Welcome, select number of games
    welcomeMessage(){
        console.log("Welcome to Rock Paper Sissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

        //Rules, select gesture
        console.log("\n\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors")
    }

    selectPlayers(){
        let players = [];
        let numberOfPlayers = prompt("How many players?:");

        if (Number(numberOfPlayers) === 1){
            players[0] = new classes.Player("","",0)
            //create AI player
            players[1] = new classes.AI("","")
        }

        else {
            for (let i = 0; i < Number(numberOfPlayers); i++){
                players[i] = new classes.Player("","",i)     
            }
        }
        return players;
    };

    selectGames(){
        let numberOfGames = prompt("How many games (3 or 5)?");
        return numberOfGames;
    };

    game(){
        let playerChoice = classes.Player.chooseRPSLS
    };
}

//test
let newGame = new Game()
newGame.welcomeMessage();
newGame.selectPlayers();

//exports
module.exports.game = Game