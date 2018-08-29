const validateIP = str =>{
    const valid = str.split(".").map((IP) => {
        if(IP <= 255 && IP >= 0){
            return IP
        }
    })
    if(valid.join(".") === str && valid.length === 4){
        return `${str} IS a valid IP address`
    } else {
        return `${str} is NOT a valid IP address`
    }
}

console.log(validateIP("172.16.254.1")) //true
console.log(validateIP("300.16.254.1")) //first segment out of range
console.log(validateIP("172.16.2.4.1")) //too many segments
console.log(validateIP("172.kk.254.1")) //second segment letters
console.log(validateIP("0.0.0.255")) //true
