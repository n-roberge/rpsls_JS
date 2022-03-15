"use strict"

function numberOfPlayersValidation(input){
    if(parseInt(input) > 0 && parseInt(input) < 10){
        return true;
    } else {return false}
}

function numberOfGamesValidation(input){
    if(parseInt(input) === 3 || parseInt(input) === 5){
        return true;
    } else {return false}
}

function gestureSelectedValidation(input){
    if(parseInt(input >= 0) && parseInt(input) < 5){
        return true;
    } else {return false}
}

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

module.exports.numberOfPlayersValidation = numberOfPlayersValidation;
module.exports.numberOfGamesValidation = numberOfGamesValidation;
module.exports.gestureSelectedValidation = gestureSelectedValidation;
