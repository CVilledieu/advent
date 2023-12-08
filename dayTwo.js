const fs  = require('fs');
const readline = require('readline');
let file = './dayTwoB.txt';


let rl = readline.createInterface({
    input: fs.createReadStream(file), 
    output: process.stdout,
});

let maxRed = 0;
let maxBlue = 0;
let maxGreen = 0;



const gameMap = {
    'red': red,
    'blue': blue,
    'green': green,
    'Game': gameID
}
gameMap['red'] = 1;

rl.on('line', (text)=> {
    checkGame(text, maxRed, maxBlue, maxGreen);

});

const checkGame = (line, maxRed, maxBlue, maxGreen)=> {
    let gameMap = {
        'red': 0,
        'blue': 0,
        'green': 0,
        'Game': 0
    }
    let game_entries = Object.entries(gameMap);

    for(let i = 0; i < line.length; i++){
        for (const [word, value] of game_entries) {
        const sub = line.substr(i, word.length);
        if (sub == word) {
            
        }
    }
    }
    
    for(const[word, value] of game_entries){
        if(word)
    }
    
    return gameMap['Game'];
}




for (const [digit, word] of digit_entries) {
    const sub = line.substr(i, word.length);
    if (sub == word) {

    }
}
