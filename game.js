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
        let playerChoice = this.playerChoose(numberPlayers,game,gestures,numberOfGames);

        let winner = this.roundWinner(playerChoice, numberPlayers,game,);

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
        return numberOfGames;
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
            if(userChoice == "Scissors" || userChoice == "Lizard"){
                result = userWins;
            }
            else if(userChoice == "Paper"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }
        else if(computerChoice == "Scissors"){
            if(userChoice == "Spock" || userChoice == "Rock"){
                result = userWins;
            }
            else if(userChoice == "Scissors"){
                result = draw;
            }
            else{
                result = aiWins;
            }
        }   
        else if(computerChoice == "Lizard"){
            if(userChoice == "Rock" || userChoice == "Scissors"){
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

























    playerChoose(numberPlayers,game,gestures,numberOfGames){
        for(let i = 0; i < 2; i++){
            numberPlayers[i].setNumberOfGamesToPlay(numberOfGames);
        }
        let player2Choice;
        let player1Choice = numberPlayers[0].chooseRPSLS(game, gestures);
        if(numberPlayers.filter(arr => arr instanceof classes.AI).length){
            player2Choice = numberPlayers[1].chooseRPSLS(game, gestures);

        } else {
            player2Choice = numberPlayers[1].chooseRPSLS(game, gestures);
        }
        return [player1Choice,player2Choice,game,gestures]
        
    }
}

//test
let newGame = new Game()
let test = newGame.runGame()
console.log(test)

//exports
module.exports.game = Game


