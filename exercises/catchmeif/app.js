//1a
function sum(x, y){
    if(!x || !y){
        throw 'Input must be a number'
    } else {
        return x + y
    }
}

console.log(sum(2, 2))
//1b
try {
    function sum(x, y){
    }if(x == '' || y == ''){
        throw 'Input must be a number'
} else if(x == String || y == String){
    throw 'This is a string not a number'
} else{
    console.log('code is running fine')
}
}finally {
    console.log('runs no matta wut')
}

//2a
var user = {username: "sam", password: "123abc"};  
function login(username, password){  
  if(username === 'sam' && password === '123abc'){
      throw 'username and password are not correct'
  } else{
      console.log('Login successful!')
  }
}
//2b
try{
    console.log(login(username, password))
    if(username != 'sam' && password != '123abc'){
        throw 'username and password are not correct'
    }
} finally{
    console.log('login successful')
}