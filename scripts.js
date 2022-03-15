const prompt = require("prompt-sync")();

let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function selectPlayers(){
    let numberOfPlayers = prompt("How many players?:");

    if (Number(numberOfPlayers) === 1){
        //create AI player, set player one to player one
        //test
        console.log("one player")
    }

    else {
        for (let i = 0; i < numberOfPlayers; i++){
            //player[i] = new Player([i])
            //return player[i]
            //test
            console.log("Player " + i + " created")
        }
    }
    return numberOfPlayers;
};

function selectGames(){
    let numberOfGames = prompt("How many games (3 or 5)?");
    return numberOfGames;
};


//exports
module.exports.players = selectPlayers
module.exports.games = selectGames