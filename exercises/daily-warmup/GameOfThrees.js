// Write a recursive function that takes two integers, n and counter as parameters and does the following:
//function(n, counter)

// If the n is divisible by three, divide it by three and call the function again, providing the new value as n and counter + 1 as counter

//if n/3 then n/3 => call function. result=n, and counter++
//else n+/-1 to find value n/3
//else if n=1 return counter

// If not, either add or subtract 1 to a get a new value that is divisible by three and repeat step 1.

// If n is one, simply return the value counter.

const factor = (n, counter)=> {
//if n/3 then n/3 => call function. result=n, and counter++
    if(n / 3 % 0 && n !==0){
        console.log(n, counter)
        factor(n/3, counter + 1)
    }else if((n+1) % 3 === 0){
        //need to check if we need to +/- 1
        return factor(n+1, counter)
    }else if((n-1) % 3 === 0){
        return factor(n-1, counter)
        //else if n=1 return counter
    }else{
        return counter
    }
}

const threes = (n, counter) =>{
    if(n % 3 === 0){
        return threes(n/3, counter + 1)
    }else if(n === 1){
        return counter
    } else {
        return n + 1 % 3 === 0
            ? threes(n + 1, counter)
            : threes(n - 1, counter)
    }
}


console.log(factor(12, 0))