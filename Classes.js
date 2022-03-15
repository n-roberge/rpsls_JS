"use strict"
const prompt = require("prompt-sync");

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

        

    chooseRPSLS(gestures){
        console.log(`Choose one of the following by entering the number of the choice: `);
        for(let i = 0; i < gestures.length; i++){
            console.log(`<${i}> ${gestures[i]}`);
        }
        let choice = prompt(" ",validation);
        return choice;
    }
    
}

class Player extends User{
    constructor(numberOfGamesToPlay,record,playerNumber){
        this.playerNumber = playerNumber;
        super(numberOfGamesToPlay);
        super(record);
    }
}

class AI extends User{
    constructor(numberOfGamesToPlay,record){
        super(numberOfGamesToPlay);
        super(record);
    }
    chooseRPSLS(gestures){
        let choice = math.floor(math.random() * gestures.length)
        return choice;
    }
}

module.exports.Player = Player;
module.exports.AI = AI;
