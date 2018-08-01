var form = document.travel
form.addEventListener('submit', function(e){
    e.preventDefault()
    var first = form.fName.value
    var last = form.lName.value
    var personAge = form.age.value
    var sex = form.gender.value
    var destination = form.destination.value
    var dietaryArr = []
    var checkedBoxes = document.querySelectorAll('input[name=dietary]:checked')
    for (var i = 0; i < checkedBoxes.length; i++){
        dietaryArr.push(checkedBoxes[i].value)
    }
    alert("First Name: " + first + '\n'+ 'Last Name: ' + last + '\n' +
        "Age: " + personAge + '\n' + "Gender: " + sex + '\n' + 
        "Location: " + destination + '\n' + "Dietary Restriction: " + dietaryArr)
})
