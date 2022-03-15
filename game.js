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

    choice(){
        //TODO validate
        let userChoice = prompt("Choose 0 for Rock\nChoose 1 for Paper\nChoose 2 for Scissors\nChoose 3 for Lizard\nChoose 4 for Spock\n");
        //let userChoice = promptFor("Choose 0 for Rock\nChoose 1 for Paper\nChoose 2 for Scissors\nChoose 3 for Lizard\nChoose 4 for Spock\n", XXXX);

        return userChoice;
    };

    initiate(){
        
    };
}

//test
let newGame = new Game()

//exports
module.exports.game = Game