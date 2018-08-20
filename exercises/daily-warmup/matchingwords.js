

const noRepeatWds = (string)=>{
    let pirateArr = string.split(" ");
    let newArr = []
    let doubleWord = []
    pirateArr.forEach(function(indexV){
        if(newArr.includes(indexV) != true){
            newArr.push(indexV)
        } else{
            if(doubleWord.includes(indexV) === false){
                doubleWord.push(indexV)
            } else{
                console.log('already in the array')
            }
        }
    })
    return doubleWord
}


console.log(noRepeatWds("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))