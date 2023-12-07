//day one
/*
The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves
now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
Consider your entire calibration document. What is the sum of all of the calibration values?
*/
const fs  = require('fs');
const readline = require('readline');
let file = './dayOneB.txt';
let sum = 0;


let rl = readline.createInterface({
    input: fs.createReadStream(file), 
    output: process.stdout,
    terminal: false
});

rl.on('line', function(text) {
    sum += returnNumbers(text);
    console.log(sum);
});

const returnNumbers = (line) => {
    let result = 0;
    let first = 0;
    let last = 0;
    
    for(let index = 0; index < line.length; index++){
        let character = parseInt(line[index]);
        if(character){
            if(first === 0){
                first = character;
            }
            else{
                last = character;
            }
        }
    }
    result = first *10;
    if(last === 0){
        return result + first;
    }
    else{
        return result + last;
    }
}


const makeArray = (line) => {
    let result = 0;
    let first = null;
    let last = null;
    for(let index = 0; index < line.length; index++){
        if(!isNaN(line[index])){
            if(first === null){
                first = parseInt(line[index]);
            }
            else {
                last = parseInt(line[index]);
            }
        }
    }
    if(first === 0){
        return last;
    }
    else {
        result = (first * 10);
        result = result + last;
    }
    return result;
}
