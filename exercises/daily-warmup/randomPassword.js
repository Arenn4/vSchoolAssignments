function randomPassword(m){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < m; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

console.log(randomPassword(2))

function randomPass(n){
    var num = ""
    var numbs = "0123456789"
    for (var i = 0; i < n; i++){
        num += numbs.charAt(Math.floor(Math.random() * numbs.length))
    }
    return num
}
console.log(randomPass(8))