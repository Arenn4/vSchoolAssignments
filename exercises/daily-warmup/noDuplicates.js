function noDuplicate(str1){
    var uniql = ""
    var extras = ""

    for (var i = 0; i < str1.length; i++){
        if (uniql.indexOf(str1[i]) === -1){
            uniql += str1[i]
        } else {
            extras += str1[i]
        }
    }
return uniql
}

console.log(noDuplicate("bookkeeper larry"))
