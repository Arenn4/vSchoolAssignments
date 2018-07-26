//Example of pressing a KEY to change a color
// var square = document.getElementById("square")
// function changeColor(){

// }
// window.addEventListener('keydown', function(event){
//     if(event.code === "KeyB"){
//         square.style.backgroundColor = "blue"
//     }
// })


function color1(){
    document.getElementById("square").style.backgroundColor = "blue";
}
document.getElementById("square").addEventListener("mouseover", color1)

function color2(){
    document.getElementById("square").style.backgroundColor = "red";
}
document.getElementById("square").addEventListener("mousedown", color2)

function color3(){
    document.getElementById("square").style.backgroundColor = "yellow";
}
document.getElementById("square").addEventListener("mouseup", color3)

function color4(){
    document.getElementById("square").style.backgroundColor = "green";
}
document.getElementById("square").addEventListener("dblclick", color4)

function color5(){
    document.getElementById("square").style.backgroundColor = "orange";
}
document.getElementById("square").addEventListener("wheel", color5)



