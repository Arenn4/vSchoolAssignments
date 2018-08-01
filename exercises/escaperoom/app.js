var ask = require('readline-sync')

var name = ask.question('Welcome to the Escape Room, what is your name? ');

//template literals
console.log(`Hello ${name}, you have entered a room. Your goal is to escape, good luck ${name}! \n`)

var isAlive = true;
var hasKey = false;

while(isAlive){
    var choices = ['Put hand in hole', 'Find the key', 'Open the door'];
    var index = ask.keyInSelect(choices, "What would you like to do? ");

    if(choices[index] === 'Open the door'){
        if(hasKey){
            console.log('the door was opened')
            isAlive = false
        }else{
            console.log('go find the key')
            isAlive = true
        }
    }
    if(choices[index] === 'Put hand in hole'){
        console.log("You are dead")    
        isAlive = false
        }
    if(choices[index] === 'Find the key'){
        console.log("You have found the key")
        while(hasKey=true){
            var options = ['Put hand in hole', 'Open the door'];
            var codex = ask.keyInSelect(options, "What would you like to do? ");
            if (options[codex] === 'Put hand in hole'){
                return console.log("You are dead")
                isAlive = false
            } else if (options[codex] === 'Open the door') {
                hasKey=true
                isAlive=true
                return console.log("You have escaped!")
                
            }
        }
    }
}