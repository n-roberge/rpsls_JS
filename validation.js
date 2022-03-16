"use strict";
const prompt = require("prompt-sync")();

function promptFor(input, valid){
    let isValid;
    do{
      var response = prompt(input).trim();
      isValid = valid(response);
    } 
    while(response === ""  ||  isValid === false)
    return response;
};

//valdiates players of one or two
function playersValid(input){
    if (input == "1" || input == "2"){
        return true;
    }
    else{
        console.log("Please enter 1 or 2");
        return false;
    };
};

//validates games of 3 or 5
function gamesValid(input){
    if (input == "3" || input == "5"){
        return true;
    }
    else{
        console.log("Please enter 3 or 5");
        return false;
    };
};

//validates gestures
function gesturesValid(input){
    if (/^[0-4]+$/.test(input)){
        return true;
    }
    else{
        console.log("Please enter 0-4");
        return false;
    };
};

//exports
module.exports.promptFor = promptFor;
module.exports.playersValid = playersValid;
module.exports.gamesValid = gamesValid;
module.exports.gesturesValid = gesturesValid