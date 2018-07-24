// function speak(){
//     console.log("Hello")
// }
// speak()

// var myObj = {
//     name: "Joe",
//     age: 30,
//     speak: function(){
//         console.log("hi")
//     }
// }
// console.log(myObj.speak())

// String.prototype.split()
// var str  = "Hello World!"
// var str2 = " Goodday Mate"
// var oIndex = str.indexOf("o", 9)
// console.log(str.toUpperCase())
// console.log(str.concat(str2))
// console.log(oIndex)
// console.log(str.slice(6, 10))
// console.log(str.split(""))
// console.log(str.toLowerCase())

function combine(str1, str2) {
    console.log(str1.toLowerCase().concat(str2.toUpperCase()))
}
combine("Hello", "World")
function combine2(str1, str2) {
    console.log(str1.slice(0,10) + str2.split(""))
}
combine2("Very Cool Kanye", "Thanks!")
function combine3(str1, str2) {
    console.log(str1.lastIndexOf("") + str2.substr(0, 4))
}
combine3("Very Cool Kanye", "Thanks!")