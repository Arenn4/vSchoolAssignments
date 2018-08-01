var ask = require('readline-sync')
var upperCase = require('upper-case')
var slice = require('node-slice')

var name = ask.question("What is your name? ")
console.log(upperCase('Hello ' + name + '\n'))
console.log(name.length + '\n')

var age = ask.question("How old are you? ")
console.log('Hello ' + name + ', you are quite young at the age of: ' + age + '\n')
console.log(name + ' ' + age + '\n')

var story = ask.question("Please tell us a story: ")
console.log(story.substring(story.length/2))
console.log(story.slice(15, 30))


