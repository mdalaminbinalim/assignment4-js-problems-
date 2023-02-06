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
const result = mindGame(5);
console.log(result);

