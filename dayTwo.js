const fs  = require('fs');
const readline = require('readline');
let file = './dayTwoB.txt';


let rl = readline.createInterface({
    input: fs.createReadStream(file), 
    output: process.stdout,
    terminal: false
});

let maxRed = 0;
let maxBlue = 0;
let maxGreen = 0;


rl.on('line', (text)=> {
    checkGame(text, maxRed, maxBlue, maxGreen);

});

const checkGame = (line, maxRed, maxBlue, maxGreen)=> {
    let gameMap = {
        'red': maxRed,
        'blue': maxBlue,
        'green': maxGreen,
        'Game': 0
    }
    let tempNum = 0;
    let game_entries = Object.entries(gameMap);
    let lineArray = line.split(' ');

    for(let i = 0; i < lineArray.length; i++){
        let num = parseInt(lineArray[i]);
        if(num){
            if(gameMap['Game'] === 0){
                gameMap['Game'] = num;
            }
        }
        for (const [word, value] of game_entries) {
            const sub = lineArray[i].substr(0, word.length);
            if (sub == word) {
                console.log(word);
            }
        }
    }
    for(const[word, value] of game_entries){
        if(word){

        }
    }
    
    return gameMap['Game'];

}   

/* 
for (const [digit, word] of digit_entries) {
    const sub = line.substr(i, word.length);
    if (sub == word) {

    }
}
 */
