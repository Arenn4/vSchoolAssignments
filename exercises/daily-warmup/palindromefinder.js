function isPalindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }





console.log(isPalindrome("Star Rats!"))  // true  
console.log(isPalindrome("palindrome"))  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"))  // true 