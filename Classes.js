"use strict"
const prompt = require("prompt-sync")();
let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

class User {
    constructor({numberOfGamesToPlay,record=0,choice, numberOfGamesPlayed=0,gestures}){
        this.numberOfGamesToPlay = numberOfGamesToPlay;// 3 or 5 defaults to 3 if undefined
        this.record = record; //[wins] if undefined, defaults to 0
        this.choice = choice; // 0 for Rock, 1 for Paper, 2 for Scissors, 3 for Lizard, 4 for Spock
        this.numberOfGamesPlayed = numberOfGamesPlayed; // if undefined, defaults to 0

    }
    // Getters and Setters
    getWinLossRecord() {
        return this.record;
    }
    setWinLossRecord(input){
        record += Number(input);
    }
    getNumberOfGamesToPlay(){
        return this.numberOfGamesToPlay;
    }
    setNumberOfGamesToPlay(input){
        numberOfGamesToPlay = Number(input);
    }
    setNumberOfGamesPlayed(input){
        return this.numberOfGamesPlayed += Number(input);
    }
    getNumberOfGamesPlayed(){
        return this.numberOfGamesPlayed;
    }

    //Choose Rock,Paper,Scissors,Lizard or Spock for Human Players
    chooseRPSLS(game, gestures){ 
        console.log(`\nChoose one of the following by entering the number of the choice: `);
        for(let i = 0; i < gestures.length; i++){
            console.log(`<${i}> ${gestures[i]}`);
        }
        let choice = Number(prompt(" "));
        console.log(`\nYou chose ${gestures[choice]}\n`)

        choice = gestures[choice]//Nick added

        return choice;
    }

}

class Player extends User{
    constructor(numberOfGamesToPlay,record,choice,playerNumber){
        super(numberOfGamesToPlay, record, choice);
        this.playerNumber = playerNumber;
    }
}

class AI extends User{ 
    constructor(numberOfGamesToPlay,record,choice){
        super(numberOfGamesToPlay,record,choice);//Nick - added choice here, need to test
    }
    chooseRPSLS(game, gestures){// override method of User for computer player
        let choice = gestures[Math.floor(Math.random() * gestures.length)];
        console.log(`Computer chose ${choice}`)
        return choice;
    }
}

module.exports.gestures = gestures;
module.exports.Player = Player;
module.exports.AI = AI;
