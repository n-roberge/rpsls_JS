"use strict";

//imports
const classes = require("./Classes");
const prompt = require("prompt-sync")();

class Game {

    gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    //Welcome, select number of games
    welcomeMessage(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

        //Rules, select gesture
        console.log("\n\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors")
    };

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

    //if there is an AI, randomly selects a gesture
    //TODO this conflicts with the class prompt
    aiChoice(){
        let players = this.selectPlayers();
        let computerChoice = Math.random()
        computerChoice = Math.floor((computerChoice * 5) + 1);

        if (computerChoice == 1){
            computerChoice = "Rock"
        }
        else if(computerChoice == 2){
            computerChoice = "Paper";
        }
        else if(computerChoice == 3){
            computerChoice = "Scissor";
        }
        else if(computerChoice == 4){
            computerChoice = "Lizard";
        }
        else{
            computerChoice = "Spock";
        } 

        players[1]["choice"] = computerChoice
        return computerChoice; //TODO not sure if this should return just the choice
    };
    
    roundWinner(userChoice, computerChoice, players){ //TODO need to consider another opponent instead of just AI, also....three players?
        let userChoice = userChoice
        let computerChoice = computerChoice
        let opponentChoice;
        let draw = "Draw"
        let userWins = "User wins"
        let aiWins = "Computer wins"
        let result;

        if (players.length === 1){
            computerChoice = opponentChoice;
        }

        if(computerChoice == "Rock"){
            if(userChoice == "paper" || userChoice == "spock"){
            result = userWins;
            }
            else if(userChoice == "rock"){
            result = draw;
            }
            else{
            result = aiWins;
            }
        }
        else if(computerChoice == "Paper"){
            if(userChoice == "scissor" || userChoice == "lizard"){
                result = userWins;
            }
            else if(userChoice == "paper"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }
        else if(computerChoice == "Scissor"){
            if(userChoice == "spock" || userChoice == "rock"){
                result = userWins;
            }
            else if(userChoice == "scissor"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }   
        else if(computerChoice == "Lizard"){
            if(userChoice == "rock" || userChoice == "scissor"){
                result = userWins;
            }
            else if(userChoice == "lizard"){
                result = draw;
            }
            else{
                result = aiWins;
            }   
        }
        else if(computerChoice == "Spock"){
            if(userChoice == "lizard" || userChoice == "paper"){
                result = userWins;
            }
            else if(userChoice == "spock"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }
        return result
    };

    gameWinner(result, requiredWins){
        let roundResult = result;
        let requiredWins = requiredWins;
        let userWins = 0
        let aiWins = 0

        while (userWins !== requiredWins || aiWins !== requiredWins){
            if (roundResult == "User wins"){
                userWins = userWins + 1;
            }
            else if (roundResult == "Computer wins"){
                aiWins = aiWins + 1;
            };
        }
    };
}

//test
let newGame = new Game()
let test = newGame.aiChoice()
console.log(test)

//exports
module.exports.game = Game