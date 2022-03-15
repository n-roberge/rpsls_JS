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
                players[i] = new classes.Player("","","",i)     
            }
        }
        return players;
    };

    //returns number of requried wins based on amount of games
    selectGames(){
        let requiredWins;
        //TODO validation
        let numberOfGames = prompt("How many games (3 or 5)?");

        switch (numberOfGames){
            case "3":
                requiredWins = 2;
                break;
            case "5":
                requiredWins = 3;
                break;
        }
        return requiredWins;
    };

    startGame(){
        //player chooses gesture
        classes.players.chooseRPSLS();

        //AI chooses gesture if needed

        //Round winner

        //Next round or finish depending on requiredWins

    };
}

//test
let newGame = new Game()
let test = newGame.selectPlayers()
console.log(test)

//exports
module.exports.game = Game