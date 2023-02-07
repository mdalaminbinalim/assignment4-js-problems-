//* Assignment 4 (JavaScript Problems) *//


// /* Problem 1 */ //

function mindGame (numberTaken){

    // This Function will return a number after some mathematical operations. //

    if (typeof numberTaken !== 'number'){
        return "Provide Valid Input. Input must be a number..."
    }

    else {
        let multiply = numberTaken * 3;
        let add = multiply + 10;
        let divide = add / 2;
        let result = divide - 5;
        return result;
    }
}



// /* Problem 2 */ //

function evenOdd (string) {

    // This Function will return whether the input string's length is an even or odd.

    if (typeof string !== 'string'){
        return "Provide Valid Input. Input must be a string type data..."
    }

    else if (string.length % 2 === 0){
        return "even";
    }

    else {
        return "odd";
    }
}



// /* Problem 3 */ //

function isLGSeven (number){

    // This Function will return the input and number if it is less than 7 or it will return double of input if it is greater than 7.

    if (typeof number !== 'number'){
        return "Provide Valid Input. Input must be a number..."
    }

    else if (Math.abs(number - 7) < 7){
        const difference = Math.abs(number - 7);
        return difference;
    }

    else {
        return number*2;
    }
}



// /* Problem 4 */ //

function findingBadData (dataInArray){

    // This Function will return the number of Bad datas in an Array.

    if (typeof dataInArray !== 'object'){
        return "Provide Valid Input. Input must be an array..."
    }

    const badData = [];
    for (let i = 0; i < dataInArray.length; i++){
        const element = dataInArray[i];
        if (element < 0){
            badData.push(element);
        }
    }
    return badData.length;
}



// /* Problem 5 */ //

function gemsToDiamond (friend1Gems, friend2Gems, friend3Gems){

    // This Function will convert the number of Gems of three friends into Diamonds.

    if (typeof friend1Gems !== 'number' || typeof friend2Gems !== 'number' || typeof friend3Gems !== 'number'){
        return "Provide All The Valid Inputs. Input must be numbers..."
    }

    let friend1Diamond = friend1Gems * 21;
    let friend2Diamond = friend2Gems * 32;
    let friend3Diamond = friend3Gems * 43;

    const totalDiamonds = friend1Diamond + friend2Diamond + friend3Diamond;

    if (totalDiamonds >= (1000*2)){
        const diamondsLeft = totalDiamonds - 2000;
        return diamondsLeft;
    }
    else {
        return totalDiamonds;
    }
}
