function antiCaps (str){
    var newStr = ""
    for( var i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase()
        }else {
            newStr += str[i].toUpperCase()
        }
    }
    return newStr
}

function isCaps(letter){
    return letter === letter.toUpperCase()
}
function isLower(letter){
    return letter === letter.toLowerCase()
}

console.log(antiCaps("Hello"))
console.log(antiCaps("racEcar"))
console.log(antiCaps("bAnAnA"))