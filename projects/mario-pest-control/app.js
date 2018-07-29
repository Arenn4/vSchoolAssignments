var form = document.pest
form.addEventListener("submit", function(e){
    e.preventDefault()
    var goomb = form.goomba.value * 5
    var bob = form.bobombs.value * 7
    var cheep = form.cheepcheeps.value * 11
    var total = goomb + bob + cheep
    document.getElementById("total").innerHTML = (total)
})