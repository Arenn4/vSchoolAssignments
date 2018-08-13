//Axios-JavaScript Library(node_module) that helps us make AJAX calls to API's

    //1. An event (page load)
    //2. XMLHttpREquest object is created
    //3. The request object send the request to the server. xhr.save()
    //4. The server processes teh request
    //5. The server sends a response back to the web page
    //6. The response is then read by JavaScript


//Read

axios.get('https://api.vschool.io/AlexRenn/todo').then(function(response){
    todoShop(response.data)
})

function todoShop(data){
    var display = document.getElementById('list')    
    for(var i = 0; i < data.length; i++){
        var div = document.createElement('div')
        div.setAttribute('id', `${data[i]._id}`)
        var check = document.createElement("input")
        check.type='checkbox'
        check.setAttribute('id', `strikethrough`)
        var h2 = document.createElement('h2')
        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var img = document.createElement('img')
        var h3 = document.createElement('h3')
        var button = document.createElement('button')
        var del = document.createTextNode('Delete')
        button.setAttribute('id', 'del')
        button.appendChild(del) 
        h2.textContent = data[i].title  
        p1.textContent = data[i].price
        p2.textContent = data[i].description
        h3.textContent = data[i].completed
        img.textContent = data[i].imgURL
        div.appendChild(h2)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(button)
        div.appendChild(check)
        display.appendChild(div)
        check.addEventListener('change', function(e){
            e.preventDefault();
            console.log(this.id)
            var todoItem = document.getElementById(`${this.parentElement.id}`)
            console.log(this.parentElement.children[3].textContent === 'false')
            if(this.parentElement.children[3].textContent === 'false'){
                todoItem.style.textDecoration = 'line-through';
                this.parentElement.children[3].textContent = 'true'
                axios.put(`https://api.vschool.io/AlexRenn/todo/${this.parentElement.id}`, {completed: true})
            }else {
                todoItem.style.textDecoration = 'none';
                this.parentElement.children[3].textContent = 'false'
                axios.put(`https://api.vschool.io/AlexRenn/todo/${this.parentElement.id}`, {completed: false})
            }
            // if(this.checked){
            //     
            // } else{
            //     todoItem.style.textDecoration = 'none'
            // }
        })
        button.addEventListener('click', function(e){
            axios.delete(`https://api.vschool.io/AlexRenn/todo/${this.parentElement.id}`).then(function(response){
                console.log(response.data)//is there a .delete funciton
                location.reload(true)
            })
        })

    }
}
// function todoShop(data){
//     var display = document.getElementById('list')
//     for(var i = 0; i < data.length; i++){
//         var div = document.createElement('div')
//         var check = document.createElement("input")
//         check.type='checkbox'
//         div.textContent = data[i].title
//         display.appendChild(check)
//         display.appendChild(div)
//         var div = document.createElement('div')
//         div.textContent = data[i].price
//         display.appendChild(div)
//         var div = document.createElement('div')
//         div.textContent = data[i].description
//         display.appendChild(div)
//         var div = document.createElement('div')
//         div.textContent = data[i].completed
//         display.appendChild(div)
        // var div = document.createElement('div')
        // div.textContent = data[i].imgURL
        // display.appendChild(div)
//     }
// }



// Create-Posting new data (think signing up for the first time)
var form = document.addItem
form.addEventListener("submit", function(e){
    e.preventDefault()

    var title = form.title.value
    var description = form.description.value
    var price = form.price.value
    var url = ""
    var completed = false
    var newTodo = {
        title: title,
        description: description,
        price: price,
        imgURL: url,
        completed: completed
    }
    axios.post('https://api.vschool.io/AlexRenn/todo', newTodo).then(function(response){
        console.log(response.data)
        location.reload(true)
        })
})
//COMPLETED
//create a function that allows users to add new items-COMPLETED
//make a form and input and buttons-COMPLETED
//this must also update (PUT) the todo API
//must be able to give item new price and description





//Delete
// function onDelete(){
//     var del = document.getElementById('delete')
// }

// var form = document.addItem
// form.addEventListener("submit", function(e){
//     e.preventDefault()

//     var title = form.title.value
//     var description = form.description.value
//     var price = form.price.value
//     var url = ""
//     var completed = false
//     var removeTodo = {
//         title: title,
//         description: description,
//         price: price,
//         imgURL: url,
//         completed: completed
//     }
//     console.log(removeTodo)
//     axios.delete('https://api.vschool.io/AlexRenn/todo', removeTodo).then(function(response){
//         console.log(response.data)//is there a .delete funciton
//         })
// })

// axios.post(`https://api.vschool.io/AlexRenn/todo${id}`).then(function(response){
//     console.log(response.data)
// })




//Put-updates exiting item in database
// axios.post(`https://api.vschool.io/AlexRenn/todo${id}`).then(function(response){
    // console.log(response.data)
// })
// function updateShop


