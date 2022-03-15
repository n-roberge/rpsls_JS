"use strict"
const prompt = require("prompt-sync")();
const scripts = require("./game");

class User {
    constructor(numberOfGamesToPlay,record,choice){
        this.numberOfGamesToPlay = numberOfGamesToPlay;
        this.record = record;
        this.choice = choice;
    }
    getWinLossRecord() {
        return this.record;
    }
    setWinLossRecord(record){
        record += parseInt(input);
    }
    getNumberOfGamesToPlay(){
        return this.numberOfGamesToPlay;
    }
    setNumberOfGamesToPlay(input){
        numberOfGamesToPlay = parseInt(input);
    }
    chooseRPSLS(){
        console.log(`Choose one of the following by entering the number of the choice: `);
        for(let i = 0; i < scripts.game.gestures.length; i++){
            console.log(`<${i}> ${scripts.game.gestures[i]}`);
        }
        choice = prompt(" ");
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
    chooseRPSLS(){
        let choice = scripts.game.gestures[math.floor(math.random() * scripts.game.gestures.length)];
        return choice;
    }
}

module.exports.Player = Player;
module.exports.AI = AI;
