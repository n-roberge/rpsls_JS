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
        console.clear();
        let winner = this.gameNextStep(numberPlayers,game,gestures,numberOfGames);
        return winner;
    }
    gameNextStep(numberPlayers,game,gestures,numberOfGames){
        let playersChoice = this.playerChoose(numberPlayers,game, gestures,numberOfGames);
        let winner = this.roundWinner(playersChoice, numberPlayers,numberOfGames);
        switch(numberPlayers[0].numberOfGamesToPlay){ 
            case 3:
                if(numberPlayers[0].record < 2 && numberPlayers[1].record < 2){
                    console.log(`\nThe result of this round is: ${winner}\n`);
                    this.gameNextStep(numberPlayers,game,gestures); 
                }
                break;
            case 5:
                if(numberPlayers[0].record < 3 && numberPlayers[1].record < 3){
                    console.log(`\nThis rounds result is: ${winner}\n`);
                    this.gameNextStep(numberPlayers,game,gestures); 
                }
                break;
                
        }
        return winner;
    }

    //Welcome, select number of games
    welcomeMessage(){
        console.clear();
        console.log("Welcome to Rock Paper Scissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

        //Rules, select gesture
        console.log("\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors\n")
    };

    selectPlayers(){
        let players = [];
        let numberOfPlayers = promptFor("How many players? (1 or 2): ",playersValid);

        if (Number(numberOfPlayers) === 1){
            players[0] = new classes.Player("","",0,1)
            //create AI player
            players[1] = new classes.AI("","")
        }

        else {
            for (let i = 0; i < Number(numberOfPlayers); i++){
                players[i] = new classes.Player("","","",i+1)     
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
        let user1Wins = "Player 1 wins"
        let user2Wins = "Player 2 wins"
        let aiWins = "Computer wins"
        let opponentWins = "";
        let result;
        let userChoice = players[0].choice;
        let opponentChoice = players[1].choice;
        let computerChoice = players[1].choice;

        if (players[1] instanceof classes.AI){
            opponentChoice = computerChoice;
        }

        if(opponentChoice == "Rock"){
            if(userChoice == "Paper" || userChoice == "Spock"){
            result = user1Wins;
            }
            else if(userChoice == "Rock"){
            result = draw;
            }
            else{
            result = opponentWins;
            }
        }
        else if(opponentChoice == "Paper"){
            if(userChoice == "Scissors" || userChoice == "Lizard"){
                result = user1Wins;
            }
            else if(userChoice == "Paper"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }
        else if(opponentChoice == "Scissors"){
            if(userChoice == "Spock" || userChoice == "Rock"){
                result = user1Wins;
            }
            else if(userChoice == "Scissors"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }   
        else if(opponentChoice == "Lizard"){
            if(userChoice == "Rock" || userChoice == "Scissors"){
                result = user1Wins;
            }
            else if(userChoice == "Lizard"){
                result = draw;
            }
            else{
                result = opponentWins;
            }   
        }
        else if(opponentChoice == "Spock"){
            if(userChoice == "Lizard" || userChoice == "Paper"){
                result = user1Wins;
            }
            else if(userChoice == "Spock"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }
        if (players[1] instanceof classes.AI && result == opponentWins){
            result = aiWins
        } else if (result == opponentWins){
                result = user2Wins;
        }
        if(result != draw && user1Wins){
            players[0].record++;
        } else if (result != draw && (aiWins || user2Wins)){
            players[1].record++;
        }
 
        return result;
    };

    //TODO working on this
    // gameWinner(roundResult, requiredWins){
    //     let user1Wins = 0;
    //     let aiWins = 0;

    //     do{
    //         if (roundResult == "User wins"){
    //             user1Wins = user1Wins++;
    //         }

    //         else if (roundResult == "Computer wins"){
    //             aiWins = aiWins++;
    //         };
    //     }
    //     while (user1Wins !== requiredWins || aiWins !== requiredWins);
    // };

    playerChoose(numberPlayers,game, gestures,numberOfGames){
        for(let i = 0; i < 2; i++){
            if(numberOfGames){
                numberPlayers[i].numberOfGamesToPlay = Number(numberOfGames);
            }
            numberPlayers[i].numberOfGamesPlayed++;
        }
        let playerChoice = numberPlayers[0].chooseRPSLS(game, gestures,numberPlayers[0]);
        numberPlayers[0].choice = playerChoice;
        if (!(numberPlayers[1] instanceof classes.AI)){
            console.log("Player 2 selection:")
            let playerChoice2 = numberPlayers[1].chooseRPSLS(game,gestures,numberPlayers[1]);
            numberPlayers[1].choice = playerChoice2;
        }
        else{
            let aiChoice = numberPlayers[1].chooseRPSLS(game, gestures);
            numberPlayers[1].choice = aiChoice;
        }
        
        return numberPlayers;
    }
}

//test
// let newGame = new Game()
// let test = newGame.runGame()
// console.log(test)

//exports
module.exports.game = Game


