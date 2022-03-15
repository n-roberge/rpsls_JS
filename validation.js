"use strict"

function numberOfPlayersValidation(input){
    if(parseInt(input) > 0 && parseInt(input) < 10){
        return true;
    } else {return false}
}

function numberOfGamesValidation(input){
    if(parseInt(input === 3) || parseInt(input) === 5){
        return true;
    } else {return false}
}

function gestureSelectedValidation(input){
    if(parseInt(input >= 0) && parseInt(input) < 5){
        return true;
    } else {return false}
}

module.exports.numberOfPlayersValidation = numberOfPlayersValidation;
module.exports.numberOfGamesValidation = numberOfGamesValidation;
module.exports.gestureSelectedValidation = gestureSelectedValidation;
