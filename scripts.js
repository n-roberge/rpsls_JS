"use strict";

//imports
const classes = require("./Classes");
const prompt = require("prompt-sync")();

let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function selectPlayers(){
    let players = [];
    let numberOfPlayers = prompt("How many players?:");

    if (Number(numberOfPlayers) === 1){
        //create AI player, set player one to player one
        //test
        console.log("one player")
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
    let numberOfGames = prompt("How many games (3 or 5)?");
    return numberOfGames;
};


//exports
module.exports.players = selectPlayers
module.exports.games = selectGames
module.exports.gestures = gestures