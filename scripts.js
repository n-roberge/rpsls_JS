"use strict";

//imports
const classes = require("./Classes");
const { numberOfGamesValidation, numberOfPlayersValidation, gestureSelectedValidation } = require("./validation");
const prompt = require("prompt-sync")();

let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function selectPlayers(){
    let players = [];
    let numberOfPlayers = promptFor("How many players?:", numberOfPlayersValidation);

    if (Number(numberOfPlayers) === 1){
        players[0] = new classes.Player("","",0)
        //create AI player
        players[1] = new classes.AI("","")
    }

    else {
        for (let i = 0; i < Number(numberOfPlayers); i++){
            players[i] = new classes.Player("","",i)     
        }
    }
    return players;
};

//test

let test = selectPlayers()
console.log(test)

function selectGames(){
    let numberOfGames = promptFor("How many games (3 or 5)?", numberOfGamesValidation);
    return numberOfGames;
};

function promptFor(question, valid) {
    let isValid;
    do {
        var response = prompt(question);
        if (response !== null) {
        response.trim();
        }
        isValid = valid(response);
    } while (response === "" || isValid === false || response === null);

    return response;
}


//exports
module.exports.players = selectPlayers
module.exports.games = selectGames
module.exports.gestures = gestures