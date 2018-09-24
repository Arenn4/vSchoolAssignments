const data = [
    {
        name: "Jon Snow"
    },
    {
        name: "Cersei Lannister"
    },
    {
        name: "Hodor"
    },
    {
        name: "Tywin Lannister"
    },
    {
        name: "The Mother Of Dragons"
    },
    {
        name: "White Walker"
    }
]



// function namesOnly(data){
//     var names = data.map(function(name){
//         return name.name
//     })
//     return names
// }

// document.getElementById("myBtn").addEventListener("click", function(e){
//     e.preventDefault()
//     document.getElementById("yo").innerHTML = namesOnly(data)
// })

// document.getElementById("yo").innerHTML = namesOnly(data)

const mapData = arr => {
    const list = document.getElementById('yo')
    list.innerHTML = ""
    for(let i =0; i < arr.length; i++){
        const h3 = document.createElement('h3')
        h3.textContent = arr[i].name
        list.appendChild(h3)
    }
}
document.getElementById('myBtn').addEventListener("click", function(e){
    e.preventDefault()
    return mapData(data)
})