var dictionary = {}


function addEntry(word, definition){
    if(!definition[word]){
    dictionary[word] = definition;
    }
}

function lookItUp(key){
    return (dictionary[key])
}

addEntry('Hello', 'A greeting')
console.log(dictionary)
addEntry('Hello', 'A farewell')
console.log(lookItUp('hello'))