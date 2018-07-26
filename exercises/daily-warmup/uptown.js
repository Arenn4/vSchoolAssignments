var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


// function songPrint(lyrics){
//     console.log(lyrics.join(" "))
// }
// console.log(songPrint(lyrics))

// function songBackwards(lyrics){
//     console.log(lyrics.reverse())
// }
// console.log(songBackwards(lyrics))

function printEveryWord(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i+=2){
        newArr.push(arr[i + 1])
        newArr.push(arr[i])
    }
    return newArr.join(" ")
}
console.log(printEveryWord(lyrics))