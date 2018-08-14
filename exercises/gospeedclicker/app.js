window.addEventListener('click', goClick)
var clicks = localStorage.clicks || 0 //this is reseting my storage to 0 and not factoring in clicks
function goClick(){
    localStorage.clicks = clicks
    document.getElementById('num').innerHTML = (clicks++)
    
}
localStorage.setItem('amount', clicks)

document.getElementById('num').innerHTML = localStorage.getItem('amount')



//event listener listening for a click
//increment the page based on the click
//display the clicks on the browser
//store the clicks to the local storage
//This should remain on the screen even if you refresh the page


//EC, add a timer function to end click counter, (if/else functionality to end function)