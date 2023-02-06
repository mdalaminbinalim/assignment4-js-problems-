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
        return "Provide Valid Input. Input must be a string data type..."
    }
    else if (string.length % 2 === 0){
        return "even";
    }
    else {
        return "odd"
    }
}


