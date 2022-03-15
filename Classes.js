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
        for(let i = 0; i < scripts.gestures.length; i++){
            console.log(`<${i}> ${scripts.gestures[i]}`);
        }
        choice = prompt(" ",validation);
        return choice;
    }
    
}

class Player extends User{
    constructor(numberOfGamesToPlay,record,playerNumber){
        super(numberOfGamesToPlay, record,choice);
        this.playerNumber = playerNumber;
    }
}

class AI extends User{
    constructor(numberOfGamesToPlay,record,choice){
        super(numberOfGamesToPlay,record,choice);//Nick - added choice here, need to test
    }
    chooseRPSLS(){
        let choice = scripts.gestures[math.floor(math.random() * scripts.gestures.length)];
        return choice;
    }
}

module.exports.Player = Player;
module.exports.AI = AI;
