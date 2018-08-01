var ask = require('readline-sync')

var phrase = ask.question("What phrase would you like to encrypt? ")
var shift = parseInt(ask.question("How many letters should the phrase shift?: "))

function caeserCipher(str, num){
    var encrypted = ""
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for(var i = 0; i < str.length; i++){
        if(alphabet.indexOf(str[i]) !== -1){
            var currentIndex = alphabet.indexOf(str[i])
            encrypted += alphabet[(currentIndex + shift) % 26]
        } else{
            encrypted += str[i]
        }
    }
    return encrypted
}

console.log(caeserCipher(phrase, shift))