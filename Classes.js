"use strict"
const prompt = require("prompt-sync")();

class User {
    constructor(numberOfGamesToPlay,record,choice){
        this.numberOfGamesToPlay = numberOfGamesToPlay ?? 3;// 3 or 5 defaults to 3 if undefined
        this.record = record ?? 0; //[wins] if undefined, defaults to 0
        this.choice = choice; // 0 for Rock, 1 for Paper, 2 for Scissors, 3 for Lizard, 4 for Spock
        this.numberOfGamesPlayed = numberOfGamesPlayed ?? 0; // if undefined, defaults to 0

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
    chooseRPSLS(game){ 
        console.log(`Choose one of the following by entering the number of the choice: `);
        for(let i = 0; i < game.gestures.length; i++){
            console.log(`<${i}> ${game.gestures[i]}`);
        }
        let choice = Number(prompt(" "));
        console.log(`You chose ${game.gestures[choice]}`)
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
    chooseRPSLS(game){// override method of User for computer player
        let choice = game.gestures[Math.floor(Math.random() * game.gestures.length)];
        console.log(`Computer chose ${game.gestures[1]}`)
        return choice;
    }
}

module.exports.Player = Player;
module.exports.AI = AI;
