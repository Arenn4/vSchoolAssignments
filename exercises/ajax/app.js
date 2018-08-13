//JS
    //document.
    //how to create HTML Elements
     var h1 = document.createElement('h1')
     var display = document.getElementById('list')
    //how to append HTML elements
    h1.textContent("Hey I'm an h1")
    display.appendChild(h1)


//C-R-U-D

    // Post: Create 
    // Get: Read
    // Put: Update 
    // Delete: Delete
    

//AJAX-Asynchronous JavaScript and XML (Extensible Markup Language)

    //readystate, onreadystatechange
var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    //code to do the request stuff
    if(xhr.readyState == 4 && xhr.status == 200){
        //parsing is turing raw JSON data (string) into a JS object we can access
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }
}


    //1.request type 2. URL 3. Is Asynchronous
xhr.open("GET", "http://swapi.co/api/people/1/", true)
xhr.send()



function displayData(data){
    var disp = document.getElementById('list')
    disp.innerHTML = `
                    <h1>${data.name}</h1>
                    
                    `
}

