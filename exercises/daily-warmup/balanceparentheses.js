//below correct, not dynamic
// const par = str => {
//     if(str === "()()" || str === "(())"){
//         return true
//     }else{
//         return false
//     }
// }

//dynamic answer
const balanceParenthesis = str =>{
    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            result++
        }else if(str[i] === ')'){
            result--
        }
        if(result < 0){
            return false
        }
    }
    return result === 0 ? true : false
}



console.log(balanceParenthesis('()()')) //true
console.log(balanceParenthesis('(())')) //true
console.log(balanceParenthesis('()))')) //false
console.log(balanceParenthesis(')()(')) //false
console.log(balanceParenthesis('())(')) //false



// "()()" --> true
//"(())" --> true
//"()))" --> false