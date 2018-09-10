//Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.


function stringifyUrl(url, query) {
    url += '?'
    for(let key in query) {
        url += `${key}=${query[key]}&`
    }
    return url.substr(0, url.length-1)
}

const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}

stringifyUrl(url, query)
//returns "http://localhost:8080/monkeys?color=black&species=howler"



//Part 2
//Write a function that does the opposite from above: given a valid URL with a query string attached, return a query object.

const deStringify = str =>{
let url = str
let splitUrl = url.split("?")[i]
let splitProperties = splitUrl.split('&')
let queryObj = {}
for(let i = 0; i < splitProperties.length; i++){
    let keyValueArr = splitProperties[i].split('=')
    queryObj[keyValueArr[0]] = keyValueArr[1]
    }
}

console.log(deStringify("http://localhost:8080/monkeys?color=black&species=howler"))