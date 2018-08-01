var form = document.airline

form.addEventListener("submit", function(evt){
    evt.preventDefault()
    var firstName = form.firstName.value
    var lastName = form.lastName.value
    var age = form.age.value
    var gender = form.gender.value
    var location = form.travellocation.value
    var diet = []
    var query = document.querySelectorAll('input[name=diet]:checked')
    for(var i = 0; i < query.length; i++){
        diet.push(query[i].value)
    }
    // if (form.elements['vegan'].checked) {
    //     diet.push(document.getElementById("vegan").value);
    // }
    // if (form.elements['gluten'].checked) {
    //     diet.push(document.getElementById('gluten').value);
    // }
    // if (form.elements['paleo'].checked) {
    //     diet.push(document.getElementById('paleo').value);
    // }
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Travel Location: " + location + "\n" + "Diet: " + diet + "\n" + "Awesome, now if you die, it won't be an accident..")
})