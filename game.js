"use strict";

//imports
const classes = require("./Classes");
const validation = require("./validation");


//validation
let promptFor = validation.promptFor;
let playersValid = validation.playersValid;
let gamesValid = validation.gamesValid;

class Game {
    //add constructor
    runGame(game){
        let gestures = classes.gestures
        var playerChoice2;
        var aiChoice;
        var playerChoice;

        this.welcomeMessage();
        let numberPlayers = this.selectPlayers();
        let numberOfGames = this.selectGames();
        let playersChoice = this.playerChoose(numberPlayers,game, gestures,numberOfGames,playerChoice,playerChoice2,aiChoice);
        let winner = this.roundWinner(playersChoice, numberPlayers);

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
        let numberOfPlayers = promptFor("How many players? (1 or 2): ",playersValid);

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
        //TODO validation
        let numberOfGames = promptFor("How many games (3 or 5)?",gamesValid);
        return numberOfGames;
    };
    
    roundWinner(playersChoice, players){ //TODO need to consider another opponent instead of just AI, also....three players?
        let draw = "Draw"
        let userWins = "User wins"
        let aiWins = "Computer wins"
        let result;
        let userChoice = playersChoice[0];
        let opponentChoice = playersChoice[1];
        let computerChoice = playersChoice[2];

        if (players[1] instanceof classes.AI){
            opponentChoice = computerChoice;
        }

        if(opponentChoice == "Rock"){
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
        else if(opponentChoice == "Paper"){
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
        else if(opponentChoice == "Scissors"){
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
        else if(opponentChoice == "Lizard"){
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
        else if(opponentChoice == "Spock"){
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
        if (players[1] instanceof classes.Player){
            if (result = userWins){
                result = "Player 1 wins"
            }
            else if (result = aiWins){
                result = "Player 2 wins"
            }
        }
        if(userWins){
            players[0].record++;
        } else if (aiWins){
            players[1].record++;
        }
 
        return result;
    };

    //TODO working on this
    // gameWinner(roundResult, requiredWins){
    //     let userWins = 0;
    //     let aiWins = 0;

    //     do{
    //         if (roundResult == "User wins"){
    //             userWins = userWins++;
    //         }

    //         else if (roundResult == "Computer wins"){
    //             aiWins = aiWins++;
    //         };
    //     }
    //     while (userWins !== requiredWins || aiWins !== requiredWins);
    // };

    playerChoose(numberPlayers,game, gestures,numberOfGames,playerChoice,playerChoice2,aiChoice){
        for(let i = 0; i < 2; i++){
            numberPlayers[i].numberOfGamesToPlay = Number(numberOfGames);
        }
        playerChoice = numberPlayers[0].chooseRPSLS(game, gestures);
        if (!(numberPlayers[1] instanceof classes.AI)){
            console.log("Player 2 selection:")
            playerChoice2 = numberPlayers[1].chooseRPSLS(game,gestures);
        }
        else{
            aiChoice = numberPlayers[1].chooseRPSLS(game, gestures);
        }
        
        return [playerChoice, playerChoice2,aiChoice];
    }
}

//test
// let newGame = new Game()
// let test = newGame.runGame()
// console.log(test)

//exports
module.exports.game = Game


