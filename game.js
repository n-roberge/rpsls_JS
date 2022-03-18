"use strict";

//imports
const classes = require("./Classes");
const validation = require("./validation");


//validation
let promptFor = validation.promptFor;
let playersValid = validation.playersValid;
let gamesValid = validation.gamesValid;

class Game {
    constructor(){
        this.playerOne;
        this.playerTwo; 
        this.gestures = classes.gestures;
    }
    runGame(game){
        this.welcomeMessage();
        this.selectPlayers();
        this.selectGames();
        console.clear();
        let winner = this.gameNextStep(game);
        return winner;
    }
    gameNextStep(game){
        this.playerChoose();
        let winner = this.roundWinner();

        switch(this.playerOne.numberOfGamesToPlay){ 
            case 3:
                if(this.playerOne.record < 2 && this.playerTwo.record < 2){
                    console.log(`\nThe result of this round is: ${winner}\n`);
                    winner = this.gameNextStep(game); 
                } else if (this.playerOne.record < 2 && this.playerTwo.record < 2){
                    winner = "Draw!";
                }
                break;
            case 5:
                if(this.playerOne.record < 3 && this.playerTwo.record < 3){
                    console.log(`\nThis rounds result is: ${winner}\n`);
                    winner = this.gameNextStep(game); 
                } else if(this.playerOne.record < 3 && this.playerTwo.record < 3){
                    winner = "Draw!";
                }
                break;  
        };
        return winner;
    };

    //Welcome
    welcomeMessage(){
        console.clear();
        console.log("Welcome to Rock Paper Scissors Lizard Spock\n\nEach match will be best of three or five games.\nUse the number keys to enter your selection")

        //Rules
        console.log("\nScissors cuts Paper\nPaper covers Rock\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates lizard\nLizard eats paper\nPaper disaproves Spock\nSpock vaporizes Rock\nRock crushes Scissors\n")
    };

    //selects number of players
    selectPlayers(){
        let numberOfPlayers = promptFor("How many players? (1 or 2): ",playersValid);

        if (Number(numberOfPlayers) === 1){
            this.playerOne = new classes.Player("","",0,1);
            //create AI player
            this.playerTwo = new classes.AI("","");
        }

        else {
            this.playerOne = new classes.Player("","",0,1);
            this.playerTwo = new classes.Player("","",0,2);
        }
    };

    //returns number of games
    selectGames(){
        let numberOfGames = promptFor("How many games (3 or 5)? ",gamesValid);
            this.playerOne.numberOfGamesToPlay = Number(numberOfGames);
            this.playerTwo.numberOfGamesToPlay = Number(numberOfGames);
    };
    
    //returns winner of each round
    roundWinner(){ 
        let draw = "Draw";
        let user1Wins = "Player 1 wins";
        let user2Wins = "Player 2 wins";
        let aiWins = "Computer wins";
        let opponentWins = "";
        let result;


        if(this.playerTwo.choice == "Rock"){
            if(this.playerOne.choice == "Paper" || this.playerOne.choice == "Spock"){
            result = user1Wins;
            }
            else if(this.playerOne.choice == "Rock"){
            result = draw;
            }
            else{
            result = opponentWins;
            }
        }
        else if(this.playerTwo.choice == "Paper"){
            if(this.playerOne.choice == "Scissors" || this.playerOne.choice == "Lizard"){
                result = user1Wins;
            }
            else if(this.playerOne.choice == "Paper"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }
        else if(this.playerTwo.choice == "Scissors"){
            if(this.playerOne.choice == "Spock" || this.playerOne.choice == "Rock"){
                result = user1Wins;
            }
            else if(this.playerOne.choice == "Scissors"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }   
        else if(this.playerTwo.choice == "Lizard"){
            if(this.playerOne.choice == "Rock" || this.playerOne.choice == "Scissors"){
                result = user1Wins;
            }
            else if(this.playerOne.choice == "Lizard"){
                result = draw;
            }
            else{
                result = opponentWins;
            }   
        }
        else if(this.playerTwo.choice == "Spock"){
            if(this.playerOne.choice == "Lizard" || this.playerOne.choice == "Paper"){
                result = user1Wins;
            }
            else if(this.playerOne.choice == "Spock"){
                result = draw;
            }
            else{
                result = opponentWins;
            }
        }

        if (this.playerTwo instanceof classes.AI && result == opponentWins){
            result = aiWins
        } else if (result == opponentWins){
                result = user2Wins;
        }

        if(result == user1Wins){
            this.playerOne.record++;
        } else if (result == aiWins || result == user2Wins){
            this.playerTwo.record++;
        }
        return result;
    };

    //user selects gestures
    playerChoose(){
        this.playerOne.numberOfGamesPlayed++;
        this.playerTwo.numberOfGamesPlayed++;

        let playerChoice = this.playerOne.chooseRPSLS(this.gestures,this.playerOne);
        this.playerOne.choice = playerChoice;
        if (!(this.playerTwo instanceof classes.AI)){
            console.log("Player 2 selection:")
            let playerChoice2 = this.playerTwo.chooseRPSLS(this.gestures,this.playerTwo);
            this.playerTwo.choice = playerChoice2;
        }
        else{
            let aiChoice = this.playerTwo.chooseRPSLS(this.gestures);
            this.playerTwo.choice = aiChoice;
        }
    }
}

//exports
module.exports.game = Game;


