var ask = require("readline-sync");


var option = true;

while(option){
  var options = ['pick flowers', 'shoot guns', 'fight bears'];
  var index = ask.keyInSelect(options, "What would you like to do today?: ");
  if(options[index] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
    option = true
  } 
  if(options[index] === 'shoot guns'){
    console.log("You shoot guns.");
    option = true
  }
  if(options[index] === 'fight bears'){
    option = false
    return console.log("You fought a bear and got beat up!");
  }
}

