"use strict"
const prompt = require("prompt-sync")();
const scripts = require("./game");

class User {
    constructor(numberOfGamesToPlay,record){
        this.numberOfGamesToPlay = numberOfGamesToPlay;
        this.record = record;
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
        let choice = prompt(" ",validation);
        return choice;
    }
    
}

class Player extends User{
    constructor(numberOfGamesToPlay,record,playerNumber){
        super(numberOfGamesToPlay, record);
        this.playerNumber = playerNumber;
    }
}

class AI extends User{
    constructor(numberOfGamesToPlay,record){
        super(numberOfGamesToPlay,record);
    }
    chooseRPSLS(){
        let choice = scripts.gestures[math.floor(math.random() * scripts.gestures.length)];
        return choice;
    }
}

module.exports.Player = Player;
module.exports.AI = AI;
