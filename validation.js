"use strict"

class Validate{
    numberOfPlayersValidation(input){
        if(parseInt(input) > 0 && parseInt(input) < 10){
            return true;
        } else {return false}
    }

    numberOfGamesValidation(input){
        if(parseInt(input) === 3 || parseInt(input) === 5){
            return true;
        } else {return false}
    }

    gestureSelectedValidation(input){
        if(parseInt(input >= 0) && parseInt(input) < 5){
            return true;
        } else {return false}
    }

    promptFor(question, valid) {
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
}

module.exports.Validate = Validate;
