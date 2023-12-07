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
let file = './adventSecret.txt';
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

console.log(sum);

const returnNumbers = (line) => {
    let result = 0;
    let first = 0;
    let last = 0;
    let streak = 0; //create a letter streak if streak is 3 or more than its able to a word
    
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
        else if(line.length - index >= 3){
                let result = checkForWord(index, line);
                if(result){
                    if(first === 0){
                        first = result;
                    }
                    else{
                        last = result;
                    }
                }
            }

    }
    result = first * 10;
    if(last === 0){
        return result + first;
    }
    else{
        return result + last;
    }
}





const checkForWord = (start, line) =>{
    const char = line[start]
    const wordNumbers = ['one','two','three','four','five','six','seven','eight','nine'];
    let currentSet = '';
    switch (char){
        case 't':
            for(let i = 0; i < wordNumbers[1].length; i++){
                currentSet += line[start + i];
            }

            if(currentSet === wordNumbers[1]){
                return 2;
            }
            currentSet += 'ee';
            if(currentSet === wordNumbers[2]){
                return 3;
            }
            break;
        case 'o':
            for(let i = 0; i < wordNumbers[0].length; i++){
                currentSet += line[start + i];
            }

            if(currentSet === wordNumbers[0]){
                return 1;
            }
            break;
        case 'f':
            for(let i = 0; i < wordNumbers[3].length; i++){
                currentSet += line[start + i];
            }

            if(currentSet === wordNumbers[3]){
                return 4;
            }
            if(currentSet === wordNumbers[4]){
                return 5;
            }
            break;
        case 's':
            for(let i = 0; i < wordNumbers[5].length; i++){
                currentSet += line[start + i];
            }
    
            if(currentSet === wordNumbers[5]){
                return 6;
            }
            currentSet += 'en';
            if(currentSet === wordNumbers[6]){
                return 7;
            }
            break;
        case 'e':
            for(let i = 0; i < wordNumbers[7].length; i++){
                currentSet += line[start + i];
            }
        
            if(currentSet === wordNumbers[7]){
                return 8;
            }
            break;
        case 'n':
            for(let i = 0; i < wordNumbers[8].length; i++){
                currentSet += line[start + i];
            }
            if(currentSet === wordNumbers[8]){
                return 9;
            }
            break;   
        default:
            break;

    }
}