"use strict";

//imports
const classes = require("./Classes");
const prompt = require("prompt-sync")();


class Game {
    runGame(game){
        let gestures = classes.gestures

        this.welcomeMessage();
        let numberPlayers = this.selectPlayers();
        let numberOfGames = this.selectGames();
        let playerChoice = numberPlayers[0].chooseRPSLS(game, gestures);
        let aiChoice = numberPlayers[1].chooseRPSLS(game, gestures);
        let winner = this.roundWinner(playerChoice,aiChoice, numberPlayers);

        return winner;
    }

    //Welcome, select number of games
    welcomeMessage(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

        //Rules, select gesture
        console.log("\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors\n")
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
        let opponentChoice;
        let draw = "Draw"
        let userWins = "User wins"
        let aiWins = "Computer wins"
        let result;

        if (players.length === 1){
            computerChoice = opponentChoice;
        }

        if(computerChoice == "Rock"){
            if(userChoice == "Paper" || userChoice == "Spock"){
            result = userWins;
            }
            else if(userChoice == "Rock"){
            result = draw;
            }
            else{
            result = aiWins;
            }
        }
        else if(computerChoice == "Paper"){
            if(userChoice == "Scissor" || userChoice == "Lizard"){
                result = userWins;
            }
            else if(userChoice == "Paper"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }
        else if(computerChoice == "Scissor"){
            if(userChoice == "Spock" || userChoice == "Rock"){
                result = userWins;
            }
            else if(userChoice == "Scissor"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }   
        else if(computerChoice == "Lizard"){
            if(userChoice == "Rock" || userChoice == "Scissor"){
                result = userWins;
            }
            else if(userChoice == "Lizard"){
                result = draw;
            }
            else{
                result = aiWins;
            }   
        }
        else if(computerChoice == "Spock"){
            if(userChoice == "Lizard" || userChoice == "Paper"){
                result = userWins;
            }
            else if(userChoice == "Spock"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }
        return result
    };

    //TODO working on this
    gameWinner(roundResult, requiredWins){
        let userWins = 0;
        let aiWins = 0;

        do{
            if (roundResult == "User wins"){
                userWins = userWins++;
            }

            else if (roundResult == "Computer wins"){
                aiWins = aiWins++;
            };
        }
        while (userWins !== requiredWins || aiWins !== requiredWins);
    };
}

//test
let newGame = new Game()
let test = newGame.runGame()
console.log(test)

//exports
module.exports.game = Game